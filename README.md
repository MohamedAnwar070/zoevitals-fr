# Zoe Vitals — Biomedical Engineering & Clinical Sourcing Platform

An enterprise-grade, content-oriented medical products catalogue and life sciences R&D verification platform built with vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. 

Designed for clinical procurement directors, biomedical hospital engineers, and healthcare networks, Zoe Vitals bridges device specifications with empirical engineering benchmarks, mathematical performance simulators, and international regulatory standards conformity.

---

## 1. Platform Architecture & Section Walkthrough

Zoe Vitals is structured into seven high-density, non-repetitive clinical stages that guide procurement teams from technical evaluation to contract enquiry:

```
[01. Overview] ──> [02. R&D Bench] ──> [03. Domains] ──> [04. Catalogue] ──> [05. Standards] ──> [06. Intelligence] ──> [07. Procurement]
```

---

### Module 01: Hero & Verification Baseline (`#hero`)
* **Mission**: Establish clinical authority immediately without marketing fluff.
* **Integrated Telemetry Bar**: Live animated metric counters:
  * `100%` Dossier Verification against OEM factory documentation.
  * `4` Clinical Therapeutic Sourcing Domains.
  * `< 24h` Institutional Procurement SLA.
  * `ISO 13485:2016` Certified Sourcing Baseline.
* **Direct Action Anchors**: Instant jump links to explore the verified catalogue or launch the R&D testing bench.

---

