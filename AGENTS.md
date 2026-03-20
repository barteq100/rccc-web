# AGENTS.md — rccc-web

This repository owns the user-facing web application for the Remote Career Command Center MVP.

## Purpose

Use `rccc-web` for:

- job feed and filtering workflow
- job detail review flow
- saved jobs UX
- application tracker UI
- profile and preference screens
- fit score display and explanation
- routing, API consumption, and client-side workflow state

Do not put ingestion logic, canonical persistence rules, or scoring algorithms in this repository.

## Technologies

- React 19
- TypeScript 5.8
- Vite 7
- React DOM 19
- Docker for local execution

## Key Directories

- `src/app`: app shell and composition
- `src/pages`: route-level screens
- `src/features/jobs`: feed and details workflows
- `src/features/applications`: tracker workflow
- `src/features/profile`: preference workflow
- `src/components`: shared UI pieces
- `src/lib/api`: typed API boundary

## Tools And Commands

Use the repo's existing commands first:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`
- `docker compose up --build`

Primary environment variables:

- `VITE_API_BASE_URL`

## Conventions

- Treat `rccc-api` as the source of truth for business rules, persistence, application state, and scoring.
- Keep client code focused on presentation, routing, query state, and user workflow.
- Align route structure and feature folders with real workflows: feed, details, tracker, profile.
- Keep filters and pagination wired to the API contract when they affect canonical result sets.
- Display fit score reasons from the API; do not recompute scores client-side.
- Prefer lightweight state management and explicit API clients over unnecessary abstractions.
- Preserve a dashboard-oriented product feel, not a marketing-site layout.

## Patterns

- Organize code by feature and route, not by generic UI type alone.
- Keep API calls in `src/lib/api` or thin feature-specific client helpers.
- Favor controlled forms and explicit mutation flows for save, apply, and profile updates.
- Add practical loading, empty, and error states for each major screen.
- Prefer interaction-focused tests over shallow snapshots.

## Coordination Rules

- Before starting work, claim or update the relevant task in the root [tasks.md](../tasks.md).
- If an API payload or route requirement changes, coordinate with `rccc-api` before implementing around it.
- Do not introduce backend rules, local persistence layers, or ingestion concerns into the web app.
- Keep MVP scope tight: no auth expansion, no resume tooling, and no AI-generated user content.
