# Zoe Vitals — Medical Products Catalogue & Clinical Sourcing Platform

An enterprise-grade, thoughtfully art-directed medical products catalogue and life sciences sourcing platform built with vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. 

Inspired by global life sciences leaders like **IQVIA**, Zoe Vitals connects human health, medical precision, and sourcing intelligence through structured biomedical cataloguing, peak-level scroll animations, interactive clinical segment explorers, and side-by-side specification matrices.

---

## 1. Design Concept & IQVIA-Inspired Architecture

### 1.1 Strict 5-Color Brand Palette Implementation
The visual system is built strictly on the specified brand palette, extended only with accessible neutral shades to guarantee **WCAG 2.2 AA / AAA contrast compliance**:
* **Warm Ivory (`#FFFDF0`)**: Primary canvas/background for the body and calm container sections. Creates a human, warm, clinical feel that avoids the sterile, harsh white of typical tech templates.
* **Primary Medical Blue (`#4C7D9F`)**: Used deliberately for primary navigation anchors, active category filter tabs, primary CTA buttons (`btn--primary`), and modal action triggers.
* **Muted Blue (`#8FBBC7`)**: Subtle structural borders, secondary container surfaces (`#EDF5F7`), table divider lines, and card framing.
* **Pale Mint (`#C9EAE4`)**: Reserved for highlight indicators, status chips (`badge--sample`), and notice banners. Always paired with dark high-contrast green (`#0B4640`) for text readability.
* **Alert Red (`#D00000`)**: Strictly reserved for genuine medical disclaimers, required form validation states, and regulatory caution callouts. **Never used as arbitrary decoration.**

To guarantee razor-sharp readability on the `#FFFDF0` ivory background, body copy is set in **Deep Slate Navy (`#14232C`)**, providing a **`12.8:1`** contrast ratio exceeding WCAG AAA standards.

### 1.2 IQVIA Benchmark: Life Sciences Enterprise Presence
Studying **[IQVIA](https://www.iqvia.com/)**'s global benchmark (*"Transforming Life Sciences with Data, Technology & Human Science"*), Zoe Vitals translates those enterprise strengths into our own unique identity:
* **Positioning**: *"Connecting Human Health, Medical Precision & Sourcing Intelligence."*
* **Enterprise Sourcing Impact Bar**: High-impact metrics bar displaying:
  * `100%` Dossier Verification Rate
  * `4` Core Clinical Therapeutic Domains
  * `< 24h` Institutional Sourcing SLA
  * `ISO 13485` Sourcing Compliance Baseline
* **Clinical Capabilities by Healthcare Segment**: Interactive segment explorer covering:
  1. *Hospital Networks & Inpatient Wards*
  2. *Surgical Suites & Day Procedure Bays*
  3. *Primary Care & Ambulatory Clinics*
  4. *Emergency Services & Field Logistics*
* **Clinical Intelligence & Whitepapers (IQVIA Insights Architecture)**:
  * *Dossier 01: Low Perfusion & Motion Artifact Tolerances in Emergency Triage*
  * *Dossier 02: Thermal Disinfection & Alloy Passivation in Surgical Instrument Management*
  * *Dossier 03: Aerosol Droplet Mass Median Aerodynamic Diameter (MMAD) Dynamics in Mesh Delivery*
* **Side-by-Side Equipment Analysis Matrix**: Interactive compare tray allowing users to pin up to 3 products and open a comprehensive specification comparison matrix.

---

## 2. Peak-Level Scroll Animation Engine

1. **Reactive Hairline Scroll Progress Bar**: An ultra-thin indicator at the very top of the viewport scaling smoothly (`scaleX(0)` to `scaleX(1)`) tracking precise document scroll position.
2. **IntersectionObserver Scroll Reveals**:
   * Staggered fade-up (`[data-reveal="fade-up"]`) with cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
   * Clean scale-ins (`[data-reveal="scale"]`) and directional slides (`slide-left`, `slide-right`).
   * Cascading delays (`--card-delay`) ensuring cards cascade gracefully into the viewport.
3. **Animated Numerical Counters**:
   * Target metrics smoothly count up from zero using an ease-out cubic curve when scrolled into view.
4. **Floating Quick-Jump Side Rail (Desktop Navigator)**:
   * Fixed right-hand navigation rail with interactive dot beacons representing each page section (01 Overview, 02 Impact, 03 Segments, 04 Catalogue, 05 Standards, 06 Intelligence, 07 Enquiries).
   * Active section spy lights up the current milestone as the user scrolls.
   * Hover reveals editorial tooltip pills.
5. **Micro-Perspective 3D Physics Tilt**:
   * Hardware-accelerated 3D tilt tracking cursor coordinates on cards with perspective (`perspective(1000px) rotateX(...) rotateY(...)`) and specular reflection.
6. **Motion Accessibility**:
   * Full `@media (prefers-reduced-motion: reduce)` support instantly disables all non-essential transforms and transitions.

---

## 3. Directory Structure

```text
d:\udm\zoevitals\
├── index.html                   # Semantic HTML5 page structure and accessible landmark markup
├── styles.css                   # Modular CSS design system tokens, layout grid, and responsive rules
├── script.js                    # Single-source-of-truth catalogue data, search, filter, and modal logic
├── README.md                    # Project documentation, handover notes, and integration checklist
└── assets/
    └── images/
        ├── logo.svg             # Zoe Vitals primary vector wordmark and clinical emblem
        ├── favicon.svg          # High-contrast clinical brand favicon
        ├── hero-vitals-station.jpg # Editorial photography of clinical vitals monitoring workstation
        ├── product-oximeter.jpg # Studio product photography of PulsePro fingertip oximeter
        ├── product-bp-monitor.jpg # Studio product photography of PrecisionArm sphygmomanometer
        ├── product-thermometer.svg # Technical vector rendering of InfraScan non-contact thermometer
        ├── product-nebulizer.svg # Technical vector rendering of AeroMesh portable nebulizer
        ├── product-oxygen-regulator.svg # Technical vector rendering of medical oxygen regulator
        ├── product-gloves-kit.svg # Technical vector rendering of nitrile gloves & sterile dressing kit
        ├── product-stethoscope.svg # Technical vector rendering of AcousticPro clinical stethoscope
        ├── product-mayo-stand.svg # Technical vector rendering of mobile stainless steel Mayo stand
        └── product-instrument-tray.svg # Technical vector rendering of autoclavable surgical tray
```

---

## 4. Instructions for Running Locally

Because this project uses vanilla web standards (HTML5, CSS3, ES6 JavaScript) and local relative assets, no build tools, compilers, or package installations are required.

### Option A: Using Python (Recommended)
Open a terminal in the project directory and run:
```bash
python -m http.server 8080
```
Open your browser and navigate to **`http://localhost:8080`**.

### Option B: Using Node.js
```bash
npx serve .
# Or
npx http-server -p 8080
```

### Option C: Direct Browser Opening
Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari):
```bash
start index.html
```

