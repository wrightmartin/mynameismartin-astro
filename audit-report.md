# Squarespace-to-Astro Migration Audit Report

28 findings classified as **Bug** (broken/missing content), **Mismatch** (differs from Squarespace but may be fine), or **Improvement** (Astro version is arguably better). Ordered by priority.

---

## Bugs — content that's broken or missing

These need fixing before launch.

### ~~1. Three case study images not downloaded or referenced~~ RESOLVED
- **Pages:** bsbi, climate-assembly, stickers
- **Resolution:** All three images downloaded and added to MDX files:
  - `bsbi/illustrations.png` (253KB) — placed after Design direction intro
  - `climate-assembly/Artboard-5-copy2.png` (19KB) — placed after "An information hub" text
  - `stickers/DSCF2367.jpeg` (503KB) — placed after intro text, before sticker gallery

### ~~2. Footer: Missing LinkedIn and Bluesky social links~~ RESOLVED
- **Page:** All pages (footer)
- **Resolution:** Added LinkedIn, Bluesky, and RSS icon links to Footer.astro with matching CSS in components.css. All three render as a row of SVG icon links with hover states and aria-labels.

### ~~3. Featured projects: Wrong third project shown~~ RESOLVED
- **Page:** Homepage
- **Resolution:** Set `featured: true` in bsbi.mdx and `featured: false` in fixmystreet.mdx. Homepage now correctly shows ecosyste.ms, Redesigning Funding, and BSBI.

### ~~4. Google Calendar booking link missing~~ REMOVED (invalid)

### ~~5. Hero: Availability date is stale~~ RESOLVED
- **Page:** Homepage
- **Resolution:** Updated Hero.astro from "early 2026" to "mid 2026".

### ~~6. ecosystems: 3 images exist locally but aren't referenced in MDX~~ REMOVED (invalid)

---

## Mismatches — differs from Squarespace, verify intent

These are differences that might be intentional. Review each and decide.

### ~~7. Featured project card titles don't match case study titles~~ RESOLVED
- **Page:** Homepage
- **Resolution:** Added optional `cardTitle` field to work collection schema in content.config.ts. Added `cardTitle` frontmatter to ecosystems.mdx ("Transforming Open Source Software funding"), funding-service-design.mdx ("Redesigning government funding"), and bsbi.mdx ("A user-centred redesign for a British institution"). Updated index.astro ProjectCard to use `cardTitle || title`.

### ~~8. Blog and weeknotes merged into single /blog feed~~ RESOLVED (intentional)
- **Page:** Blog listing
- **Resolution:** Confirmed intentional. Single /blog feed is preferred.

### ~~9. BSBI title: "The Botanical Society of Britain & Ireland" vs "Botanical Society of Britain and Ireland"~~ RESOLVED
- **Page:** Work listing, case study
- **Resolution:** Updated bsbi.mdx title to "Botanical Society of Britain and Ireland" to match Squarespace. Removed "The" prefix and changed "&" to "and".

### ~~10. CV: Selected work under Double True differs~~ RESOLVED (intentional)
- **Page:** Curriculum Vitae
- **Resolution:** Confirmed intentional. CV was updated during migration.

### ~~11. About: Third photo (throne) not used~~ RESOLVED
- **Page:** About
- **Resolution:** Added about-throne.jpg as a full-width photo section before the ClientLogos component in about.astro.

### ~~12. Blog excerpts on homepage differ from Squarespace~~ RESOLVED (intentional)
- **Page:** Homepage
- **Resolution:** Confirmed frontmatter excerpts are fine as-is.

### ~~13. Contact form removed~~ RESOLVED (intentional)
- **Page:** Get in Touch
- **Resolution:** Confirmed intentional. Mailto approach preferred over form.

### ~~14. Contact intro text differs~~ RESOLVED (intentional)
- **Page:** Get in Touch
- **Resolution:** Consistent with #13. Text updated to match mailto approach.

---

## Improvements — Astro version is arguably better

These are deliberate or reasonable changes. No action needed unless you disagree.

### 15. Navigation: "Contact me" vs "Get in touch"
- **Page:** All pages (header + footer)
- **Issue:** Label changed from "Get in touch" to "Contact me"
- **Verdict:** Both are fine. "Contact me" is slightly more direct. The URL is still `/get-in-touch`. No action needed.

