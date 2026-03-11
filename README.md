# PayPathIQ Technical Challenge

Minimal UI-only debtor portal built with Next.js, Tailwind CSS, shadcn/ui, and Supabase client wiring.

## What is implemented

- A single-page debtor portal chat UI
- A fixture-backed account summary using `fixtures/debtor-standard.json`
- A simple message composer with deterministic canned responses
- Challenge-aligned outcome hints for pay now, promise to pay, payment arrangement, questions, and human support
- Supabase environment scaffolding for later persistence work

## What is not implemented

- No real backend logic
- No database persistence
- No live LLM routing
- No payment flow

## Stack

- Next.js App Router
- Tailwind CSS
- shadcn/ui components
- `@supabase/supabase-js`

## Run locally

1. Install dependencies:

```bash
pnpm install
```

2. Copy the example environment file:

```bash
cp .env.example .env.local
```

3. Start the app:

```bash
pnpm dev
```

4. Open `http://localhost:3000`

Supabase is optional for the current UI-only build. If env vars are missing, the app still runs and simply shows Supabase as not configured.

## Project structure

- `src/app/page.tsx` wires the standard fixture into the main portal UI
- `src/components/debtor-portal.tsx` contains the page layout, chat state, and canned response behavior
- `src/lib/supabase/client.ts` provides a browser client factory for later integration
- `fixtures/` contains the provided debtor account data

## Notes

This version intentionally stays narrow: it presents the simplest credible web chat portal for the challenge and avoids faking backend behavior beyond canned, explainable UI responses.