---

## 5. Client Information & Production Integrations Checklist

Before launching Zoe Vitals to a live production environment, the following client-supplied assets and integrations must be completed:

### A. Business Information & Identity
- [ ] **Official Company Registration**: Replace placeholder text in About section with verified company legal name, jurisdiction, registration number, and founding history.
- [ ] **Leadership & Clinical Team**: Replace the placeholder cards (`[Name Pending Confirmation]`) with verified executive names, clinical credentials, professional headshots, and biographies.
- [ ] **Physical Facilities**: Update the logistics hub address with the confirmed facility, warehouse, or showroom address.
- [ ] **Direct Contact Channels**: Replace `enquiries@zoevitals.example.com` and `+1 (800) 555-0199` with confirmed client email inboxes and phone numbers.

### B. Product Inventory & Regulatory Approvals
- [ ] **Certified Inventory Audit**: Replace demo catalogue entries (`CATALOGUE_DATA` in `script.js`) with confirmed in-stock or procurable inventory.
- [ ] **Regulatory Filings**: Validate that all CE, FDA, ISO, or local health authority certifications cited on each product card correspond directly to manufacturer documentation.
- [ ] **Commercial Pricing / Quotes**: If prices or MOQ (Minimum Order Quantities) are introduced in the future, add structured fields to `CATALOGUE_DATA`.

### C. Backend & Form Handlers
- [ ] **Enquiry Submission Endpoint**: In `script.js` (inside `setupEnquiryForm`), connect the form submission handler to the client's CRM (HubSpot, Salesforce) or backend email webhook:
  ```javascript
  const response = await fetch('https://api.zoevitals.com/v1/procurement-enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  ```
- [ ] **Spam Protection**: Implement backend CAPTCHA (e.g. Cloudflare Turnstile) on the enquiry form.
- [ ] **Privacy Policy & Terms of Supply**: Link the legal links in the footer to official legal documents drafted by client counsel.
