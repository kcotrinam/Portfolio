# ADR 002: Server-First Rendering Strategy

## Status

Accepted

## Context

This is a content-heavy portfolio with limited interactive state. Most pages will present stable professional information, project summaries, and case studies. The App Router provides Server Components by default alongside Client Components for browser-dependent behavior.

## Decision

Use Server Components by default. Introduce Client Components only when a component needs client-side state, effects, event handlers, browser APIs, or a browser-dependent library. Favor static rendering for portfolio content where appropriate, and keep client boundaries narrow.

## Rationale

Server Components can render static content without sending their component code to the browser. This reduces client JavaScript and hydration work, supports simpler presentation components, and offers good performance characteristics for a public portfolio. The strategy aligns with the App Router while preserving Client Components for genuine interaction.

## Alternatives Considered

1. **Make most or all components Client Components.** This makes browser-side composition familiar, but sends more JavaScript and asks the browser to hydrate more of the interface without benefiting mostly static content.

2. **Decide Server versus Client case by case without a default.** This permits flexibility, but provides no architectural constraint against unnecessary client boundaries. A server-first default gives developers a clear starting point while still allowing exceptions when requirements demand them.

## Consequences

Positive consequences:

- smaller potential client bundle
- clearer boundaries around interactivity
- better performance potential for content pages
- simple components that can focus on presentation and data

Tradeoffs:

- developers must understand server and client boundaries
- composition sometimes requires deliberate placement of a Client Component inside a Server Component tree
- browser-dependent libraries may need isolated client wrappers
- data passed from server-rendered code to a Client Component must use serializable props
