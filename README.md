# Swiss Editorial Portfolio

A Swiss/editorial-design portfolio built with React + Vite + Tailwind CSS + Framer Motion + GSAP.
Typography-first, oversized lowercase headlines, one accent color, no gradients or shadows —
built to feel like a printed spread rather than a website.

Includes a built-in **AI chatbot** ("ask tanishq") that answers visitor questions about my work
and reads replies aloud, plus a resume download link inside the chat.

## 1. Install Node.js

Node 18+ required. Check with `node -v`. Get it from https://nodejs.org if missing.

## 2. Install & run

```
npm install
```

This project uses a serverless function (`api/chat.js`) for the AI chatbot, so run it with
the Vercel CLI instead of plain `npm run dev` — otherwise `/api/chat` won't work locally:

```
npx vercel dev
```

Open the printed local URL (usually `http://localhost:3000`).

## 3. Set up the AI chatbot

The chatbot uses Google's Gemini API (free tier).

1. Get a free API key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) — no
   credit card required.
2. Create a file named `.env` in the project root:
   ```
   GEMINI_API_KEY=your_key_here
   ```
3. Restart `vercel dev` after saving `.env` — environment variables are only read on startup.
4. When deploying, add the same `GEMINI_API_KEY` in your Vercel project's
   **Settings → Environment Variables**.

The chatbot's knowledge (bio, skills, projects, resume link) is defined directly in
`api/chat.js` inside the `system_instruction` text — update it there if your info changes.

## 4. Personalize your content

Everything on the page itself lives in `src/data/portfolio.js`:
- `profile` — name, role, bio paragraphs, email, resume path, location
- `skills` — grouped skill lists (Engineering / Systems / Tools / Practice)
- `projects` — each project's number, title, description, tech, image, demo/github links
- `experience` — year / role / org / description rows
- `socials` — github / linkedin / leetcode URLs

Drop your resume into `public/resume.pdf` (must be a real PDF, and named exactly `resume.pdf` —
this is also what the chatbot's download link/button points to).

## 5. About the project images

Each project currently points to a **picsum.photos** placeholder URL, run through a CSS
`grayscale()` filter (`.img-mono` in `index.css`) to match the "monochrome photography"
brief. Replace `image: '...'` in `portfolio.js` with your own screenshots — drop the files
into `public/` and reference them as `/your-file.png`. The grayscale + hover-scale effect
will apply automatically to whatever image you use.

## 6. Fonts

- **General Sans** (headings) — loaded free from Fontshare, the closest open alternative
  to Neue Haas Grotesk / Helvetica Now Display named in your brief.
- **Inter Tight** (body) — loaded free from Google Fonts, also on your brief's list.

Both are linked in `index.html`. If you have a licensed copy of the real Neue Haas Grotesk
or Helvetica Now, drop the font files into `public/fonts/` and add an `@font-face` block
at the top of `src/index.css`, then update `fontFamily.display` / `fontFamily.body` in
`tailwind.config.js` to match.

## 7. Structure

```
api/
  chat.js                 serverless function — proxies chat messages to Gemini API
src/
  App.jsx                 page layout
  index.css               base styles + underline-link + grayscale-image utilities
  data/portfolio.js       <- all your on-page content, edit this
  components/
    ChatBot.jsx            floating AI chat widget (text + voice reply, resume link)
    Nav.jsx                fixed header, fullscreen menu overlay, GSAP scroll-progress folio counter
    SectionLabel.jsx       running "01 — about" style header used at the top of each section
    Hero.jsx               oversized name section
    About.jsx              asymmetric bio spread
    Skills.jsx             typography-only skill lists
    Projects.jsx           one full-screen spread per project, alternating layout
    Experience.jsx         editorial timeline rows
    Contact.jsx             oversized email + social links
```

## 8. How the tech stack is used

**Tailwind CSS** — the whole visual system lives in `tailwind.config.js`: the five brief
colors (`cream`/`ink`/`accent`/`muted`/`line`), the two type families, and custom
`hero`/`display`/`h2` font sizes built with `clamp()` so headlines scale fluidly between
mobile and desktop instead of jumping at breakpoints.

**Framer Motion** — every section uses `whileInView` for a one-shot fade-and-rise as it
enters the viewport (this is the "fade-in on scroll" from your brief). The full-screen
menu overlay in `Nav.jsx` and the chat panel in `ChatBot.jsx` use `AnimatePresence` for
their open/close transitions.

**GSAP** — used specifically for the one continuous, scroll-scrubbed effect: the top
progress rule and bottom-left folio counter (`01 / 100` style page count) in `Nav.jsx`,
via `ScrollTrigger`'s `onUpdate` callback tracking overall scroll progress. This is the
right tool for that job because it's tied continuously to scroll position, not a one-shot
reveal — Framer Motion's `whileInView` is built for the latter, GSAP's ScrollTrigger for
the former.

**Three.js** — installed as part of the shared stack but intentionally not used here.
Nothing in a Swiss/editorial brief calls for 3D; adding it would work against the
brief's minimalism. It's there if you want to reintroduce a 3D element later.

**Gemini API** — powers the chatbot in `api/chat.js`, called server-side only so the API
key is never exposed to the browser. Replies are read aloud client-side using the
browser's built-in `SpeechSynthesis` API — no extra service or cost for voice.

**Underline links & image hover** — plain CSS (`.link-underline`, `.img-mono-wrap` in
`index.css`), not JS, since a `transform: scaleX()` transition on `::after` and a
`transform: scale()` on hover are cheaper and smoother done natively than animated
through a JS library.

## 9. Deploying

Push to GitHub and import the repo in [Vercel](https://vercel.com):
- Build command: `vite build`
- Output directory: `dist`
- Install command: `npm install`
- Add `GEMINI_API_KEY` under Settings → Environment Variables

Vercel will detect `api/chat.js` automatically and deploy it as a serverless function
alongside the static site — no extra configuration needed.
