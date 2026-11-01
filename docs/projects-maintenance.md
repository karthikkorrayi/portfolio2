# Projects section

The portfolio uses React 18, TypeScript, Vite 5, Tailwind 3, and lucide-react. `Projects.tsx` retains the existing `projects` section ID, uses the shared portfolio theme classes, and owns only the discipline filter. `ProjectCard.tsx` renders a reusable semantic article, technology badges, native keyboard-accessible implementation details, and GitHub links. Other sections, navigation, theme logic, manifests, and lockfiles are unchanged.

## Content and evidence

`src/data/projects.ts` is the single source of project content. Repository names generate direct GitHub URLs; commit hashes and evidence paths document the reviewed source. Descriptions are reviewed editorial summaries, not copied starter README text. Review the source again before changing descriptions, technology badges, or statuses. Repository recency alone does not prove completion or ongoing development.

Reviewed on 2026-11-02 from public Git clones. The supplied ZIP matches portfolio commit `0c48f8b073bd75a0337df2371b00711467b1a200`. The profile README at https://github.com/karthikkorrayi/karthikkorrayi identifies Karthik as a computer science graduate (2023); the implementation repositories provide the technical evidence.

| Project | Source reviewed | Findings and boundaries |
| --- | --- | --- |
| OTN Video Recorder | `pubspec.yaml`, `lib/screens/camera_screen.dart`, `lib/services/video_processor.dart`, `lib/services/upload_work_manager.dart`, `lib/services/upload_queue_db.dart` | Flutter/Dart, Firebase, FFmpeg, SQLite upload queue, Android background scheduling and resumable OneDrive transfer logic. Android-focused R&D framing comes from the requested category. No claim of production reliability or completion. |
| OptimumPool frontend | `package.json`, `src/app/app.routes.ts`, `src/app/core/services/{auth,offer,booking}.service.ts`, `src/app/core/interceptors/jwt.interceptor.ts` | Angular/TypeScript, owner/passenger pages, HTTP API services, JWT interception. Presented with the backend as one capstone, as requested. |
| OptimumPool backend | root and module `pom.xml` files, controllers, `OfferRide/.../Configuration/ServiceBusConfig.java` | Java 17, Spring Boot, Authentication/OfferRide/BookRide modules, MySQL authentication, MongoDB rides, Azure Service Bus configuration. Source comments still mention RabbitMQ in places; the current dependencies/configuration support Service Bus. No deployed-service claim. |
| Knowledge Duck | `package.json`, `automation/runScrapers.ts`, `automation/saveJobs.ts`, `automation/scrapers/{freejobalert,telugucareers,detail}.ts`, `automation/aiExtractor.ts`, jobs API routes | Next.js/React/TypeScript portal; fetch/Axios and Cheerio retrieval, classification, date normalization, deduplication and Supabase upserts. AI extraction returns null and is not an implemented capability. |
| Claru Video Uploader | README, workspace manifests, `server/src/uploads/tus.ts`, `server/src/processing.ts`, `server/src/delivery.ts`, `server/src/review.ts` | React/Vite, TypeScript/Express, resumable uploads, PostgreSQL, FFmpeg/ffprobe, supplier delivery/review workflow. README mentions OneDrive backup objectives but the card does not claim that backup is complete. Documented testing uses mock Claru. |
| HMS Returnly | README, package manifest, `src/lib/requests/assistant.ts`, staff/public pages, Supabase migrations | Next.js/React/TypeScript with Supabase/Postgres/Auth/Storage, scoped data access and controlled lost-property workflows. In-development status follows the user's current-project designation; the README explicitly lists unfinished AI, email, PMS and offline capabilities. |

Full immutable commit references and source paths are recorded per repository in the catalog. The cards link to both the current repository and the reviewed source snapshot. Repository access was verified by successfully cloning every requested repository. Their applications were inspected, not built or integration-tested as part of this portfolio change.

## Updating

1. Inspect the relevant README, implementation, dependency manifests, and current development notes.
2. Update the matching catalog entry. Keep summaries concise and use implementation details for architecture and limitations. Keep the two OptimumPool repositories in one entry.
3. Record the reviewed commit SHA and relevant evidence paths. List only technologies supported by source. Omit status if it is unknown.
4. Run `npm run build`, `npm run typecheck`, and `npm run lint` sequentially. Check all filters, repository links, details keyboard interaction, mobile layouts, and both themes.

No runtime GitHub API integration is required. The static Vite frontend has no trusted server for credentials; unauthenticated requests introduce rate limits and cannot turn boilerplate READMEs into reviewed descriptions. A future build-time metadata refresh can update basic repository metadata, but descriptions and development-status claims should remain reviewed. Never embed a personal access token in the frontend.

## Local installer

Run the delivered self-contained Bash script with the portfolio directory as its argument. It supports the supplied ZIP after extraction, checks the expected toolchain and original Projects file, backs up changed files, applies four files, installs locked dependencies only if needed, and runs build/typecheck/lint sequentially. If application or validation fails, it restores the previous target files. It does not rewrite manifests or lockfiles. Custom target-file edits cause a refusal unless `--force` is explicitly supplied; those edits are backed up as well. Re-running an already-applied version is supported.
