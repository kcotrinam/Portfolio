# ADR 001: Responsibility-Based Project Structure

## Status

Accepted

## Context

The portfolio needs a structure that makes route ownership, site composition, reusable UI, content, localization, and shared logic understandable as it grows. At Phase 0 it is a static portfolio with no backend, CMS, or complex domain layer.

## Decision

Use a feature-light, responsibility-based structure centered on `app`, `components`, `data`, `i18n`, and `lib`. Add `content` later if MDX case studies or writing require it. Create directories only when they contain a real file.

Within `components`, use `layout` for site-level structure, `sections` for page-level composition, and `ui` for primitives reused across multiple contexts. `data` holds portfolio content, not business logic. `lib` holds shared logic or integrations, not miscellaneous helpers.

## Rationale

This gives the project clear homes for expected concerns without imposing process or files that the current scope does not need. It follows Next.js route conventions while allowing shared code to remain easy to find. It also lets structure grow from real content and reuse.

## Alternatives Considered

- **Deeply layered enterprise architecture:** useful for complex business domains and multiple data boundaries, but disproportionate for a content-focused portfolio.
- **Atomic-design directories everywhere:** can help a mature design system, but would encourage categorizing components before their reuse and responsibilities are known.
- **Feature-sliced architecture:** valuable for large applications with independent product features; the portfolio currently has too little feature complexity to justify it.
- **Separate packages for every concern:** adds tooling and coordination overhead without a concrete need for independent publishing or ownership.
- **Generic services and repositories for static content:** creates an abstraction without an external data source or business domain to protect.

## Consequences

Positive consequences include a low cognitive load, clear ownership, and incremental growth. The structure leaves room for typed data, localized routes, and MDX later.

The tradeoff is that maintainers must keep boundaries intentional as the project grows. In particular, `components/ui` cannot become a dumping ground, `lib` cannot become a random-helper directory, and new abstractions should be introduced only after repetition demonstrates their value.
