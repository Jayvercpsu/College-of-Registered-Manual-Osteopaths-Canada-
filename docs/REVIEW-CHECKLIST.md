# CRMO Client Review Checklist

Use this during staging review. Nothing ships to production until every
section is signed off.

## A. Identity & accuracy

- [ ] Organization name, legal name and RMO title usage are correct
- [ ] Founding date (June 27, 2019) and Thornhill, Ontario base are correct
- [ ] Address, phone and email are correct everywhere (header utility bar,
      footer, contact page)
- [ ] The "not a provincial regulatory agency" disclosure appears and is
      worded as CRMO intends
- [ ] Insurer names listed on `/membership` match announcements CRMO wants
      public
- [x] Official logo replaces the placeholder mark (`src/components/layout/logo.tsx`,
      `src/app/icon.jpg`)

## B. Content approval

- [ ] Homepage copy approved (hero, about, standards)
- [ ] `/about` page copy approved
- [ ] `/osteopathy`, `/reporting`, `/council-of-elders` and
      `/land-acknowledgment` copy approved
- [ ] `/news` index and `/members-list` landing copy approved
- [ ] `/contact` leadership and committee roster confirmed current
- [ ] `/membership` copy + the (placeholder) four-step application sequence
      approved, and real fees/eligibility supplied
- [ ] Guideline summaries on `/resources` match the official documents
- [ ] News archive approach approved (migrate posts vs. rewrite)
- [ ] Privacy Policy reviewed by counsel; accessibility statement approved
- [ ] All amber placeholder notices reviewed and removal conditions agreed

## C. Directory

- [ ] Search by name, city, province and the two toggles behave as expected
- [ ] CRMO confirms the verified member data export (fields per
      `src/types/practitioner.ts`) so sample records can be replaced
- [ ] Which contact details may be published per member is confirmed
- [ ] Registration-status display wording approved for live records

## D. Forms & integrations

- [ ] Contact form topics list is what the office wants
- [ ] Target inbox for submissions confirmed (→ `CONTACT_EMAIL_TO`)
- [ ] Transactional email provider selected (→ `CONTACT_EMAIL_API_KEY`)
- [ ] Autoresponder copy (optional) approved

## E. Experience & accessibility walkthrough

- [ ] Mobile menu opens/closes, Escape works, focus returns to the button
- [ ] Tab through every page: focus always visible, skip link works
- [ ] Screen reader pass on homepage + directory + contact (NVDA/VoiceOver)
- [ ] `prefers-reduced-motion` enabled → animations effectively removed
- [ ] Tested at 360px, 768px, 1024px and 1440px widths
- [ ] 404 page reviewed (try `/definitely-missing`)

## F. SEO & launch

- [ ] Legacy URL crawl received → redirect map updated and spot-checked
- [ ] Canonical domain confirmed (`NEXT_PUBLIC_SITE_URL` on production)
- [ ] Google Search Console property prepared for the cutover
- [ ] DNS plan agreed (see `docs/DEPLOYMENT.md`)

**Approval:** ______________________  **Date:** ____________
