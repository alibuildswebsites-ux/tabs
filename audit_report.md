# Website Audit Report: Tabs Consultants

## 1. Executive Summary
The Tabs Consultants website is built on a modern stack (Next.js 15, React 19, Tailwind v4). While the foundation is solid, there are significant departures from the established `design.md` (Pirsch Analytics style) and opportunities to improve lead generation, performance, and accessibility.

## 2. Design & UI/UX Audit

### Inconsistencies with `design.md`
- **Primary Action Color:** `design.md` specifies **Sunbeam Yellow (#ffda6e)** as the primary action color. Currently, the site uses **Leafy Green (#6ece9d)** for most primary CTAs (Hero, CTABand).
- **Typography Scale:** The display heading in the Hero is `text-[96px]`, exceeding the `design.md` spec of `64px`. While impactful, it should be standardized to the design tokens.
- **Spacing:** `design.md` calls for a `sectionGap` of 48px, but the implementation uses `py-32` (128px), creating excessive vertical space that pushes content too far down.
- **Card Padding:** Spec calls for 48px padding on content cards; implementation uses `p-8` (32px).
- **Component Reuse:** The `Button` and `Card` components are underutilized, with many sections (Hero, Pricing, CTABand) using hardcoded Tailwind classes instead.

### UI/UX Polish
- **Hover States:** Button hover states are inconsistent across sections.
- **Visual Hierarchy:** Some secondary text (e.g., `text-black/30`) has poor contrast and is difficult to read.
- **Animation Smoothness:** GSAP animations are present but could be more cohesive across all sections.

## 3. Performance & Technical Audit
- **Tailwind v4:** The project is using `@theme` blocks in CSS, which is great, but the code still uses many arbitrary values (e.g., `text-[17px]`, `leading-[1.6]`) instead of theme tokens.
- **Asset Optimization:** The "dashboard mock" in the Hero is built with CSS/HTML, which is performant, but could be abstracted into a component for better maintainability.
- **Lazy Loading:** GSAP is correctly imported dynamically, but more aggressive component-level code splitting could be used for lower-priority sections like Testimonials.

## 4. Accessibility & Usability
- **Contrast:** Several instances of light gray text on white/beige backgrounds fail WCAG AA contrast requirements.
- **Interactive Elements:** Missing `aria-label` on several links and buttons, especially those containing only icons or wordmarks.
- **Focus States:** Focus rings are missing or inconsistent on some interactive elements.

## 5. SEO & Copywriting
- **Meta Tags:** Basic metadata is missing or needs optimization for keywords like "Fractional CFO", "Construction Accounting", and "Remote Financial Consulting".
- **Semantic HTML:** The footer could benefit from `<address>` tags, and the services list should use `<ul>` and `<li>` consistently.
- **Copy Polish:** The marketing copy is clear but could be more punchy and conversion-oriented (e.g., focusing more on "ROI" and "Peace of Mind").

## 6. Recommendations

### Immediate Fixes (Design)
1. **Realign Action Colors:** Swap Green and Yellow to match `design.md` (Yellow = Primary, Green = Secondary).
2. **Normalize Spacing:** Reduce `py-32` to the `sectionGap` of 48px (or a consistent multiple like 64px/80px) to improve content density.
3. **Typography Update:** Apply the `design.md` type scale strictly using Tailwind v4 tokens.

### Technical Enhancements
1. **Refactor Components:** Force all buttons and cards to use the `Button.tsx` and `Card.tsx` components.
2. **Abstract Animations:** Create a reusable `AnimateIn` component to handle GSAP/Framer Motion triggers consistently.
3. **Accessibility Pass:** Run an automated audit (Lighthouse/Axe) and fix all contrast and ARIA issues.

### Marketing & Conversion
1. **Lead Magnet:** Add a secondary CTA or a "lead magnet" (e.g., a free financial health checklist) to capture emails from visitors not ready to book a call.
2. **Copy Overhaul:** Refine headlines to be more benefit-driven.
