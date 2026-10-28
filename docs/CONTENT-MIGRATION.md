# Content Migration & Redirect Mapping

## Redirect mapping (implemented in `next.config.ts`)

Verified legacy WordPress URLs mapped to their redesigned equivalents.
Redirect sources are matched after Next.js trailing-slash normalization, so
both `/news-2` and `/news-2/` are covered.

| Legacy URL | New destination |
| --- | --- |
| `/news-2/` | `/news` |
| `/contact-us/` | `/contact` |
| `/about-crmo/` | `/about` |
| `/member-list/`, `/member-list-2/` (old member listing pages) | `/members-list` |
| `/2019/10/10/proper-usage-of-title/` | `/resources#usage-of-title` |
| `/2019/10/15/crmo-informed-consent-guideline/` | `/resources#informed-consent` |
| `/2019/10/18/crmo-code-of-ethics/` | `/resources#code-of-ethics` |
| `/2019/11/21/continuing-education-requirements/` | `/resources#continuing-education` |
| `/2019/10/15/issuing-paid-in-full-receipts/` | `/resources#insurer-recognition` |
| `/2020/02/26/manulife-insurance-company-accepts-crmo/` | `/resources#insurer-recognition` |
| `/2020/09/08/pacific-blue-cross-now-accepts/` | `/resources#insurer-recognition` |
| `/2020/11/20/green-shield-canada-accepts-crmo-1/` | `/resources#insurer-recognition` |
| `/2020/04/24/insurance-coverage-for-virtual-online-…/` | `/resources#insurer-recognition` |
| Any other `/YYYY/MM/DD/slug` dated post | `/news` (catch-all) |

**Now hosted locally (no redirect):** `/osteopathy`, `/reporting`,
`/council-of-elders`, `/land-acknowledgment`, `/news`, `/members-list` and
`/contact` are first-class pages in this build. The legacy `/news/` and
`/members-list/` paths resolve directly to the local pages.

**Before launch:** crawl the live site, diff its full URL list against this
table, and extend the map for anything missed (especially board, FAQ and
registration pages if they exist in the final crawl).

## Content migration checklist

| Content | Source | Destination | Status |
| --- | --- | --- | --- |
| About text, mission, founding date | Homepage "About CRMO" block | `/about`, homepage | ✅ Migrated (verified) |
| Osteopathy origins and RMO title | `/osteopathy/` | `/osteopathy` | ✅ Migrated (verified) |
| Reporting process and disciplinary board | `/reporting/` | `/reporting` | ✅ Migrated (verified) |
| Council of Elders biographies and contact | `/council-of-elders/` | `/council-of-elders` | ✅ Migrated (verified) |
| Land acknowledgment statement and explanation | `/land-acknowledgment/` | `/land-acknowledgment` | ✅ Migrated (verified) |
| Contact address / phone / email | Site footer | Header utility bar, footer, `/contact` | ✅ Migrated (verified) |
| Board, committee and Council roles | `/contact/` | `/contact` leadership section | ✅ Migrated (verified) |
| News archive (insurer announcements, guidelines, Indigenous Peoples Day etc.) | `/news-2/` and dated posts | `/news` index; full posts pending | ⚠️ Summary index migrated — full-text posts pending |
| Member directory (old listing) | `/member-list-2/` and `/member-list/` | `/members-list` landing page + `/directory` | ⚠️ Static landing page and labelled sample directory — verified registry pending |
| RMO title & regulator disclosure | Homepage copy | `/about`, footer | ✅ Migrated (verified) |
| Code of Ethics summary | Blog post 2019-10-18 | `/resources#code-of-ethics` | ⚠️ Summary migrated — full text pending |
| Informed Consent Guideline | Blog post 2019-10-15 | `/resources#informed-consent` | ⚠️ Summary migrated — full text pending |
| Proper Usage of Title | Blog post 2019-10-10 | `/resources#usage-of-title` | ⚠️ Summary migrated — full text pending |
| Continuing Education Requirements | Blog post 2019-11-21 | `/resources#continuing-education` | ⚠️ Summary migrated — full text pending |
| Insurer announcements (Manulife, GSC, PBC, ABC, Medavie) | 2020 news posts | `/news`, `/resources#insurer-recognition`, `/membership` | ⚠️ Summaries migrated — full archive pending |
| Official CRMO logo & brand assets | CRMO | Header/footer/favicon | ✅ Logo and favicon applied (`public/images/crmo-logo.jpg`, `src/app/icon.jpg`) |
| Membership application details & fees | CRMO | `/membership` | ⬜ Awaiting confirmation |

## Image credits (Pexels — free to use, no attribution required; courtesy credit kept)

- `hero-treatment.jpeg` — Karolina Grabowska (pexels.com/photo/4506110)
- `about-consult.jpeg` — RDNE Stock project (pexels.com/photo/8312857)
- `standards-shoulder.jpeg` — Karolina Grabowska (pexels.com/photo/4506106)
- `crmo-logo.jpg` — official CRMO logo supplied by the organization

The redesigned About, Osteopathy and Resources pages reuse `hero-treatment.jpeg`
and `about-consult.jpeg`; the originally planned `assessment-back` and
`education-spine` files were not supplied with this asset batch.

CRMO may replace any of these with owned photography before launch — drop
replacements into `public/images/` under the same filenames.
