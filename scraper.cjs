const { chromium } = require('playwright');
const fs = require('fs');
const https = require('https');
const http = require('http');
const { URL } = require('url');

function downloadFile(fileUrl, outputPath) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(fileUrl);
    const protocol = urlObj.protocol === 'https:' ? https : http;
    const file = fs.createWriteStream(outputPath);
    protocol.get(fileUrl, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        downloadFile(response.headers.location, outputPath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 }
  });

  // Inject li_at cookie — skips login page entirely
  await context.addCookies([{
    name: 'li_at',
    value: process.env.LI_AT_COOKIE,
    domain: '.linkedin.com',
    path: '/',
    httpOnly: true,
    secure: true
  }]);

  const page = await context.newPage();

  try {
    console.log('Navigating directly to profile (cookie auth)...');
    await page.goto('https://www.linkedin.com/in/karthik-korrayi/', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });
    await page.waitForTimeout(4000);

    const currentUrl = page.url();
    console.log('Current URL:', currentUrl);

    // If cookie expired, LinkedIn redirects to login
    if (currentUrl.includes('/login') || currentUrl.includes('/authwall')) {
      await page.screenshot({ path: 'debug-screenshot.png' });
      console.error('Cookie expired or invalid. Please refresh LI_AT_COOKIE secret.');
      process.exit(1);
    }

    if (currentUrl.includes('checkpoint') || currentUrl.includes('challenge')) {
      await page.screenshot({ path: 'debug-screenshot.png' });
      console.error('LinkedIn challenge page hit. See debug screenshot.');
      process.exit(1);
    }

    console.log('Searching for profile image...');

    const selectors = [
      'img.pv-top-card-profile-picture__image--show',
      '.pv-top-card__photo img',
      '.profile-photo-edit__preview',
      'section.artdeco-card img.EntityPhoto-circle',
      'img[class*="profile-photo"]',
      'img[class*="presence-entity"]',
    ];

    let imgUrl = null;

    for (const selector of selectors) {
      try {
        const el = await page.$(selector);
        if (el) {
          const src = await el.getAttribute('src');
          if (src && src.includes('licdn.com') && !src.includes('ghost')) {
            imgUrl = src;
            console.log('Found image with selector:', selector);
            break;
          }
        }
      } catch (e) {
        // try next selector
      }
    }

    if (!imgUrl) {
      console.log('Trying fallback: scanning all images...');
      imgUrl = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        const match = imgs.find(img =>
          img.src &&
          img.src.includes('licdn.com') &&
          img.src.includes('profile-displayphoto') &&
          img.naturalWidth > 50
        );
        return match ? match.src : null;
      });
    }

    if (!imgUrl) {
      await page.screenshot({ path: 'debug-screenshot.png', fullPage: false });
      console.error('Could not find profile image. Debug screenshot saved.');
      process.exit(1);
    }

    // Upgrade URL from thumbnail (100x100) to full size (400x400)
    imgUrl = imgUrl.replace(/scale_\d+_\d+/, 'scale_400_400');
    console.log('Downloading image from:', imgUrl);

    await downloadFile(imgUrl, 'public/images/profile.jpg');

    const stats = fs.statSync('public/images/profile.jpg');
    console.log('Downloaded file size:', stats.size, 'bytes');

    if (stats.size < 10000) {
      console.error('Downloaded file is too small — likely not a real image.');
      process.exit(1);
    }

    console.log('Profile picture updated successfully!');

  } catch (err) {
    console.error('Error:', err.message);
    await page.screenshot({ path: 'debug-screenshot.png' }).catch(() => {});
    process.exit(1);
  } finally {
    await browser.close();
  }
})();