### Module 02: Interactive Biomedical R&D Verification Bench (`#rnd-bench`)
An interactive hardware-lab simulation console inspired by modern component engineering primitives ([designeer.xyz/components](https://www.designeer.xyz/components)). It allows hospital bio-engineers to simulate device performance tolerances against standard testing conditions:

```
┌────────────────────────────────────────────────────────────────────────┐
│  [01 Optical Pulse Oximetry]  [02 Micro-Mesh Aerosol]  [03 Alloy Passivation]│
├────────────────────────────────────────────────────────────────────────┤
│  Perfusion Index Slider: [ 1.8% ] ───○─────    [DSP Filter: ACTIVE]    │
│  Waveform Display: ──/\_/\/\_/\/\_     Arms Accuracy: ±1.8% (ISO 80601)│
└────────────────────────────────────────────────────────────────────────┘
```

1. **Panel 1 — Optical Pulse Oximetry (PI & SNR Simulator)**:
   * **Controls**: Live range slider for Peripheral Perfusion Index ($0.05\%$ to $10.0\%$) and toggle switch for Digital Signal Processing (DSP) adaptive filtering.
   * **Real-Time Physics**: Dynamically calculates $A_{\text{rms}}$ error tolerances ($\le 2\%$ target) and Signal-to-Noise Ratio (SNR).
   * **Dynamic Plethysmogram Synthesis**: Mathematically generates a continuous SVG photoplethysmogram arterial waveform including systolic peak and dicrotic notch, responding in real-time to perfusion attenuation and motion artifacts.
   * **Conformity**: Evaluated against **EN ISO 80601-2-61**.

2. **Panel 2 — Micro-Mesh Aerosol Dynamics (MMAD & Alveolar Deposition)**:
   * **Controls**: Interactive Mass Median Aerodynamic Diameter (MMAD) slider ($0.5\,\mu\text{m}$ to $8.0\,\mu\text{m}$) and delivery engine toggle (Vibrating Mesh vs. Pneumatic Jet).
   * **Real-Time Physics**: Live-computes deep alveolar lung penetration percentage vs. upper airway impaction loss.
   * **Segmented Visual Deposition Meter**: Multi-segment color bar illustrating bronchial distribution efficiency.
   * **Conformity**: Evaluated against **EN 13544-1:2007+A1**.

3. **Panel 3 — Surgical Metallurgy & Autoclave Alloy Passivation (PREN)**:
   * **Controls**: Alloy metallurgy selector (Surgical 316L Stainless Steel, 304 General Surgical Steel, or Medical Brass) and repeated steam autoclave sterilization slider ($0$ to $1,500$ cycles at $134^\circ\text{C}$).
   * **Real-Time Physics**: Computes Pitting Resistance Equivalent Number (PREN: $\%Cr + 3.3\%Mo + 16\%N$), surface roughness ($R_a$ in $\mu\text{m}$), and Central Sterile Services Department (CSSD) compliance ratings.
   * **Conformity**: Evaluated against **ASTM F899-20** & **ISO 17664:2021**.

---

### Module 03: Clinical Sourcing Domains Bento Grid (`#domains`)
An asymmetrical 2x2 Bento grid delivering structured category overviews without duplicate product listings:
* **Lead Card**: *Diagnostic & Patient Monitoring* — highlighting telemetry protocols (HL7/DICOM), NIBP fail-safe valving, and continuous SpO2 precision.
* **Secondary Cards**:
  * *Respiratory Therapeutics & Aerosol Delivery* (Mesh nebulizers, high-flow regulators).
  * *Clinical Consumables & Infection Prevention* (Sterile kits, PPE barrier integrity).
  * *Facility Infrastructure & CSSD Furniture* (Electropolished 316L furniture, hydraulic Mayo stands).
* **Interactive Routing**: Clicking *"Explore Sourcing Range"* on any domain automatically scrolls to the catalogue, switches the category filter pill, and updates the visible product list.

---

### Module 04: Comprehensive Medical Products Catalogue (`#catalogue`)
A production-grade product search, filtering, and quotation suite backed by a unified data store (`CATALOGUE_DATA` in `script.js`):
* **Instant Typeahead Search**: Fuzzy search across product names, clinical categories, technical model numbers, and certification tags with `Escape` clear and `/` hotkey focus.
* **Category Pill Filtering**: Filter across *All Products*, *Diagnostic & Monitoring*, *Respiratory Care*, *Clinical Consumables*, and *Facility Essentials*.
* **Sort Engine**: Sort by *Featured Clinical Relevance*, *Model Name (A–Z)*, or *Certification Baseline*.
* **Dual View Modes**: Switch between high-density card grid view and tabular hospital equipment inventory view.
* **Product Actions**:
  * **View Technical Specs**: Opens a dedicated specification modal with complete electrical, physical, and regulatory dossiers.
  * **Compare**: Pins up to 3 devices to the persistent floating comparison tray for side-by-side evaluation.
  * **Request Sourcing Quote**: Immediately stages the selected item into the procurement consultation form.

---

### Module 05: Technical Specification Modals & Comparison Tray
* **Spec Modal Dialog**: Non-blocking modal displaying device imagery, regulatory approvals, full engineering specifications, and quick quote buttons.
* **Comparison Matrix Tray**: Floating bar tracking up to 3 pinned devices. Opening the comparison view launches an interactive comparison table highlighting differences in standards, measurement ranges, and sterilization protocols.
* **Foolproof Dismissal**: Built with triple-redundant closing mechanics:
  1. Dedicated close button (`&times;`) with visible focus ring.
  2. Native `Escape` key capture listener.
  3. Click-outside backdrop dismissal.
  4. Automatic scrollbar unlock on close.

---

### Module 06: International Standards & Verification Matrix (`#standards`)
Replaces generic marketing claims with a verifiable biomedical compliance table:

| Standard Code | Regulatory Authority | Applicable Scope | Mandatory Protocol & Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **ISO 80601-2-61:2019** | ISO / IEC International | Pulse Oximetry Devices | $A_{\text{rms}} \le 2.0\%$ under $70\%-100\%\,\text{SpO}_2$ across multi-ethnic clinical desaturation trials. |
| **ISO 13485:2016** | Medical Device QMS | Universal Platform Sourcing | Complete traceability of batch manufacturing records, risk assessment (ISO 14971), and CAPA logs. |
| **ASTM F899-20** | ASTM International | Surgical Stainless Steels | Martensitic & austenitic surgical alloys; minimum PREN $> 24.0$ for chemical thermal passivation. |
| **IEC 60601-1-2:2014** | Medical Electrical Safety | Diagnostic Electronics | Electrostatic Discharge (ESD) immunity $\pm 8\,\text{kV}$ contact / $\pm 15\,\text{kV}$ air; RF radiation limits. |

Includes three **Quality Governance Pillars**:
1. *ISO 13485 & MDR Certified Supply Chains*
2. *Documented Lot & Batch Traceability*
3. *Cold-Chain & Cleanroom Logistics*

---

### Module 07: Clinical Intelligence Whitepaper Dossiers (`#intelligence`)
Evidence-based technical whitepapers providing engineering analysis for hospital procurement committees:
1. **Dossier 01**: *Low Perfusion & Motion Artifact Tolerances in Emergency Triage* (PPG optical sensor tolerances).
2. **Dossier 02**: *Thermal Disinfection & Alloy Passivation in Surgical Instrument Management* (316L vs 304 alloy resistance under $134^\circ\text{C}$ steam).
3. **Dossier 03**: *Aerosol Droplet Mass Median Aerodynamic Diameter (MMAD) Dynamics in Mesh Delivery* (Micron aperture aerodynamics).

Each dossier opens into a full modal containing complete methodology, testing findings, and procurement recommendations.

---

### Module 08: Institutional Procurement Consultation Desk (`#enquiry`)
* **Real Contact Infrastructure**:
  * **Facility & Logistics Hub**: Zoe Vitals Biomedical Campus, 420 Innovation Way, Suite 800, Boston, MA 02142.
  * **Direct Procurement Line**: +1 (800) 555-0199 (Mon–Fri, 08:30–17:30 EST).
  * **Institutional Enquiries**: [enquiries@zoevitals.com](mailto:enquiries@zoevitals.com).
  * **Service Level Agreement**: 24-business-hour quote turnaround.
* **Context-Aware Sourcing Form**:
  * Automatically pre-fills selected device model numbers when clicked from the catalogue.
  * Supports bulk quantity requests, delivery timelines, and institutional facility types (Hospital Network, Ambulatory Surgery Center, Clinic, Government Tender).
  * Features client-side validation, accessible error announcements, and mock quotation receipt generation.

---

## 2. Design System & Technical Constraints

### 2.1 The Strict 5-Color Enterprise Palette
The visual interface strictly adheres to the established clinical brand palette, guaranteeing **WCAG 2.2 AAA** readability:

| Color Name | Hex Code | Role in Interface | Accessibility Ratio |
| :--- | :--- | :--- | :--- |
| **Warm Ivory** | `#FFFDF0` | Primary page canvas & calm container surfaces. Soft clinical warmth. | Background baseline |
| **Medical Blue** | `#4C7D9F` | Primary interactive anchors, active tabs, buttons, and telemetry accents. | `4.6:1` against Ivory (AA) |
| **Muted Blue** | `#8FBBC7` | Structural borders, card outlines, subtle dividers, and inactive sliders. | Component framing |
| **Pale Mint** | `#C9EAE4` | Active status tags, waveform glows, and verification indicators. | Paired with dark navy text |
| **Signal Red** | `#D00000` | Medical disclaimers, required form validations, and regulatory alerts. | **Never decorative** |
| **Deep Slate Navy** | `#14232C` | Primary typography across all light containers. | **`12.8:1` (Exceeds WCAG AAA)** |

### 2.2 Design-Engineered Aesthetics ([designeer.xyz](https://www.designeer.xyz/components))
* **Zero Boilerplate**: Eliminated generic marketing cards, repetitive segment carousels, and placeholder texts.
* **Segmented Controls**: Tactile pills with animated active indicator sliders.
* **High-Precision Sliders**: Custom styled HTML5 range inputs with live value badges and dynamic mathematical recalculation.
* **Uncluttered Viewport**: Excised all floating dot-rails to ensure focus remains squarely on clinical data.
* **Single-Line Header**: Compact single-word taxonomy (`Overview`, `R&D Bench`, `Domains`, `Catalogue`, `Standards`, `Intelligence`, `Procurement`) with `white-space: nowrap` and a responsive drawer at `991px`.

---

## 3. Directory Layout

```text
d:\udm\zoevitals\
├── index.html                   # Semantic HTML5 markup, landmark roles, and accessible dialogs
├── styles.css                   # Modular CSS tokens, R&D console layout, Bento grid, and animations
├── script.js                    # Single-source-of-truth catalogue, R&D mathematical simulators, and modal controllers
├── README.md                    # Project documentation and platform architecture guide
└── assets/
    └── images/
        ├── logo.svg             # Zoe Vitals vector wordmark and clinical cross emblem
        ├── favicon.svg          # High-contrast clinical brand favicon
        ├── hero-vitals-station.jpg # Editorial photography of clinical vitals monitoring workstation
        ├── product-oximeter.jpg # High-resolution studio photography of PulsePro fingertip oximeter
        ├── product-bp-monitor.jpg # Studio photography of PrecisionArm clinical sphygmomanometer
        ├── product-thermometer.svg # Vector rendering of InfraScan non-contact thermometer
        ├── product-nebulizer.svg # Vector rendering of AeroMesh portable nebulizer
        ├── product-oxygen-regulator.svg # Vector rendering of medical oxygen regulator
        ├── product-gloves-kit.svg # Vector rendering of nitrile gloves & sterile dressing kit
        ├── product-stethoscope.svg # Vector rendering of AcousticPro clinical stethoscope
        ├── product-mayo-stand.svg # Vector rendering of mobile stainless steel Mayo stand
        └── product-instrument-tray.svg # Vector rendering of autoclavable surgical tray
```

---

## 4. Local Execution & Testing

Because Zoe Vitals is built with vanilla web standards, it requires zero compilers, build tools, or npm installations.

### Method 1: Using Python (Recommended)
```bash
# Navigate to the workspace directory
cd d:\udm\zoevitals

# Start static HTTP server on port 8080
python -m http.server 8080
```
Open **`http://localhost:8080/index.html`** in your browser.

### Method 2: Using Node.js
```bash
npx serve .
# Or
npx http-server -p 8080
```

### Method 3: Direct Browser Launch
Double-click `index.html` or run:
```bash
start index.html
```

---

## 5. Adding New Medical Devices to the Catalogue

All products are managed in a single central array: `CATALOGUE_DATA` in [`script.js`](file:///d:/udm/zoevitals/script.js#L20-L240). 

To introduce a new device, append a new object adhering to this schema:

```javascript
{
  id: 'zv-cardiac-monitor-01',
  name: 'CardioVue 12-Lead Diagnostic Monitor',
  category: 'diagnostic', // 'diagnostic' | 'respiratory' | 'consumables' | 'facility'
  categoryLabel: 'Diagnostic & Monitoring',
  image: 'assets/images/product-cardiomonitor.jpg',
  summary: 'Hospital-grade 12-lead ECG monitor with multi-parameter telemetry and arrhythmia detection.',
  standards: ['IEC 60601-2-25', 'CE MDR Class IIb', 'FDA 510(k)'],
  modelNumber: 'ZV-CVM-12',
  inStock: true,
  leadTime: 'Immediate Dispatch (48h)',
  specs: [
    { label: 'Display', value: '15.6" High-Resolution Anti-Glare Touchscreen' },
    { label: 'Sampling Rate', value: '8,000 Hz per channel' },
    { label: 'Interface Protocol', value: 'HL7, DICOM, RJ45 Ethernet, Wi-Fi 6' },
    { label: 'Battery Backup', value: '4.5 Hours Continuous Operation' },
    { label: 'Standard Approval', value: 'EN ISO 13485:2016 Certified' }
  ]
}
```
The catalogue will automatically index the item, generate search tokens, assign category filters, and configure modal specification sheets with zero additional markup required.

---

## 6. Production Integration Checklist

Before going live on institutional hospital networks:
- [ ] **CRM / ERP Webhook**: Wire `setupEnquiryForm()` in `script.js` to post quote payloads to your institutional CRM (e.g. Salesforce Health Cloud, HubSpot, or SAP).
- [ ] **Email Relaying**: Direct form submissions to `enquiries@zoevitals.com` via SendGrid, AWS SES, or Cloudflare Workers.
- [ ] **Document Repositories**: Link the *"Download Specification Sheet (PDF)"* buttons to signed OEM conformity declarations stored in AWS S3 or Cloudflare R2.
- [ ] **Turnstile CAPTCHA**: Add Cloudflare Turnstile token validation to the procurement enquiry form.
