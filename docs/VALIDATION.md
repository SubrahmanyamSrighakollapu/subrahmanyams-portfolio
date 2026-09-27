# Delivery verification

Checked on 27 September 2026.

## Build and code

- Next.js production compilation and static page generation passed.
- TypeScript checking passed as part of the production build.
- All five requested routes were generated, together with the not-found page, robots.txt and sitemap.xml.
- Metadata, JSON-LD and every local asset/navigation link were verified in the final static export.
- Production dependency audit reported **0 known vulnerabilities** at the time checked.
- Fonts, images, technology marks and the résumé are bundled locally.

## Layout review

All five pages were rendered in browser frames at viewport widths of **320, 360, 390, 768, 1024 and 1440 pixels**: 30 combinations. The audit reported no page-level horizontal overflow, no out-of-bounds content/control boxes, no broken loaded images and exactly one H1 on each page.

Visual inspection covered the homepage desktop hero, About composition, project cards and mobile Contact page. These checks are representative browser checks, not a claim of testing every device, browser or operating system.

## Interactive checks

- Mobile navigation opens and closes.
- Theme control switches between light and dark.
- Written story dialog opens and advances to the next chapter.
- The Mobile Apps category returns the single restaurant application.
- A project detail dialog opens and closes with Escape.
- An unmatched project search shows the empty state; reset restores all 12 projects.
- Backend skills filtering returns Node.js, Express.js, .NET and PHP.
- Empty contact-form submission triggers native required-field validation.
- A valid local test name/email/message passes form validation; the message counter updates.

## Configuration and limits

- No real messages were sent during testing. Mail and telephone app handoffs depend on the visitor's device configuration.
- The optional external form provider was not configured or tested. Set an HTTPS endpoint and validate it with that provider before using it.
- Clipboard availability depends on a secure browser context and browser policy; failure is handled with a manual-copy announcement.
- Canonical URLs and sitemap entries require `NEXT_PUBLIC_SITE_URL` to be set to the real public domain before the production build.
- Project thumbnails retain the artwork from the uploaded design screens. Original high-resolution project images were not supplied.
- Reduced-motion support is included in CSS and the motion controller; device-specific accessibility preferences should also be checked on the intended browser.
