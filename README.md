# Resume Builder

A resume-building app with live template previews and an AI writing assistant, built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Prisma, and the Vercel AI SDK (Google Gemini).

## Features

- **Template gallery** — pick from Classic, Modern, and Creative templates, each shown as a live-rendered preview (not a static screenshot)
- **Resume editor** — form-based editing of personal details, summary, skills, experience, and education, with a live preview panel side by side
- **AI writing assistant** — "Write with AI" / "Improve with AI" buttons on the summary and each experience description, streaming suggestions in real time via Gemini
- **Resume templates** render as plain React components, so what you see while editing is what you get

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4 |
| Language | TypeScript |
| Forms & validation | React Hook Form + Zod |
| Database ORM | Prisma (PostgreSQL) |
| AI | Vercel AI SDK (`ai`) + `@ai-sdk/google` (Gemini) |
| Testing | Jest + React Testing Library |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and add your own Gemini API key (free tier available at [aistudio.google.com](https://aistudio.google.com) → "Get API key"):

```bash
cp .env.example .env.local
```

```
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

> Only `gemini-*` models are used — no backend/Python needed, the AI calls run through Next.js API routes.

### 3. Generate the Prisma client

```bash
npx prisma generate
```

A `DATABASE_URL` (PostgreSQL) is only required once you start using features that hit the database — the current schema has no models defined yet, so this step just satisfies the `@prisma/client` import.

### 4. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 5. Run tests

```bash
npm test
```

## Project Structure

```
app/
  (public)/            Marketing pages — homepage, template gallery
  (auth)/               Logged-in app shell
    login/, register/   Auth forms (UI only — not wired to a backend yet)
    dashboard/           Placeholder
    upload/               Placeholder — intended for AI resume parsing (see Known Limitations)
    resumes/
      new/                 Resume editor + live preview (the main flow)
      [resumeId]/           Placeholder edit/preview routes
  api/
    ai/description/       Streaming AI endpoint used by the writing assistant
    users/                  Example in-memory CRUD route (demo only, not real persistence)
  data/                  Mock resume data + template metadata

components/
  resume/
    ResumeEditor.tsx      Main edit form
    ResumeViewer.tsx       Renders the selected template with live data
    AIAssistButton.tsx    Reusable streaming "write/improve with AI" button
    edit/                  Sub-forms: Skills, Experiences, Educations
    templates/             Classic / Modern / Creative resume layouts

lib/        Prisma client, auth helpers (scaffolded), resume parser (scaffolded)
types/      Resume, Experience, Education types
utils/      Template registry, string helpers, validation (scaffolded)
prisma/     Schema (no models defined yet)
```

## Known Limitations / In Progress

This is an active learning project — some pieces are intentionally scaffolded but not yet functional:

- **Auth** — `login`/`register` pages have working form validation (Zod) but don't call a real backend yet; `lib/auth.ts` is empty
- **Resume upload/parsing** — `app/(auth)/upload` route and `lib/resume-parser.ts` exist as placeholders for an AI-powered resume-to-JSON parser (not implemented yet)
- **Persistence** — `prisma/schema.prisma` has no models yet; resume data currently lives only in client-side React state (`useState`), nothing is saved
- **`resumes/[resumeId]/edit` and `/preview`** — placeholder pages, not implemented

## AI Feature Notes

The AI assistant streams text from `/api/ai/description` using `streamText` from the Vercel AI SDK, piped directly into the relevant textarea as it arrives. If a field already has text, the AI rewrites it for impact; if it's empty, it generates fresh content from context (job title, company, role, or skills). Requests time out after 20 seconds with a visible error if the network or API is unreachable.
