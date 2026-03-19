# rccc-web

React frontend for the Remote Career Command Center MVP.

## Purpose

`rccc-web` owns the user-facing workflow for:

- job feed and filters
- job detail review
- saved jobs
- application tracking
- profile and preferences
- fit score display

## Tech Choice

- React with Vite and TypeScript for a fast MVP front end
- client-side routing and API consumption only; no business logic duplication

## Initial Structure

- `src/app`: app shell and composition
- `src/pages`: route-level pages
- `src/features/jobs`: feed and details
- `src/features/applications`: tracker flow
- `src/features/profile`: preferences UI
- `src/components`: shared UI
- `src/lib/api`: typed API integration boundary

## Local Development

1. Copy `.env.example` to `.env`.
2. Install dependencies with `npm install`.
3. Run `npm run dev`.

The current scaffold renders a static MVP shell and placeholder navigation.

## Assumptions

- API-first integration; no local persistence beyond browser state for MVP scaffolding.
- Design system stays lightweight until real screens exist.
- Auth is deferred for MVP scaffolding.

## MVP Backlog

- implement job feed and filters
- implement job details screen
- implement save and apply actions
- implement application tracker
- implement profile/preferences form
- integrate fit score display
- add route-level and component tests
