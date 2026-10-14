# TMN Business — premium bilingual UAE services website

Next.js 14 App Router / React / Tailwind / Lucide. Independent original design based on the user's supplied TMN brand assets.

## Quick start

```bash
npm install
npm run dev
```

Production: `npm run build && npm run start`. Deploy to Vercel or a Node.js host. Node.js 20+ recommended.

## Features
- 100% responsive, navy and gold corporate design
- English `/en` and Arabic `/ar` with true RTL sections, translated home and dedicated service pages
- 11 SEO-friendly service landing pages in each language, HTML metadata, hreflang, sitemap, robots, ProfessionalService JSON-LD
- Sticky responsive navigation, FAQs, WhatsApp lead CTAs per service, click-to-call, location map, mobile action bar
- Original TMN logo cropped from client-provided artwork; no competitor logos or copied layouts
- High-resolution professional stock imagery remotely hosted by Unsplash. Replace with real TMN team photography for launch and optimize locally.

## Update details
- `lib/content.ts`: phone numbers, email, WhatsApp template, bilingual page copy, service list
- `public/images/tmn-logo.jpg`: TMN logo cropped from uploaded identity art
- `.env.local`: set `NEXT_PUBLIC_SITE_URL=https://yourdomain.ae` for correct canonical URLs and sitemap
- `components/Site.tsx`: page composition / appearance

## Launch checklist
- Confirm company legal registered name and full Al Qusais address, replace generic map target with real Google Maps place ID
- Confirm service offerings, tax advisory scope, trade licence requirements and government body terminology
- Replace Unsplash images with licensed/owned original photos
- Add privacy policy, analytics with cookie consent where needed, real testimonials only with permission
- Verify `.env.local` domain and verify contact numbers, run `npm run build` before production deployment

## Transparency
No invented awards, numeric success stats, fake customer reviews, guaranteed government approval, or competitor advertised prices were used. TMN is not described as a government authority. Work described as assistance is subject to actual eligibility and UAE authority rules.
