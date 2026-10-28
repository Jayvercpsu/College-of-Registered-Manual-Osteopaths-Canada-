# Deployment & Rollback Guide

> **Rule #1:** the existing site at `manualosteopaths.org` stays live until
> CRMO signs off on the redesign. All work below assumes staging first.

## 1. Environments

| Environment | URL | Purpose |
| --- | --- | --- |
| Local | `http://localhost:3000` | Development |
| Staging | e.g. `https://crmo-staging.example.com` | Client review & approval |
| Production | `https://www.manualosteopaths.org` | Only after written approval |

Set `NEXT_PUBLIC_SITE_URL` per environment so canonical URLs, Open Graph
links and the sitemap always reference the correct origin.

## 2. Staging deployment

1. Deploy this repository to any Next.js-capable host (Vercel, a Node server,
   or a container with `npm run build && npm start`).
2. Configure environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://<staging-host>`
   - (optional, later) `DATABASE_URL`, `CONTACT_EMAIL_API_KEY`,
     `CONTACT_EMAIL_TO`.
3. Verify:
   - `/api/health` returns `{ "ok": true }`
   - `/sitemap.xml` and `/robots.txt` load
   - Legacy redirect spot-check, e.g. `/news-2` → `/news`,
     `/member-list-2` → `/members-list`
4. Password-protect or `noindex` staging if the host supports it, so the
   preview is not indexed.

## 3. Pre-launch checklist (gate to production)

- [ ] CRMO approves final copy, logo and imagery (see review checklist)
- [ ] Sample practitioner records removed; verified registry data connected
- [ ] Contact-form email delivery enabled and tested end-to-end
- [ ] `.env` on production contains only real secrets
- [ ] Privacy Policy legally reviewed (PIPEDA / applicable provincial law)
- [ ] Redirect mapping verified against the final legacy sitemap
      (`docs/CONTENT-MIGRATION.md`)
- [ ] DNS TTL lowered at least 24h before cutover

## 4. Production cutover

1. Build the exact commit approved in review: `npm ci && npm run build`.
2. Deploy to the production host/container.
3. Point `manualosteopaths.org` DNS (or host routing) at the new deployment.
4. Smoke test on the production domain:
   - Homepage, all nav links, directory search + filters + pagination,
     a practitioner profile, contact submit, 404 page
   - Redirect spot-checks from the legacy map
   - `sitemap.xml` / `robots.txt` reachable
5. Monitor host logs and (once added) analytics for 24–72h.

## 5. Backup & rollback

**Before cutover:**

1. Full backup of the existing WordPress site (files + database export) stored
   outside the web host.
2. Export the legacy site's URL list (sitemap crawl) and archive it in
   version control for redirect verification.
3. Tag the last-known-good deployment of the old site / current hosting
   configuration.

**Rollback (if problems appear after cutover):**

1. Re-point DNS at the previous host (TTL was lowered, so propagation is fast).
2. Restore the WordPress backup if any data drifted during the transition.
3. Keep the new deployment running on its staging URL so fixes can be made
   and a second cutover scheduled.

**Rollback of the new site itself** (post-launch regressions): redeploy the
previous approved commit (`npm ci && npm run build && npm start`) — there is
no persistent state to migrate while the directory uses static/demo data.
Once the registry database exists, take a DB snapshot before every release
and pair rollbacks with `drizzle-kit` migrations only when a schema change
was shipped in the same release.
