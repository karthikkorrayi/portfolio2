export type ProjectArea = 'Full stack' | 'Android' | 'Research' | 'Applications';
export type Technology = { name: string; kind: 'language' | 'framework' | 'platform' };
export type Repository = { name: string; label: string; commit: string; evidence: string[] };
export type Project = {
  id: string;
  name: string;
  category: string;
  area: ProjectArea;
  summary: string;
  details: { label: string; text: string }[];
  technologies: Technology[];
  repositories: Repository[];
  status?: { label: string; note: string };
};

export const githubProfile = 'https://github.com/karthikkorrayi';
export const repositoryUrl = (name: string) => `${githubProfile}/${name}`;

// Reviewed source snapshots, not inferred completion claims or live GitHub statistics.
// To refresh: inspect each repository, update copy/technologies and the evidence commit together.
export const projects: Project[] = [
  {
    id: 'hms-returnly', name: 'HMS Returnly', category: 'Current project · Application development', area: 'Applications',
    summary: 'A hotel lost-and-found application connecting item logging, guest enquiries, staff investigations, and controlled returns.',
    status: { label: 'In development', note: 'Current active project. AI assistance, customer email notifications, PMS sync, and offline logging are not built yet.' },
    details: [
      { label: 'Application', text: 'Next.js App Router pages support staff item workflows and public enquiry tracking. The enquiry chat is a rule-based guided form.' },
      { label: 'Data & access', text: 'Supabase provides Postgres, Auth, and private photo storage. Hotel-scoped row-level security, role-checked database functions, and audit records govern workflow changes.' },
    ],
    technologies: [{ name: 'TypeScript', kind: 'language' }, { name: 'SQL', kind: 'language' }, { name: 'Next.js', kind: 'framework' }, { name: 'React', kind: 'framework' }, { name: 'Supabase', kind: 'platform' }, { name: 'PostgreSQL', kind: 'platform' }],
    repositories: [{ name: 'HMS-Returnly', label: 'Repository', commit: '955aae295ddcbaddf63372a16f7f3a6cf4709f6d', evidence: ['README.md', 'src/lib/requests/assistant.ts', 'supabase/migrations/20260929000002_row_level_security.sql'] }],
  },
  {
    id: 'optimumpool', name: 'OptimumPool', category: 'Full-stack capstone · Frontend & backend', area: 'Full stack',
    summary: 'A carpooling application pairing driver ride offers with passenger search, booking requests, and booking history across a separate frontend and backend.',
    details: [
      { label: 'Frontend', text: 'Angular feature pages separate owner and passenger journeys. Injectable HTTP services call the authentication, ride-offer, and booking APIs; a JWT interceptor and route guard handle authenticated navigation.' },
      { label: 'Backend', text: 'Java 17 and Spring Boot split Authentication, OfferRide, and BookRide into Maven modules. Authentication uses MySQL; ride services use MongoDB, with Azure Service Bus integration for inter-service messaging.' },
    ],
    technologies: [{ name: 'TypeScript', kind: 'language' }, { name: 'Java', kind: 'language' }, { name: 'Angular', kind: 'framework' }, { name: 'Spring Boot', kind: 'framework' }, { name: 'MySQL', kind: 'platform' }, { name: 'MongoDB', kind: 'platform' }, { name: 'Azure Service Bus', kind: 'platform' }],
    repositories: [
      { name: 'optimumpool-ui', label: 'Frontend', commit: 'f09c8103e24a3139b98111176aefb2d8f4280499', evidence: ['package.json', 'src/app/core/services/booking.service.ts', 'src/app/core/interceptors/jwt.interceptor.ts'] },
      { name: 'optimumpool', label: 'Backend', commit: 'fd61692d083b9d6447e482ddbe800df9b8e37a15', evidence: ['pom.xml', 'Authentication/pom.xml', 'OfferRide/pom.xml', 'BookRide/src/main/java/com/OptimumPool/BookRide/Controller/Controller.java'] },
    ],
  },
  {
    id: 'video-recorder', name: 'OTN Video Recorder', category: 'Android application · Research & development', area: 'Android',
    summary: 'An Android-focused Flutter recording application exploring video capture, local processing, and persistent background upload workflows.',
    details: [
      { label: 'Capture & processing', text: 'Dart camera and review screens work with FFmpeg-based video processing and chunk generation, alongside Firebase authentication and Firestore services.' },
      { label: 'Upload research', text: 'A SQLite queue persists upload state. Android WorkManager schedules background transfers and resumes OneDrive upload sessions using saved progress.' },
    ],
    technologies: [{ name: 'Dart', kind: 'language' }, { name: 'Flutter', kind: 'framework' }, { name: 'Firebase', kind: 'platform' }, { name: 'SQLite', kind: 'platform' }, { name: 'FFmpeg', kind: 'platform' }, { name: 'WorkManager', kind: 'platform' }],
    repositories: [{ name: 'video_recorder_app', label: 'Repository', commit: '3dd589e670335112835ceceacd73c3778a487b86', evidence: ['pubspec.yaml', 'lib/services/video_processor.dart', 'lib/services/upload_work_manager.dart', 'lib/services/upload_queue_db.dart'] }],
  },
  {
    id: 'knowledge-duck', name: 'Knowledge Duck', category: 'Research & development · Data retrieval', area: 'Research',
    summary: 'A government-job and exam information portal exploring how scraped listings can become structured, searchable records.',
    details: [
      { label: 'Retrieval pipeline', text: 'TypeScript scrapers retrieve FreeJobAlert and TeluguCareers listings using Axios and Cheerio. Normalization classifies records, standardizes dates, and creates deduplication keys before Supabase upserts.' },
      { label: 'Information access', text: 'Next.js API routes and React pages expose jobs, categories, and exam data. The AI extractor is a placeholder; this project is not presented as an AI-powered retrieval system.' },
    ],
    technologies: [{ name: 'TypeScript', kind: 'language' }, { name: 'Next.js', kind: 'framework' }, { name: 'React', kind: 'framework' }, { name: 'Cheerio', kind: 'framework' }, { name: 'Axios', kind: 'framework' }, { name: 'Supabase', kind: 'platform' }],
    repositories: [{ name: 'knowledge-duck', label: 'Repository', commit: '1cb89034e1f06c33c777fe863fd6551e7b96b977', evidence: ['package.json', 'automation/runScrapers.ts', 'automation/saveJobs.ts', 'automation/aiExtractor.ts'] }],
  },
  {
    id: 'claru', name: 'Claru Video Uploader', category: 'Application development · Video uploading', area: 'Applications',
    summary: 'A video submission application for receiving MP4 recordings, preparing clips, and tracking delivery and review through the Claru supplier API.',
    details: [
      { label: 'Upload & preparation', text: 'A React/Vite client uses resumable tus uploads. Express receives recordings, checks media with ffprobe, splits clips with FFmpeg, and records declarations in PostgreSQL.' },
      { label: 'Delivery workflow', text: 'Shared TypeScript contracts connect the web and server workspaces. Background delivery and review tracking have local Claru mocks; the documented test server uses mock Claru rather than demonstrating a live supplier deployment.' },
    ],
    technologies: [{ name: 'TypeScript', kind: 'language' }, { name: 'React', kind: 'framework' }, { name: 'Vite', kind: 'framework' }, { name: 'Express', kind: 'framework' }, { name: 'Node.js', kind: 'platform' }, { name: 'PostgreSQL', kind: 'platform' }, { name: 'tus', kind: 'platform' }, { name: 'FFmpeg', kind: 'platform' }],
    repositories: [{ name: 'claru-video-uploader', label: 'Repository', commit: 'fcd97c4e02204fdd51cfde44055aab191bd97cfd', evidence: ['README.md', 'server/src/uploads/tus.ts', 'server/src/processing.ts', 'server/src/delivery.ts'] }],
  },
];
