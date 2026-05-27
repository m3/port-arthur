# Port Arthur Digital Transformation Platform

A high-performance, modern, and conversion-optimized digital presence for the historic **Port Arthur Pub & Brewhouse (est. 1918)** on Lindholmen, Gothenburg. 

This repository replaces an outdated, slow WordPress site with an ultra-fast, single-page architecture built using **Vite + React + Vanilla CSS**, fully integrated with authentic brand assets and automated booking localization.

---

## 🚀 Getting Started

### 1. Local Development
To launch the platform locally, install dependencies and start the Vite development server:
```bash
# Clone the repository
git clone git@github.com:m3/port-arthur.git
cd port-arthur

# Install dependencies
npm install

# Run the local server
npm run dev
```
👉 Your site will be live at: **`http://localhost:5173/`**

### 2. Production Compilation
To bundle the application into highly optimized static assets (HTML, CSS, JS, and compressed images):
```bash
npm run build
```
The compiled output is saved to the `/dist` directory, ready to be served by any high-speed CDN.

---

## 🎨 Design System & Conversion Psychology

This application implements several core visual and psychological improvements outlined in the restaurant digital audit:

1. **Brand Identity**: Integrated four authentic assets directly inside `/public/assets/`:
   * **`logo.png`**: The vector outline building logo is inverted in the CSS (`filter: invert(1)`) to form a glowing white header/footer badge against dark panels.
   * **`exterior.jpg`**: Used as a full-viewport, parallax-scrolling background for the Hero section.
   * **`cheers.jpg`**: Highlights the local microbrewing heritage showing bottles with the green *Finest Red Light Pale Ale Nr 001* label.
   * **`pour.jpg`**: Featured in the history block as a rich sensory trigger showing the pub's draft beer.
2. **Pricing Psychology (Anti-Price-Shopping)**:
   * Stripped out the friction-inducing "kr" / "SEK" currency suffixes.
   * Placed raw integer prices (e.g. `189`, `355`) directly inline at the end of the dish description strings with identical weights to break vertical price-scanning lines.
3. **High-Margin Anchoring**: Special visual cards with glowing golden boundaries and *"House Classic / Husets Klassiker"* labels accentuate signature dishes (*Plankstek* and *Lamb Roast Beef*).
4. **Reservation Widget Localization**: Switches the Bordsbokaren iframe language attribute `l=se-SE` vs `l=en-US` dynamically in sync with the header language switcher, eliminating international group booking abandonments.
5. **Live Status Indicator**: Compares opening hours against the active system clock to display a live open status light, highlighting the current day in the schedule.

---

## 🌐 Hosting under `runthetable.app` (CI/CD Pipeline)

To deploy the site and host it under your custom domain (e.g., `portarthur.runthetable.app` or a related subdomain), connect the repository to a global hosting service like **Vercel** or **Netlify**:

### 1. Link to Vercel/Netlify (Web Interface)
1. Go to your **Vercel** or **Netlify** Web Dashboard.
2. Click **"New Project" / "Import Project"**.
3. Authenticate with GitHub, select your repository `m3/port-arthur`, and import it.
4. **Build Settings**: The hosting provider will automatically detect Vite and configure:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
5. Click **Deploy**. Your site is now live on a temporary URL!

### 2. Map Custom Domain
1. Under your project settings, navigate to **Domains**.
2. Add your custom subdomain, e.g., `portarthur.runthetable.app`.
3. The platform will output DNS records (a CNAME pointing to `cname.vercel-dns.com` or equivalent Netlify server).
4. Log into your domain provider (e.g. Cloudflare) and add the CNAME record for the subdomain.
5. SSL certificates are generated automatically in under 5 minutes.

---

## 🤖 Automating Updates with the Hermes Agent

This repository is built for frictionless automated updates. Because the website parses its menu and schedule dynamically from static structured JSON databases, your **Hermes Agent** can easily run updates in real time without touching frontend code!

### Live Use Case Workflow:
1. **Request a Change**: Ask your Hermes Agent to edit a menu item (e.g., *"Change Toast Skagen full price to 215"* or *"Add a new craft tap 'Lindholmen IPA' for 89"*).
2. **Hermes Modifies Data**: The Hermes Agent locates `/src/data/menu.json` and updates the values in the JSON structure.
3. **Hermes Commits & Pushes**:
   ```bash
   git add src/data/menu.json
   git commit -m "chore(menu): update items via Hermes Agent"
   git push origin main
   ```
4. **Live Deployment**: The Vercel/Netlify webhook receives the push, automatically triggers `npm run build`, and redeploys the live site under `portarthur.runthetable.app` in less than 30 seconds!