### 16. Navigation: No "Weeknotes" link
- **Page:** All pages (header)
- **Issue:** Squarespace has a separate Weeknotes nav item; Astro merged weeknotes into /blog
- **Verdict:** Consistent with the merged blog decision (#8). Simpler nav. No action needed unless weeknotes are separated again.

### 17. Hero: Trailing comma after "Martin"
- **Page:** Homepage
- **Issue:** "My name is Martin," vs "My name is Martin"
- **Verdict:** The comma leads into the next line ("human centred designer for hire") as a continuous phrase. This is a stylistic choice, not a bug.

### 18. "Featured projects" heading visible
- **Page:** Homepage
- **Issue:** Astro shows `<h2>Featured projects</h2>` that Squarespace hides
- **Verdict:** Better for accessibility and scannability. Improvement.

### 19. "About" heading missing on homepage
- **Page:** Homepage
- **Issue:** Squarespace shows an "About" heading; Astro doesn't
- **Verdict:** If the section is clear from context, removing a heading is fine. But for consistency with other sections, you may want to add it back.

### 20. About: Timeline heading "Experience" vs "Curriculum Vitae"
- **Page:** About
- **Issue:** Heading changed
- **Verdict:** "Experience" is more natural in context (the full CV lives at /curriculum-vitae). Improvement.

### 21. About: Client logos heading "Organisations I've worked with" vs "Happy clients"
- **Page:** About
- **Issue:** Heading changed
- **Verdict:** More professional and accurate. Improvement.

### 22. About: Portrait alt text is less descriptive
- **Page:** About
- **Issue:** Squarespace had extremely detailed alt text; Astro version is shorter
- **Verdict:** Both are adequate. The Squarespace version was unusually detailed (possibly auto-generated). The Astro version is concise and accurate. Could be improved but not a bug.

### 23. No pagination on blog listing
- **Page:** Blog listing
- **Issue:** 41 posts on one page vs Squarespace's pagination
- **Verdict:** For 41 posts, a single page is manageable and arguably better for findability. Pagination could be added later if the list grows significantly.

### 24. CV: Social links missing
- **Page:** Curriculum Vitae
- **Issue:** No LinkedIn/Bluesky on CV page
- **Verdict:** Social links are in the footer (once #2 is fixed). Having them on the CV too is nice but not essential.

---

## Verified correct — no issues

- RSS feed at /blog/rss.xml exists and works, with autodiscovery link
- All 4 redirects present (/weeknotes→/blog, /home→/, /cart→/, /rssfeeds→/blog) plus wildcard
- Page titles, meta descriptions, Open Graph, Twitter Cards all configured
- Canonical URLs set on every page
- Navigation `is-active` / `aria-current` logic works for nested routes
- All 20 blog posts and 21 weeknotes present with correct titles and dates
- All image paths in MDX files resolve to existing local files
- Prev/next navigation chain across all 9 case studies is correct
- Project count (9) and display order match Squarespace
- All 9 thumbnails downloaded with correct format

---

## Summary

| Priority | # | Category | Issue | Action |
|----------|---|----------|-------|--------|
| ~~**P1**~~ | ~~1~~ | ~~Bug~~ | ~~3 case study images missing (bsbi, climate-assembly, stickers)~~ | RESOLVED |
| ~~**P1**~~ | ~~2~~ | ~~Bug~~ | ~~Footer missing LinkedIn + Bluesky links~~ | RESOLVED |
| ~~**P1**~~ | ~~3~~ | ~~Bug~~ | ~~Wrong third featured project on homepage~~ | RESOLVED |
| ~~**P1**~~ | ~~4~~ | ~~Bug~~ | ~~Calendar booking link missing~~ | REMOVED |
| ~~**P1**~~ | ~~5~~ | ~~Bug~~ | ~~Availability date stale ("early" → "mid")~~ | RESOLVED |
| ~~**P2**~~ | ~~6~~ | ~~Bug~~ | ~~ecosystems: 3 images not placed in MDX~~ | REMOVED |
| ~~**P2**~~ | ~~7~~ | ~~Mismatch~~ | ~~Homepage card titles differ from case study titles~~ | RESOLVED |
| ~~**P2**~~ | ~~8~~ | ~~Mismatch~~ | ~~Blog + weeknotes merged into single feed~~ | RESOLVED |
| ~~**P3**~~ | ~~9~~ | ~~Mismatch~~ | ~~BSBI title wording~~ | RESOLVED |
| ~~**P3**~~ | ~~10~~ | ~~Mismatch~~ | ~~CV selected work entry differs~~ | RESOLVED |
| ~~**P3**~~ | ~~11~~ | ~~Mismatch~~ | ~~Third about photo not used~~ | RESOLVED |
| ~~**P3**~~ | ~~12~~ | ~~Mismatch~~ | ~~Blog excerpts differ~~ | RESOLVED |
| ~~**P3**~~ | ~~13~~ | ~~Mismatch~~ | ~~Contact form removed~~ | RESOLVED |
| ~~**P3**~~ | ~~14~~ | ~~Mismatch~~ | ~~Contact intro text updated~~ | RESOLVED |
| — | 15-24 | Improvement | Various heading/label/nav changes | No action needed |
