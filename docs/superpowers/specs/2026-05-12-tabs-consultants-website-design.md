# Tabs Consultants — Website Design Spec
**Date:** 2026-05-12
**Approach:** Pirsch-Faithful Expansion (Approach A)
**Status:** Approved — Ready for Implementation

---

## 1. Project Overview

**Company:** Tabs Consultants (founded 2017, remote-first)
**Product:** Marketing website for a financial consulting firm

**Services offered:**
- Accounting & Bookkeeping
- Tax Planning & Tax Filing
- Fractional CFO Services
- Financial Reporting & Forecasting
- Mergers & Acquisitions Support
- Payroll Management
- System Integration & Process Improvement
- Business Advisory & Compliance

**Target audiences:** Construction companies, real estate businesses, startups, and growing enterprises — all segments addressed equally; service pages allow self-selection.

**Primary conversion goals:**
1. Contact form (lead capture with service-interest intake)
2. Book a free consultation (Calendly or similar embed)

**Design inspiration:** [Pirsch.io](https://pirsch.io) — warm neutrals, rounded forms, approachable authority.

**Differentiator:** Tabs uses the Pirsch warm-neutral palette (Sunbeam Yellow + Leafy Green on white/off-white canvas) — deliberately distinct from the navy-and-grey financial firm standard.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Animations | GSAP 3 + ScrollTrigger + ScrollSmoother |
| Icons | Lucide React |
| Fonts | `next/font/google` — DM Sans (400, 500) |
| Images | `next/image` |
| Forms | `react-hook-form` + Zod |
| SEO | `next-sitemap`, `generateMetadata()` per page |
| Deployment | Vercel (recommended) |

---

## 3. Design System

### 3.1 Color Tokens

```css
@theme {
  --color-midnight-ink: #000000;      /* Headings, body text, icons */
  --color-canvas: #FFFFFF;            /* Page background */
  --color-ghostly-gray: #f8f5ed;      /* Card surfaces, alt section bg */
  --color-muted-stone: #707070;       /* Secondary text, meta, captions */
  --color-sunbeam-yellow: #ffda6e;    /* Primary CTA, highlights */
  --color-leafy-green: #6ece9d;       /* Secondary CTA, tags, success states */
}
```

**Usage rules:**
- Primary text: `#000000` always — never gray for headings
- Secondary/meta text: `#707070` minimum — never lighter
- CTA primary: Sunbeam Yellow background + Midnight Ink text
- CTA secondary: Leafy Green background + Midnight Ink text
- CTA outline: transparent bg + Midnight Ink border + Midnight Ink text
- Cards: Ghostly Gray background, NO box shadows — background color provides depth
- No new accent colors introduced — only Yellow and Green are chromatic

### 3.2 Typography

**Font family:** DM Sans — loaded via `next/font/google`, weights 400 and 500.
**Fallback:** Inter, system-ui, sans-serif
**OpenType features:** `ss03`, `ss04`

| Token | Size | Line Height | Letter Spacing | Weight | Use |
|---|---|---|---|---|---|
| `--text-body` | 16px | 1.5 | -0.016px | 400 | Body copy |
| `--text-body-lg` | 18px | 1.5 | -0.016px | 400 | Lead paragraphs, subheadings |
| `--text-subheading` | 20px | 1.25 | -0.016px | 500 | Section subheadings |
| `--text-heading-sm` | 24px | 1.25 | -0.016px | 500 | Card headings, smaller headings |
| `--text-heading` | 28px | 1.25 | -0.016px | 500 | Section headings |
| `--text-display` | 64px | 1.25 | -0.016px | 500 | Hero headline, page H1s |

### 3.3 Spacing System

**Base unit:** 8px

| Token | Value |
|---|---|
| `--spacing-8` | 8px |
| `--spacing-16` | 16px |
| `--spacing-24` | 24px |
| `--spacing-32` | 32px |
| `--spacing-48` | 48px |
| `--spacing-64` | 64px |
| `--spacing-128` | 128px |
| `--spacing-192` | 192px |

- **Section gap:** 48px between major content blocks
- **Card padding:** 32–48px internal
- **Element gap:** 16px between sibling elements
- **Density:** Comfortable — never dense

### 3.4 Border Radius

| Element | Radius |
|---|---|
| Cards | 24px |
| Tags / Pills | 24px |
| Buttons | 12px |
| Inputs | 6px |

### 3.5 Surfaces

| Level | Color | Purpose |
|---|---|---|
| 0 — Canvas | `#FFFFFF` | Dominant page background |
| 1 — Card | `#f8f5ed` | Content cards, alternate section backgrounds |

### 3.6 Component Tokens

**Primary CTA Button (Yellow)**
- Background: `#ffda6e` | Text: `#000000`
- Radius: 12px | Padding: 12px 24px | Min-height: 48px
- Hover: background lightens to `#ffe999`, scale 1.02 (CSS, 150ms)

**Secondary CTA Button (Green)**
- Background: `#6ece9d` | Text: `#000000`
- Radius: 12px | Padding: 12px 24px | Min-height: 48px
- Hover: background lightens, scale 1.02 (CSS, 150ms)

**Outline Button**
- Background: transparent | Border: 1.5px `#000000` | Text: `#000000`
- Radius: 12px | Padding: 12px 24px | Min-height: 48px

**Tag / Pill**
- Background: `rgba(0,0,0,0.04)` | Text: `#000000`
- Radius: 24px | Padding: 4px 12px | Font: 14px, weight 500

**Service Tag (Leafy Green)**
- Background: `rgba(110,206,157,0.15)` | Text: `#000000`
- Radius: 24px | Padding: 4px 12px

**Content Card**
- Background: `#f8f5ed` | Radius: 24px | Padding: 32–48px
- No box shadow — background color provides separation

**Input Field**
- Background: `rgba(0,0,0,0.04)` | Text: `#000000` | Placeholder: `#707070`
- Radius: 6px | Padding: 10px 12px | No visible border in default state
- Focus: 1.5px `#000000` border

### 3.7 Do's and Don'ts

**Do:**
- Use DM Sans exclusively, weights 400 and 500
- Use Sunbeam Yellow for primary CTAs, Leafy Green for secondary
- Apply 24px radius on cards and tags, 12px on buttons
- Use Ghostly Gray for card backgrounds — never white cards on white bg
- Maintain generous spacing — 16px element gap, 48px section gap
- Use Midnight Ink for all primary text and headings

**Don't:**
- Use box shadows or strong borders for elevation
- Introduce any other font or accent color
- Use saturated or dark section backgrounds
- Use sharp (0px) or overly square corners
- Pack sections densely — breathing room is a design element

---

## 4. Site Architecture

### 4.1 Page Map

```
/                              → Homepage
/services                      → Services overview (all 8 as card grid)
/services/accounting           → Accounting & Bookkeeping
/services/tax-planning         → Tax Planning & Tax Filing
/services/fractional-cfo       → Fractional CFO Services
/services/financial-reporting  → Financial Reporting & Forecasting
/services/mergers-acquisitions → Mergers & Acquisitions Support
/services/payroll              → Payroll Management
/services/system-integration   → System Integration & Process Improvement
/services/advisory             → Business Advisory & Compliance
/about                         → About Tabs Consultants
/contact                       → Contact form + Book a Call
```

### 4.2 Shared Layout

- **Navbar:** Floating at top, transparent background transitions to `#f8f5ed` solid on scroll (GSAP ScrollTrigger). Logo left, nav links center, [Book a Call] yellow CTA button right.
- **Footer:** 4-column — brand + tagline / Services links / Company links / Contact info. Clean, black on white.
- **PageTransition:** GSAP-powered — outgoing page fades and slides up (y: -20px, opacity 0), incoming fades in.

---

## 5. Homepage Section Breakdown

```
┌─────────────────────────────────────────┐
│ 1. Navbar (floating, transparent)       │
├─────────────────────────────────────────┤
│ 2. Hero Section                         │
│    - Tag pill: "Financial Consulting    │
│      Since 2017"                        │
│    - H1 (64px display):                 │
│      "Financial Clarity for Businesses  │
│       That Mean Business"               │
│    - Body-lg subhead: value prop        │
│    - CTAs: [Book a Free Call] (yellow)  │
│      + [Explore Services] (outline)     │
│    - Stat strip: Years / Clients /      │
│      Services (animated counters)       │
├─────────────────────────────────────────┤
│ 3. Social Proof Strip                   │
│    - "Trusted by growing businesses"    │
│    - Logo marquee (infinite scroll)     │
│      or industry callout badges         │
├─────────────────────────────────────────┤
│ 4. Services Overview Grid               │
│    - Section label: "1 — What We Do"    │
│    - 8 service cards (Ghostly Gray)     │
│    - Icon + Title + Short description   │
│    - Each links to service page         │
│    - GSAP stagger reveal on scroll      │
├─────────────────────────────────────────┤
│ 5. Why Tabs Section                     │
│    - Section label: "2 — Why Tabs"      │
│    - 3-column cards:                    │
│      Remote-First / Personalized /      │
│      Strategic Guidance                 │
│    - Leafy Green tag on each card       │
├─────────────────────────────────────────┤
│ 6. Industries We Serve                  │
│    - Section label: "3 — Who We Help"   │
│    - 4 industry cards: Construction /   │
│      Real Estate / Startups /           │
│      Growing Enterprises                │
│    - Icon + title + 2-line description  │
├─────────────────────────────────────────┤
│ 7. How It Works (Process)               │
│    - Section label: "4 — Our Process"   │
│    - 4 steps: Discovery → Strategy →    │
│      Execution → Growth                 │
│    - Numbered, animated step-by-step    │
│      sequential reveal on scroll        │
├─────────────────────────────────────────┤
│ 8. Testimonials                         │
│    - Section label: "5 — Good Company"  │
│    - 3–6 quotes: photo + name +         │
│      company + quote                    │
│    - Ghostly Gray card background       │
├─────────────────────────────────────────┤
│ 9. Final CTA Band                       │
│    - Bold centered headline             │
│    - [Book a Free Call] (yellow)        │
│    - [Contact Us] (outline)             │
├─────────────────────────────────────────┤
│ 10. Footer                              │
└─────────────────────────────────────────┘
```

---

## 6. Service Page Template

All 8 service pages share this layout. Only content differs.

```
1. ServiceHero
   - Leafy Green tag: service category name
   - H1 display: service-specific headline
   - Body-lg: 1–2 sentence value proposition
   - [Book a Free Consultation] (yellow CTA)

2. What's Included
   - 3–6 feature cards on Ghostly Gray
   - Lucide icon + title + 1-line description

3. Who It's For
   - Industry pills (Construction / Real Estate / etc.)
   - 2–3 lines of targeted messaging

4. How It Works (service-specific)
   - 3 steps, numbered

5. Related Services
   - 2–3 card links to complementary services

6. CTA Band
   - [Book a Call] + [Contact Us]
```

---

## 7. About Page Structure

```
1. Hero: "We Are Tabs Consultants"
   - Founded 2017, remote-first
   - Mission statement

2. Story Section
   - 2-column: text left, visual/image right
   - Narrative: why Tabs was founded, what problem they solve

3. Values Grid
   - 3–4 value cards: Clarity / Precision / Partnership / Growth

4. Team (optional — if headshots available)
   - Photo + name + title cards

5. CTA Band
```

---

## 8. Contact Page Structure

```
1. Hero: "Let's Talk"
   - Short subhead

2. Two-column layout:
   Left: Contact Form
     - Fields: Name, Company, Email, Phone (optional),
       Service Interest (dropdown), Message
     - [Send Message] yellow button
     - react-hook-form + Zod validation
     - Success/error states with aria-live

   Right: Book a Call
     - Calendly embed or link
     - Brief description: "Prefer a call? Book a free
       30-minute consultation."
     - Contact details (email, location/remote note)

3. Optional: FAQ strip (3–4 common questions)
```

---

## 9. Animation System (GSAP)

### 9.1 Philosophy
Every animation must reinforce hierarchy or guide attention. Nothing decorates for decoration's sake. Animations respect `prefers-reduced-motion` — all GSAP animations are disabled when the OS reduces motion preference is set. ScrollSmoother is desktop-only (>1024px breakpoint).

### 9.2 Animation Inventory

| Interaction | Behavior | Tech | Duration/Ease |
|---|---|---|---|
| Page load | Hero content staggers in (opacity 0→1, y: 20→0) | GSAP timeline | 0.6s, power2.out |
| Page transitions | Outgoing: fade + slide up; Incoming: fade in | GSAP + route events | 0.4s, power2.inOut |
| Scroll reveals | Sections fade + slide up on viewport entry | ScrollTrigger, stagger 0.15s | 0.5s, power2.out |
| Stat counters | Numbers count up from 0 on viewport entry | ScrollTrigger + GSAP numTo | 1.2s, power1.out |
| Navbar bg | Transparent → `#f8f5ed` solid on scroll | ScrollTrigger | Instant on trigger |
| Service cards hover | `y: -4px`, subtle shadow deepen | CSS transition | 200ms ease |
| Button hover | Scale 1.02, bg lightens | CSS transition | 150ms ease |
| Logo marquee | Infinite horizontal scroll | GSAP infinite tween | 30s linear loop |
| Process steps | Sequential stagger as user scrolls | ScrollTrigger + timeline | 0.4s per step |
| Service icon hover | Leafy Green bg flash on icon | CSS transition | 150ms |

### 9.3 GSAP Setup

```typescript
// lib/gsap.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
export { gsap, ScrollTrigger, ScrollSmoother }
```

### 9.4 Reusable Animation Presets

```typescript
// lib/animations.ts
export const fadeUp = {
  from: { opacity: 0, y: 24 },
  to: { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
}

export const staggerFadeUp = (stagger = 0.15) => ({
  from: { opacity: 0, y: 24 },
  to: { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger }
})
```

---

## 10. File & Folder Structure

```
tabs/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── services/
│   │       ├── page.tsx
│   │       ├── accounting/page.tsx
│   │       ├── tax-planning/page.tsx
│   │       ├── fractional-cfo/page.tsx
│   │       ├── financial-reporting/page.tsx
│   │       ├── mergers-acquisitions/page.tsx
│   │       ├── payroll/page.tsx
│   │       ├── system-integration/page.tsx
│   │       └── advisory/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── SectionLabel.tsx
│   │   │   └── Input.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── StatStrip.tsx
│   │   │   ├── LogoMarquee.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── WhyTabs.tsx
│   │   │   ├── Industries.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTABand.tsx
│   │   └── service/
│   │       ├── ServiceHero.tsx
│   │       ├── ServiceFeatures.tsx
│   │       ├── ServiceProcess.tsx
│   │       └── RelatedServices.tsx
│   ├── lib/
│   │   ├── gsap.ts
│   │   ├── animations.ts
│   │   └── services.ts
│   └── styles/
│       └── globals.css
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-05-12-tabs-consultants-website-design.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 11. SEO & Performance Strategy

### 11.1 Metadata
- `generateMetadata()` on every page
- Pattern: `{Page} | Tabs Consultants — Financial Consulting`
- OG image: custom per page (or shared branded template)
- Canonical URLs on all pages

### 11.2 Structured Data (JSON-LD)
On homepage:
```json
{
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Tabs Consultants",
  "foundingDate": "2017",
  "serviceType": ["Accounting", "Tax Planning", "Fractional CFO", ...],
  "areaServed": "US"
}
```

### 11.3 Performance Targets
- LCP < 2.5s | CLS < 0.1 | INP < 200ms
- All images via `next/image` with `priority` on above-fold assets
- DM Sans loaded via `next/font/google`, display swap, latin subset only
- ScrollSmoother desktop-only (>1024px) — avoids mobile performance penalty
- No third-party scripts in `<head>` — defer all external embeds (Calendly)

### 11.4 Accessibility
- All images have descriptive `alt` text
- Form inputs have visible `<label>` elements
- Error states use `role="alert"` / `aria-live`
- All interactive elements have `cursor-pointer` and focus ring styles
- `prefers-reduced-motion` disables all GSAP animations
- Color contrast: minimum 4.5:1 on all text (black on white: 21:1 ✓; black on yellow: ~8:1 ✓; black on green: ~6:1 ✓)
- Keyboard navigation tested across all interactive elements

### 11.5 Sitemap
- Auto-generated via `next-sitemap`
- All pages included, service pages with higher priority weight

---

## 12. Content Strategy Notes

### Headline Directions (to be finalized with client)
- Hero H1: "Financial Clarity for Businesses That Mean Business"
- Or: "Your Numbers, Finally Working for You"
- Or: "Expert Financial Guidance — Without the Big Firm Price Tag"

### Key Messaging Pillars
1. **Clarity** — We make your finances understandable and actionable
2. **Compliance** — Stay ahead of tax and regulatory requirements
3. **Growth** — Strategic guidance that scales with your business
4. **Partnership** — Long-term relationships, not one-time engagements

### Social Proof Requirements (to gather from client)
- 3–6 client testimonials (quote + name + company + optional headshot)
- Client logos for the marquee strip (can be industry icons if logos unavailable)
- Key stats: years in business (2017 → 8+ years), approximate client count, services count

---

## 13. Implementation Checklist

### Pre-Development
- [ ] Confirm company tagline / hero headline
- [ ] Gather testimonials and client logos
- [ ] Confirm Calendly account URL for booking embed
- [ ] Confirm contact email address for form submission
- [ ] Gather any existing brand assets (if any)

### Development Phases
1. Project scaffold — Next.js 15, Tailwind v4, GSAP, DM Sans
2. Design system — globals.css tokens, ui/ components
3. Layout shell — Navbar, Footer, PageTransition
4. Homepage — all sections
5. Service pages — template + all 8 pages + services overview
6. About page
7. Contact page
8. GSAP animations — ScrollTrigger, ScrollSmoother, page transitions
9. SEO — metadata, JSON-LD, sitemap
10. Accessibility audit
11. Performance audit
12. Responsive QA (320px, 768px, 1024px, 1440px)
