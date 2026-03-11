# PayPathIQ Technical Challenge

Build a small but production-minded debtor portal `web chat` that helps a debtor resolve their account.

## Tech Constraints

- Frontend must use `Next.js` and `React`
- Backend can use `Next.js`, `Node.js`, or `Python`
- Use a database for persistence
- `Supabase` is recommended

## The Task

A debtor opens the portal and sends a message such as:

- "I can pay this now"
- "I can pay next Friday"
- "I need a payment plan"
- "Why is this amount different from last month?"
- "This balance is wrong"
- "Can someone help me?"

Your system should interpret the message and route the debtor into one of these outcomes:

- `Pay now`
- `Promise to pay`
- `Payment arrangement`
- `Question`
- `Dispute or human support`

## Minimum Expected Behaviour

- `Pay now`
  - detect immediate payment intent
  - route to a mocked or sandbox payment flow

- `Promise to pay`
  - detect a single future payment commitment
  - capture at least a payment date
  - show a confirmation summary

- `Payment arrangement`
  - detect intent to pay over time
  - capture a simple proposed arrangement
  - show a confirmation summary

- `Question`
  - answer a relevant account question using the provided account context
  - then steer the debtor back toward resolution where appropriate

- `Dispute or human support`
  - route disputes, sensitive issues, or unclear/high-risk cases to human review
  - do not attempt full automated resolution for these

## LLM Guidance

In production, we would likely use an LLM for intent extraction and information capture from free text.

You may use an LLM to:

- classify intent
- extract relevant details
- suggest a next best action

If you do, keep routing controlled and explainable, and include sensible fallback behaviour for low-confidence cases.

## Deliverables

Submit:

- source code
- setup instructions
- a short README covering architecture, tradeoffs, assumptions, and next steps
- tests for core decision logic

## Use Of AI Coding Tools

You may use tools such as `Claude Code`, `Codex`, `Cursor`, or similar. We encourage effective use of these tools.

However, you are responsible for the submission and should be able to explain:

- how the system works
- the key design decisions
- where AI tools helped
- what you reviewed or changed yourself

## What We Are Evaluating

- product and engineering judgment
- clarity of triage behaviour
- quality of backend logic and data modelling
- handling of ambiguous input
- code quality and structure
- test quality
- clarity of explanation

## Provided Input Data

Sample debtor account context is provided in `fixtures/`.

- `fixtures/debtor-standard.json`
- `fixtures/debtor-dispute.json`
- `fixtures/debtor-hardship.json`

Use these fixtures to drive your chat experience. You may extend the schema if needed, but explain any changes.
