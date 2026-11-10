# ADR-001: Data-Driven Link Rendering

**Status:** Accepted
**Date:** 2026-03-20
**Decision Makers:** Development Team

## Context

The original `App.tsx` contained ~70 lines of repetitive JSX for documentation and social
links. Each link required 8-12 lines of markup (anchor, SVG, use element). Adding or
removing a link meant copy-pasting an entire block and updating 3-4 values.

## Decision

Extract link data into typed constant arrays (`DOC_LINKS`, `SOCIAL_LINKS`) and render
them with `.map()`. Each link is a single object with `href`, `label`, and icon reference.

**Security invariant:** All external links rendered through these arrays automatically
include `target="_blank" rel="noopener noreferrer"` — enforced in one place, not scattered
across 8 separate anchor tags.

## Consequences

- **Positive:** Adding a link is one line in a data array instead of 10+ lines of JSX.
- **Positive:** Security attributes are enforced centrally — impossible to forget `rel`.
- **Positive:** Links are easily testable — the App test iterates all external links and
  asserts `rel="noopener noreferrer"` on each.
- **Negative:** Slightly more abstract than plain JSX for newcomers. Mitigated by
  clear type annotations and `as const` for type safety.
