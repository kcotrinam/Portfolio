# Portfolio Architecture

## 1. Purpose

This project is Kevin Cotrina's personal portfolio, positioning him as a Senior Full Stack Engineer with a frontend lean and more than five years of professional experience. Its primary goal is to support worldwide, particularly remote, Full Stack Engineering opportunities by presenting credible engineering work, technical range, and clear professional context.

## 2. Technology Direction

### Current/core technologies

- Next.js with the App Router
- React
- TypeScript
- Tailwind CSS
- pnpm

### Future dependencies, introduced only when justified

- `next-intl` for localized routing and translations
- `next-themes` for theme preference
- Motion for selected animations
- Lucide React for icons
- Playwright for end-to-end journeys
- MDX for case studies and possible writing

No dependency is installed merely because it is popular. Each addition must solve a concrete problem, be preferable to built-in platform or framework capabilities, and justify its maintenance and bundle cost.

## 3. Architectural Principles

### Server Components by default

App Router components are Server Components by default. Pages, layouts, static sections, and content presentation should remain server-rendered unless they need a browser capability. This keeps client JavaScript and hydration work small.

### Small Client Component boundaries

`"use client"` is added only where React state, effects, event handlers, browser APIs, or browser-dependent libraries are required. The client boundary should be the smallest interactive leaf possible; parent layouts and static content should stay server-rendered when possible.

### Single responsibility without needless fragmentation

Components and modules should own a focused responsibility. This does not mean extracting every heading, paragraph, or button row into its own file. A future `Hero` may own its static composition; reusable concepts and independent interaction can be extracted when they have a clear responsibility.

### Pragmatic DRY

Avoid duplicating shared knowledge and behavior, but do not extract a component solely because two JSX fragments look similar. Extract when the same domain concept, behavior, or maintenance responsibility is shared and the result improves readability.

### Composition over excessive configuration

Prefer clear domain components and composition to broad components with many boolean styling props. Component APIs should express a coherent responsibility rather than encode every possible visual variation.

### No premature global state

The initial site has no identified application-wide state requirement. Use local state for isolated interaction. Theme and locale will use their appropriate framework or library mechanisms when those features are introduced, rather than a general state library.

### Content and presentation

Content that changes independently from layout should be separated when that improves maintenance. Projects, experience, expertise, and social links will likely become typed data; presentation components will consume that data. This separation will be introduced with the feature that needs it.

### Mobile-first implementation, desktop-quality result

Styles and behavior will begin at the smallest viewport and progressively enhance at wider breakpoints: approximately 375–430px, 768px, 1024px, 1280–1440px, and larger desktops. Mobile-first is an implementation strategy, not an instruction to make a desktop portfolio look like a mobile app. Desktop composition remains a first-class requirement.

### Accessibility from the beginning

Semantic HTML, logical heading order, keyboard access, visible focus, adequate contrast, accessible controls, usable touch targets, and reduced-motion support will influence implementation from the first component. A later audit can deepen this work, but accessibility is not deferred until then.

### Avoid premature abstraction

Do not create infrastructure for hypothetical needs: no generic repositories, factories, service layers, design-system package, or large utility collection for a static portfolio. Architecture grows with demonstrated requirements.

## 4. Intended Project Structure

The following is a responsibility map, not a directory-creation task. Directories are created only when they receive useful content.

```text
src/
├── app/          # routes, pages, layouts, boundaries, route metadata
├── components/
│   ├── layout/   # site structure: future Header, Footer, Container
│   ├── sections/ # page-level composition: future Hero, SelectedWork, Contact
│   └── ui/       # genuinely reusable primitives used in multiple places
├── data/         # typed portfolio content, not business logic
├── i18n/         # localization-specific configuration
├── lib/          # shared non-UI logic or integrations
└── styles/       # global concerns only when globals.css is insufficient

content/
└── work/         # potential future MDX case studies or long-form content
```

`app/` owns Next.js routing and route-level concerns such as `page.tsx`, `layout.tsx`, loading, error, and not-found boundaries. `components/layout/` owns site-level composition; `components/sections/` owns substantial page sections; and `components/ui/` is reserved for proven, reusable primitives, never a miscellaneous component bucket.

`data/` contains structured portfolio information rather than business logic. `i18n/` remains scoped to localization. `lib/` is for actual shared logic or integrations, not a catch-all for small helpers. `styles/` should remain narrow: Tailwind utilities and `globals.css` are preferred until a genuine global concern appears. `content/` is deferred until long-form content is implemented.

## 5. Rendering Strategy

The rendering model is server first, static where appropriate, and client only for interaction. Most portfolio content should be eligible for static rendering because it is public and changes infrequently. Dynamic rendering, caching rules, and revalidation settings will be selected only when an actual data source or freshness requirement makes them relevant.

## 6. Content Strategy

Short, structured content will likely live in typed TypeScript data when that feature is built. This suits projects, experience, expertise, and social links. Longer case studies and possible writing may later use MDX under `content/`. The initial portfolio has no CMS.

## 7. Internationalization Direction

English will be the default language and Spanish the secondary language. The eventual route shape is expected to include locale segments such as `/en` and `/es`, with localized project URLs beneath them. `next-intl` is the intended solution, but its setup, translation format, and routing details belong to a future phase.

## 8. Styling Direction

Tailwind CSS will be the primary styling tool. The implementation should establish semantic design tokens when a real visual system is introduced, so component code does not repeat arbitrary hexadecimal values. There is no component library in Phase 0; reusable UI primitives will emerge from actual repeated needs.

## 9. Testing Direction

Testing tools are added when there is code worth testing. Playwright is expected for meaningful end-to-end user journeys. Unit tests should focus on meaningful logic and behavior, not arbitrary coverage targets. Test configuration and exact coverage expectations are deferred.

## 10. Deferred Decisions

Phase 0 intentionally does not decide or implement:

- exact `next-intl` configuration and translation workflow
- MDX integration and case-study content model
- motion library usage and animation rules
- the precise structure of project case studies
- testing configuration and test suite scope
- deployment platform and CI/CD configuration
- metadata schema, SEO implementation, and Open Graph image generation
- theme behavior and `next-themes` configuration
- caching, revalidation, and dynamic-rendering configuration
- visual design, UI components, routes, and portfolio content

These choices will be made when the corresponding feature provides concrete requirements.
