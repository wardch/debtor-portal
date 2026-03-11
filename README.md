# Debtor Portal Challenge

Continue building this repo into a small but production-minded debtor portal chat experience that helps a debtor resolve their account.

## The task

Use the existing implementation in this repository as your starting point. You should extend it into a simple but credible debtor self-service flow.

A debtor opens the portal and sends a message such as:

- "I can pay this now"
- "I can pay next Friday"
- "I need a payment plan"
- "Why is this amount different from last month?"
- "This balance is wrong"
- "Can someone help me?"

Your system should interpret the message and route the debtor into one of these outcomes:

- Pay now
- Promise to pay
- Payment arrangement
- Question
- Dispute or human support

## Minimum expected behaviour

### Pay now

- Detect immediate payment intent
- Route to a mocked or sandbox payment flow

### Promise to pay

- Detect a single future payment commitment
- Capture at least a payment date
- Show a confirmation summary

### Payment arrangement

- Detect intent to pay over time
- Capture a simple proposed arrangement
- Show a confirmation summary

### Question

- Answer a relevant account question using the provided account context
- Then steer the debtor back toward resolution where appropriate

### Dispute or human support

- Route disputes, sensitive issues, or unclear or high-risk cases to human review
- Do not attempt full automated resolution for these cases

## LLM guidance

In production, we would likely use an LLM for intent extraction and information capture from free text.

You may use an LLM to:

- classify intent
- extract relevant details
- suggest a next best action

If you do, keep routing controlled and explainable, and include sensible fallback behaviour for low-confidence cases.

## Technical expectations

- Build on top of this repository rather than starting from scratch
- Use a database for persistence
- Supabase is recommended, but not required if you can justify an alternative
- Keep the routing and state transitions understandable and testable

## What is already provided

- A Next.js app with a debtor portal UI
- A fixture-backed account summary using `fixtures/debtor-standard.json`
- Deterministic placeholder chat behaviour in `src/components/debtor-portal.tsx`
- A Conversations view where you can see the AI messaging experience in the UI; you will need to implement the backend that powers real conversation handling
- Supabase environment scaffolding for later persistence work

## Deliverables

Submit:

- source code in this repository
- setup instructions
- an updated `README.md` that includes a short design note of no more than 800 words covering architecture, tradeoffs, assumptions, and next steps
- an architecture diagram saved in the repo root as `architecture-diagram.png`, `architecture-diagram.pdf`, or `architecture-diagram.md`
- tests for the core decision logic

Your `README.md` should link to the architecture diagram if you include one.

## Use of AI coding tools

You may use tools such as Claude Code, Codex, Cursor, or similar. We encourage effective use of these tools.

However, you are responsible for the submission and should be able to explain:

- how the system works
- the key design decisions
- where AI tools helped
- what you reviewed or changed yourself

## What we're evaluating

- product and engineering judgment
- clarity of triage behaviour
- quality of backend logic and data modelling
- handling of ambiguous input
- code quality and structure
- test quality
- clarity of explanation

## Provided input data

We will provide sample JSON files containing debtor account context for the chat experience.

Current fixtures live in `fixtures/`.

## Submission notes

- Use the GitHub `Use this template` button to create your own repository from this starter before you begin
- Set the new repository visibility to `Private`
- Do not push your submission to the shared source repository
- Treat your private copy of this repository as the submission artifact
- When you are finished, invite `wardch` as a collaborator so the submission can be reviewed
- Keep your write-up in `README.md` so reviewers can find it immediately
- Put the architecture diagram in the repo root and reference it from `README.md`
- If you make reasonable scope cuts, document them clearly

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

If Supabase env vars are missing, the app still runs with the current local fixture setup.

Use the `Conversations` section in the portal UI to see the AI messaging flow on the frontend. The backend/API for real message processing is not implemented yet.

## Project structure

- `src/app/page.tsx` wires the standard fixture into the main portal UI
- `src/components/debtor-portal.tsx` contains the current page layout, chat state, and placeholder routing behaviour
- `src/lib/supabase/client.ts` provides a browser client factory for later integration
- `fixtures/` contains the provided debtor account data
