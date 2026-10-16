/**
 * Zoe Vitals — Medical Products Catalogue & Clinical Sourcing Platform
 * Frontend Architecture: Vanilla ES6+ JavaScript
 * 
 * Features & Interactive Modules:
 * 1. Single Source of Truth: Catalogue Data (10 verified medical products)
 * 2. Peak-Level Scroll Animation Engine (IntersectionObserver, Staggered Reveals, Scroll Progress Bar)
 * 3. Animated Numerical Metric Counters with Cubic-Bezier Easing
 * 4. Active Section Spy (Syncing Navigation and Floating Quick-Jump Rail)
 * 5. IQVIA-Inspired Clinical Capabilities & Healthcare Segment Explorer
 * 6. Product Catalogue Engine: Live Search, Category Filtering, Multi-Param Sorting
 * 7. Side-by-Side Product Comparison Tray & Matrix Modal
 * 8. Clinical Intelligence & Regulatory Whitepaper Dossier Modal
 * 9. Accessible Product Details Modal (Focus Trap, Esc dismissal, deep linking)
 * 10. Direct Enquiry Pre-Population Hook
 * 11. Client-Side Form Validation & Honest Submission Demo State
 * 12. Micro-Perspective 3D Physics Card Hover Interaction
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CATALOGUE DATA (Single Source of Truth)
     ========================================================================== */
  const CATALOGUE_DATA = [
    {
      id: 'ZV-OXM-201',
      name: 'PulsePro Digital Fingertip Pulse Oximeter',
      category: 'Diagnostic & Monitoring',
      partner: 'Zoe Vitals Diagnostic Series (Sample)',
      shortDesc: 'Dual-colour OLED spot-check monitor for arterial oxygen saturation (SpO2) and pulse rate with plethysmographic waveform display.',
      fullDesc: 'The PulsePro Digital Pulse Oximeter provides fast, non-invasive spot-checking of functional arterial haemoglobin oxygen saturation (SpO2) and pulse rate in clinics, outpatient wards, and triage areas. Engineered with an anti-motion algorithm, multi-directional display, and automated battery conservation.',
      specifications: {
        'Catalogue Reference': 'ZV-OXM-201',
        'SpO2 Range': '70% – 100% (Accuracy: ±2%)',
        'Pulse Rate Range': '30 – 250 bpm (Accuracy: ±2 bpm)',
        'Display Screen': '0.96-inch Dual-Color Graphic OLED',
        'Power Source': '2× 1.5V AAA Alkaline Batteries',
        'Operating Time': 'Approx. 24 continuous hours',
        'Ingress Protection': 'IP22 (Drip-proof)',
        'Reference Standard': 'EN ISO 80601-2-61, IEC 60601-1-2'
      },
      intendedUse: 'Non-invasive spot-checking of SpO2 and pulse rate for adult and paediatric patients (>15 kg) under clinical or institutional oversight.',
      image: 'assets/images/product-oximeter.jpg',
      badge: 'Clinical Spot-Check',
      isDemo: true
    },
    {
      id: 'ZV-BPM-400',
      name: 'PrecisionArm Upper-Arm Digital Sphygmomanometer',
      category: 'Diagnostic & Monitoring',
      partner: 'Zoe Vitals Diagnostic Series (Sample)',
      shortDesc: 'Oscillometric digital blood pressure monitor with contour cuff, pulse arrhythmia detection, and dual-user memory.',
      fullDesc: 'A high-precision oscillometric blood pressure monitor designed for outpatient consultation rooms and hospital intake. Features automatic controlled cuff inflation to minimise patient discomfort, cuff-wrap sensor confirmation, and irregular heartbeat tracking during inflation.',
      specifications: {
        'Catalogue Reference': 'ZV-BPM-400',
        'Pressure Range': '0 – 299 mmHg (Accuracy: ±3 mmHg)',
        'Pulse Range': '40 – 180 beats/min (Accuracy: ±5%)',
        'Cuff Circumference': '22 – 42 cm (Wide-range ergonomic cuff)',
        'Memory Capacity': '2× 100 readings with date & timestamp',
        'Power Supply': '4× AA Alkaline Batteries or Optional 6V DC Mains',
        'Weight': 'Approx. 340 g (excluding batteries)',
        'Reference Standard': 'AAMI/ANSI/ISO 81060-2 Clinical Validation'
      },
      intendedUse: 'Non-invasive blood pressure and pulse rate assessment for adult clinical populations.',
      image: 'assets/images/product-bp-monitor.jpg',
      badge: 'Clinically Validated',
      isDemo: true
    },
    {
      id: 'ZV-VTS-900',
      name: 'OmniVue Multi-Parameter Vital Signs Patient Station',
      category: 'Diagnostic & Monitoring',
      partner: 'Zoe Vitals Clinical Series (Sample)',
      shortDesc: 'Modular 12.1-inch high-resolution bedside monitor supporting ECG, NIBP, SpO2, Resp, and 2-channel temperature.',
      fullDesc: 'The OmniVue Patient Monitor is an institutional bedside monitoring system offering continuous multi-parameter physiological surveillance for sub-acute wards, recovery suites, and emergency observation. Built with fanless silent thermal architecture, configurable visual and acoustic alarms, and HL7 electronic health record export capability.',
      specifications: {
        'Catalogue Reference': 'ZV-VTS-900',
        'Display': '12.1" Anti-glare Color TFT-LCD (800 × 600)',
        'Monitored Parameters': '3/5-Lead ECG, NIBP, SpO2, PR, Respiration, Temp',
        'Alarm System': '3-Level Visual & Acoustic Configurable Limits',
        'Battery Backup': 'Rechargeable Li-ion (Up to 4.5 hrs runtime)',
        'Data Connectivity': 'RJ45 Ethernet, HL7 Protocol, USB Export',
        'Mounting Interface': 'VESA 75/100 Wall Arm and Mobile Cart',
        'Reference Standard': 'IEC 60601-1, IEC 60601-2-27, IEC 60601-2-49'
      },
      intendedUse: 'Continuous or intermittent vital signs surveillance in hospitals, surgical recovery, and intensive care step-down units.',
      image: 'assets/images/hero-vitals-station.jpg',
      badge: 'Institutional Ward System',
      isDemo: true
    },
    {
      id: 'ZV-IR-310',
      name: 'InfraScan Non-Contact Clinical Forehead Thermometer',
      category: 'Diagnostic & Monitoring',
      partner: 'Zoe Vitals Diagnostic Series (Sample)',
      shortDesc: 'Medical-grade infrared sensor offering rapid sub-second temperature measurement without mucosal contact.',
      fullDesc: 'Engineered for high-throughput triage and infection-control intake stations, the InfraScan 310 features an active ambient temperature compensation algorithm and laser-guided distance sensor (1–5 cm distance) to ensure repeatable forehead readings in seconds.',
      specifications: {
        'Catalogue Reference': 'ZV-IR-310',
        'Measuring Distance': '1 – 5 cm non-contact',
        'Measurement Time': '≤ 0.8 seconds',
        'Clinical Range': '34.0°C – 43.0°C (Accuracy: ±0.2°C)',
        'Surface Mode Range': '0.0°C – 100.0°C',
        'Backlight Display': '3-Color Temperature Alert Display (Green/Amber/Red)',
        'Memory': '32 historical readings',
        'Auto Power Off': '15 seconds idle'
      },
      intendedUse: 'Non-contact clinical body temperature screening in hospital triage, day surgeries, schools, and care homes.',
      image: 'assets/images/product-thermometer.svg',
      badge: 'Sub-Second Triage',
      isDemo: true
    },
    {
      id: 'ZV-NEB-150',
      name: 'AeroMesh Ultrasonic Portable Mesh Nebulizer',
      category: 'Respiratory Care',
      partner: 'Zoe Vitals Respiratory Series (Sample)',
      shortDesc: 'Vibrating mesh drug delivery system generating consistent respirable aerosol droplets with whisper-quiet operation.',
      fullDesc: 'The AeroMesh 150 utilizes high-frequency micro-perforated mesh technology to atomize liquid medications without heating or altering chemical composition. Ultra-compact, pocket-sized, and operating at below 25 dBA, it ensures effective alveolar deposition for respiratory therapies.',
      specifications: {
        'Catalogue Reference': 'ZV-NEB-150',
        'Nebulization Rate': '≥ 0.25 mL/min',
        'Median Particle Size (MMAD)': '2.5 – 4.0 μm respirable fraction',
        'Medication Cup Volume': 'Maximum 10 mL (0.5 mL residual)',
        'Operating Frequency': 'Approx. 110 kHz ± 10%',
        'Noise Output': '< 25 dBA (Whisper quiet)',
        'Power Source': 'Internal Li-ion (USB-C Rechargeable) or 2× AA',
        'Weight': 'Approx. 102 g (without medication)'
      },
      intendedUse: 'Delivery of physician-prescribed aerosol medications to respiratory tracts of pediatric and adult patients.',
      image: 'assets/images/product-nebulizer.svg',
      badge: 'Respirable MMAD < 4μm',
      isDemo: true
    },
    {
      id: 'ZV-O2R-080',
      name: 'Dual-Stage Medical Oxygen Flowmeter & Regulator',
      category: 'Respiratory Care',
      partner: 'Zoe Vitals Respiratory Series (Sample)',
      shortDesc: 'Chrome-plated brass medical oxygen cylinder regulator with calibrated flow tube and safety relief valve.',
      fullDesc: 'Forged from high-tensile chrome-plated brass, the ZV-O2R-080 provides precise gas pressure reduction from high-pressure hospital oxygen cylinders down to stable therapeutic delivery flows. Fitted with a shatterproof polycarbonate flowmeter and sintered bronze inlet filter.',
      specifications: {
        'Catalogue Reference': 'ZV-O2R-080',
        'Inlet Connection': 'BS 341 No. 3 / Pin-Index Bullnose fitting',
        'Maximum Inlet Pressure': '200 Bar (3000 PSI)',
        'Calibrated Flow Range': '0 – 15 Litres/min (Graduated scale)',
        'Body Construction': 'Dezincification-Resistant Chrome-Plated Brass',
        'Safety Relief Setting': 'Pre-set at 4.2 Bar ± 0.3 Bar',
        'Flow Tube': 'Shatter-resistant polycarbonate with steel float',
        'Reference Standard': 'EN ISO 10524-1, CGA V-1'
      },
      intendedUse: 'Therapeutic oxygen regulation and flow control from medical gas cylinders in emergency wards and ambulances.',
      image: 'assets/images/product-oxygen-regulator.svg',
      badge: 'High-Tensile Brass',
      isDemo: true
    },
    {
      id: 'ZV-NTR-500',
      name: 'Nitrile Exam Gloves & Sterile Dressing Kit',
      category: 'Clinical Consumables',
      partner: 'Zoe Vitals Care Essentials (Sample)',
      shortDesc: 'Powder-free textured medical examination gloves paired with an ethylene-oxide sterilized basic wound care procedure pack.',
      fullDesc: 'A clinical consumables combination designed for routine examination, blood draws, and minor dressing changes. Nitrile gloves provide high barrier protection against pathogens and common chemicals without natural rubber latex proteins. The accompanying dressing pack is sterile-sealed in tamper-evident peel pouches.',
      specifications: {
        'Catalogue Reference': 'ZV-NTR-500',
        'Material': '100% Synthetic Nitrile (Latex-Free, Powder-Free)',
        'Glove Quality Level': 'AQL 1.5 Clinical Standard, EN 455 Parts 1–4',
        'Kit Contents': '5× Gauze Swabs (7.5×7.5cm), 1× Forceps, 1× Field Drape',
        'Sterilisation Method': 'Ethylene Oxide (EO) with chemical indicator',
        'Packaging': 'Dispenser box of 100 gloves + 10 individual dressing kits',
        'Shelf Life': '5 years from sterilization date'
      },
      intendedUse: 'General clinical examination, biological specimen handling, and aseptic minor wound dressing.',
      image: 'assets/images/product-gloves-kit.svg',
      badge: 'AQL 1.5 Standard',
      isDemo: true
    },
    {
      id: 'ZV-STH-220',
      name: 'AcousticPro Precision Clinical Stethoscope',
      category: 'Diagnostic & Monitoring',
      partner: 'Zoe Vitals Clinical Series (Sample)',
      shortDesc: 'Dual-frequency acoustic stethoscope with machined stainless steel chestpiece and anatomical angled headset.',
      fullDesc: 'Designed for clinicians, nurses, and medical students, the AcousticPro delivers high acoustic sensitivity across both low and high cardiovascular frequencies. The tunable diaphragm alters sound transmission with varying pressure, while dual-lumen tubing prevents external frictional noise.',
      specifications: {
        'Catalogue Reference': 'ZV-STH-220',
        'Chestpiece Material': 'Solid Machined 316L Stainless Steel',
        'Diaphragm Diameter': '44 mm (Adult) / 33 mm (Pediatric bell side)',
        'Tubing Length': '69 cm Next-Generation Resilient Polymer',
        'Headset': 'Aerospace alloy binaural with dual-leaf spring',
        'Ear Tips': 'Soft-sealing silicone (2 sizes included in pack)',
        'Non-Chill Rim': 'Hypoallergenic soft polymer rim'
      },
      intendedUse: 'Auscultation of heart, lung, bowel, and vascular acoustic signals in physical diagnostic examinations.',
      image: 'assets/images/product-stethoscope.svg',
      badge: 'Dual Tunable Diaphragm',
      isDemo: true
    },
    {
      id: 'ZV-MYO-100',
      name: 'Hydraulic Mobile Stainless Steel Mayo Stand',
      category: 'Facility & Clinic Essentials',
      partner: 'Zoe Vitals Facility Essentials (Sample)',
      shortDesc: 'Heavy-gauge 304 stainless steel instrument stand with hands-free hydraulic height foot pedal and shielded casters.',
      fullDesc: 'Built for surgical theatres, minor operating procedure rooms, and outpatient treatment bays. The cantilevered U-frame slides neatly beneath operating tables and hospital beds. Featuring an unassisted pneumatic/hydraulic pedal for smooth single-hand elevation without breaking the sterile field.',
      specifications: {
        'Catalogue Reference': 'ZV-MYO-100',
        'Tray Dimensions': '540 mm (W) × 390 mm (D) × 25 mm (Lip depth)',
        'Height Adjustment': '820 mm – 1310 mm (Foot-pump hydraulic)',
        'Frame Construction': 'Polished Grade 304 Stainless Steel (Antimicrobial)',
        'Base Footprint': 'Weighted U-base for low-profile clearance',
        'Casters': '4× 50 mm Antistatic, dual-swivel hospital grade casters',
        'Maximum Safe Load': '20 kg uniformly distributed'
      },
      intendedUse: 'Holding sterile surgical and clinical instruments adjacent to operating tables or treatment beds.',
      image: 'assets/images/product-mayo-stand.svg',
      badge: 'Grade 304 Stainless',
      isDemo: true
    },
    {
      id: 'ZV-TRF-050',
      name: 'Autoclavable Surgical Instrument Tray Set',
      category: 'Facility & Clinic Essentials',
      partner: 'Zoe Vitals Facility Essentials (Sample)',
      shortDesc: 'Deep-drawn seamless stainless steel instrument tray with perforated silicone sterilization hold-down mat.',
      fullDesc: 'Seamlessly pressed from heavy-gauge surgical stainless steel to eliminate crevice contamination and facilitate effortless chemical disinfection or steam autoclaving. Outfitted with high-temperature medical silicone retaining mat to prevent delicate surgical instruments from shifting or blunting during transport.',
      specifications: {
        'Catalogue Reference': 'ZV-TRF-050',
        'Tray Material': 'Deep-drawn 316 Surgical Grade Stainless Steel',
        'Tray Dimensions': '300 mm (L) × 200 mm (W) × 50 mm (H)',
        'Autoclave Rating': 'Steam autoclaving up to 134°C (273°F)',
        'Mat Included': 'Perforated medical silicone instrument cushioning mat',
        'Surface Finish': 'Electropolished, non-reflective satin sheen',
        'Corrosion Resistance': 'Passivated against hospital disinfectants'
      },
      intendedUse: 'Aseptic organisation, sterilization, storage, and transport of surgical, dental, and diagnostic instruments.',
      image: 'assets/images/product-instrument-tray.svg',
      badge: 'Autoclavable 134°C',
      isDemo: true
    }
  ];

  /* ==========================================================================
     2. CLINICAL INTELLIGENCE DOSSIERS (IQVIA Insights Architecture)
     ========================================================================== */
  const INTELLIGENCE_DOSSIERS = [
    {
      id: 'dossier-oximetry',
      title: 'Low Perfusion & Motion Artifact Tolerances in Emergency Triage',
      category: 'Clinical Diagnostic Intelligence',
      readTime: '6 min analysis',
      date: 'October 2026',
      summary: 'Evaluating optical photoplethysmography sensor reliability when ambient lighting fluctuations, patient peripheral vasoconstriction, or involuntary limb movement compromise SpO2 measurement precision.',
      fullContent: `
        <h4>Executive Clinical Summary</h4>
        <p>In acute hospital intake and triage environments, conventional pulse oximeters often fail to distinguish true arterial pulsatile absorption from venous blood movement caused by physical motion. This dossier outlines the multi-wavelength signal filtering parameters required for reliable critical readings.</p>
        
        <h4>Key Technical Parameters</h4>
        <ul>
          <li><strong>Signal-to-Noise Ratio (SNR):</strong> Thresholds exceeding 18 dB across weak arterial perfusion states (Perfusion Index &lt; 0.2%).</li>
          <li><strong>Wavelength Stabilization:</strong> Dual 660 nm (Red) and 905/940 nm (Infrared) calibrated emitters with automated LED intensity auto-scaling.</li>
          <li><strong>Clinical Standard Benchmark:</strong> EN ISO 80601-2-61 Clause 201.12.1 RMS accuracy thresholds under controlled motion simulators.</li>
        </ul>

        <h4>Procurement Takeaway</h4>
        <p>Institutions specifying oximetry for intensive care or emergency ambulances should mandate devices certified for low-perfusion compensation rather than basic consumer-grade pulse oximeters.</p>
      `
    },
    {
      id: 'dossier-sterilization',
      title: 'Thermal Disinfection & Alloy Passivation in Surgical Instrument Management',
      category: 'Hospital Facility Standards',
      readTime: '8 min analysis',
      date: 'September 2026',
      summary: 'Analyzing the degradation resistance of 316L and 304 surgical alloys under repeated 134°C steam autoclaving cycles and enzymatic chemical sanitization protocols.',
      fullContent: `
        <h4>Executive Clinical Summary</h4>
        <p>Repeated autoclave sterilization cycles at 134°C (2.2 bar pressure) pose significant oxidative stress on surgical trays and instrument stands. This technical paper highlights metallurgical passivation standards essential to avoid micro-pitting and microbial biofilm harbor points.</p>

        <h4>Key Technical Parameters</h4>
        <ul>
          <li><strong>Alloy Composition:</strong> Surgical Grade 316L (EN 1.4404) featuring 2–3% Molybdenum content, delivering elevated chloride corrosion resistance compared to generic 304 steels.</li>
          <li><strong>Surface Roughness (Ra):</strong> Electro-polished mirror/satin finishes maintaining Ra &lt; 0.4 µm to eliminate surface porosity.</li>
          <li><strong>Sterilization Standard:</strong> Compliance with EN 285 large steam sterilizer protocols and ISO 17665 healthcare steam moisture cycles.</li>
        </ul>

        <h4>Procurement Takeaway</h4>
        <p>Central Sterile Services Departments (CSSD) should require continuous passivated alloy certification to ensure instrument longevity across 500+ autoclave cycles.</p>
      `
    },
    {
      id: 'dossier-nebulization',
      title: 'Aerosol Droplet Mass Median Aerodynamic Diameter (MMAD) Dynamics in Mesh Delivery',
      category: 'Respiratory Therapeutics',
      readTime: '7 min analysis',
      date: 'August 2026',
      summary: 'Correlating micro-mesh aperture sizing with deep bronchial and alveolar deposition efficiency, contrasting vibrating mesh systems against traditional pneumatic jet nebulizers.',
      fullContent: `
        <h4>Executive Clinical Summary</h4>
        <p>Aerosolized respiratory therapies are governed by physical droplet diameter. Droplets exceeding 5.0 µm deposit prematurely in the oropharynx, whereas particles below 1.0 µm are exhaled without therapeutic benefit. Vibrating mesh technology achieves high respirable fraction yields (2.0–4.0 µm) with minimal residual drug loss.</p>

        <h4>Key Technical Parameters</h4>
        <ul>
          <li><strong>Aerosol Fraction:</strong> Over 65% of emitted droplet volume falling within the 1.0 µm to 5.0 µm respirable window.</li>
          <li><strong>Thermal Preservation:</strong> Ultrasonic vibration at ~110 kHz operating without thermal degradation, safeguarding heat-sensitive protein and steroid compounds.</li>
          <li><strong>Residual Volume:</strong> Dead space loss below 0.3 mL, maximizing high-cost specialized pharmacology utilization.</li>
        </ul>

        <h4>Procurement Takeaway</h4>
        <p>For pediatric and chronic pulmonary care wards, portable mesh nebulizers reduce medication wastage by up to 40% compared to pneumatic compressor systems.</p>
      `
    }
  ];

  /* ==========================================================================
     3. APP STATE & CACHED DOM
     ========================================================================== */
  const state = {
    searchQuery: '',
    selectedCategory: 'all',
    sortBy: 'default',
    lastFocusedElement: null,
    comparedProducts: new Set(),
    activeSegment: 'hospital'
  };

  const elements = {
    // Header & Navigation
    siteHeader: document.getElementById('site-header'),
    scrollProgress: document.getElementById('scroll-progress'),
    leftRail: document.getElementById('left-rail'),
    leftRailFill: document.getElementById('left-rail-fill'),
    leftRailBtns: document.querySelectorAll('.left-rail__btn'),
    mobileToggle: document.getElementById('mobile-toggle'),
    primaryNav: document.getElementById('primary-nav'),
    navSearchBtn: document.getElementById('nav-search-btn'),
    navLinks: document.querySelectorAll('.nav-link'),


    // Catalogue Controls
    searchInput: document.getElementById('catalogue-search'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    categoryFilters: document.getElementById('category-filters'),
    sortSelect: document.getElementById('catalogue-sort'),
    resultsCounter: document.getElementById('results-counter'),
    productGrid: document.getElementById('product-grid'),
    emptyState: document.getElementById('empty-state'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),

    // Comparison Drawer & Modal
    compareDrawer: document.getElementById('compare-drawer'),
    compareItemsList: document.getElementById('compare-items-list'),
    compareBtn: document.getElementById('compare-action-btn'),
    clearCompareBtn: document.getElementById('clear-compare-btn'),
    compareModal: document.getElementById('compare-modal'),
    compareModalBackdrop: document.getElementById('compare-modal-backdrop'),
    compareModalCloseBtn: document.getElementById('compare-modal-close'),
    compareModalContent: document.getElementById('compare-matrix-content'),

    // Interactive R&D Lab Bench & Bento
    rndTabs: document.querySelectorAll('.rnd-tab-btn'),
    rndPanels: document.querySelectorAll('.rnd-panel'),
    bentoFilters: document.querySelectorAll('[data-filter-category]'),

    // Product Modal
    modal: document.getElementById('product-modal'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalBody: document.getElementById('modal-body'),
    modalTitle: document.getElementById('modal-title'),

    // Intelligence Modal
    dossierModal: document.getElementById('dossier-modal'),
    dossierModalBackdrop: document.getElementById('dossier-modal-backdrop'),
    dossierModalCloseBtn: document.getElementById('dossier-modal-close'),
    dossierModalBody: document.getElementById('dossier-modal-body'),
    dossierModalTitle: document.getElementById('dossier-modal-title'),

    // Enquiry Section & Form
    enquirySection: document.getElementById('enquiry'),
    enquiryForm: document.getElementById('procurement-enquiry-form'),
    enquiryProductSelect: document.getElementById('enquiry-product'),
    selectedProductNotice: document.getElementById('selected-product-notice'),
    selectedProductName: document.getElementById('selected-product-name'),
    clearSelectedProductBtn: document.getElementById('clear-selected-product'),
    formFeedback: document.getElementById('form-feedback'),
    feedbackDetails: document.getElementById('feedback-details'),
    resetFormDemoBtn: document.getElementById('reset-form-demo-btn'),

    // Utility
    backToTopBtn: document.getElementById('back-to-top')
  };

  /* ==========================================================================
     4. INITIALIZATION
     ========================================================================== */
  function init() {
    // Ensure all modals and backdrops are clean and dismissed at start
    closeProductModal();
    closeCompareModal();
    closeDossierModal();

    populateEnquiryProductDropdown();
    setupNavigation();
    setupScrollEngine();
    setupIntersectionObserver();
    setupMetricCounters();
    setupRndBench();
    setupBentoFilters();
    setupCatalogueListeners();
    setupProductModals();
    setupCompareDrawer();
    setupIntelligenceModals();
    setupEnquiryForm();
    setupPerspectiveTilt();

    // Initial render
    renderCatalogue();

    // URL deep-link handling
    handleUrlHash();
    window.addEventListener('hashchange', handleUrlHash);
  }

  /* ==========================================================================
     5. PEAK-LEVEL SCROLL ENGINE & ACTIVE SECTION SPY
     ========================================================================== */
  function setupScrollEngine() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollMetrics();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  function updateScrollMetrics() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    // 1. Reactive Hairline Progress Bar
    if (elements.scrollProgress) {
      elements.scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;
    }

    // 1b. Base44-Aligned Left Milestone Rail Progress Line
    if (elements.leftRailFill) {
      elements.leftRailFill.style.height = `${scrollPercent}%`;
    }

    // 2. Sticky Header Elevation
    if (elements.siteHeader) {
      if (scrollY > 20) {
        elements.siteHeader.classList.add('is-scrolled');
      } else {
        elements.siteHeader.classList.remove('is-scrolled');
      }
    }

    // 3. Floating Back to Top Button
    if (elements.backToTopBtn) {
      if (scrollY > 600) {
        elements.backToTopBtn.classList.add('is-visible');
      } else {
        elements.backToTopBtn.classList.remove('is-visible');
      }
    }
  }

  /* ==========================================================================
     6. INTERSECTION OBSERVER REVEAL & SECTION SPY
     ========================================================================== */
  function setupIntersectionObserver() {
    // Reveal Elements on Scroll
    const revealTargets = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealTargets.forEach(el => revealObserver.observe(el));
    } else {
      revealTargets.forEach(el => el.classList.add('is-revealed'));
    }

    // Active Section Spy for Navigation & Base44 Left Milestone Rail
    const trackedSections = document.querySelectorAll('section[id], main > [id]');
    if ('IntersectionObserver' in window && trackedSections.length) {
      const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            updateActiveSectionIndicators(currentId);
          }
        });
      }, {
        root: null,
        threshold: 0,
        rootMargin: '-45% 0px -50% 0px'
      });

      trackedSections.forEach(sec => spyObserver.observe(sec));
    }
  }

  function updateActiveSectionIndicators(sectionId) {
    // Top Nav Link Update
    elements.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === `#${sectionId}`;
      link.classList.toggle('is-current', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    // Base44 Left Milestone Rail Update
    if (elements.leftRailBtns && elements.leftRailBtns.length) {
      elements.leftRailBtns.forEach(btn => {
        const target = btn.getAttribute('data-section');
        const isActive = target === sectionId;
        btn.classList.toggle('is-active', isActive);
        if (isActive) {
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.removeAttribute('aria-current');
        }
      });
    }
  }

  /* ==========================================================================
     7. ANIMATED METRIC COUNTERS
     ========================================================================== */
  function setupMetricCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });

      counterElements.forEach(el => counterObserver.observe(el));
    } else {
      counterElements.forEach(el => {
        el.textContent = el.getAttribute('data-counter');
      });
    }
  }

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-counter'));
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const duration = 1800; // ms
    const startTime = performance.now();
    const isDecimal = String(target).includes('.');

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic bezier
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * target;

      if (isDecimal) {
        el.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
      } else {
        el.textContent = `${prefix}${Math.round(currentVal)}${suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = `${prefix}${target}${suffix}`;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  /* ==========================================================================
     8. INTERACTIVE BIOMEDICAL R&D LAB BENCH & BENTO FILTERS
     ========================================================================== */
  function setupRndBench() {
    // 1. Tab Switching
    elements.rndTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-rnd-tab');
        if (!targetTab) return;

        elements.rndTabs.forEach(t => {
          const isActive = t === tab;
          t.classList.toggle('active', isActive);
          t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        elements.rndPanels.forEach(panel => {
          const isMatching = panel.getAttribute('data-rnd-panel') === targetTab;
          panel.classList.toggle('active', isMatching);
          if (isMatching) {
            panel.removeAttribute('hidden');
          } else {
            panel.setAttribute('hidden', 'true');
          }
        });
      });
    });

    // 2. Optical Pulse Oximetry Simulator
    const oxPiSlider = document.getElementById('rnd-ox-pi');
    const oxPiVal = document.getElementById('rnd-ox-pi-val');
    const oxFilterToggle = document.getElementById('rnd-ox-filter');
    const oxAccVal = document.getElementById('rnd-ox-accuracy');
    const oxAccStatus = document.getElementById('rnd-ox-acc-status');
    const oxSnrVal = document.getElementById('rnd-ox-snr');
    const oxSnrStatus = document.getElementById('rnd-ox-snr-status');
    const oxWaveStatus = document.getElementById('rnd-ox-wave-status');
    const oxWavePath = document.getElementById('rnd-wave-path');

    function updateOximetrySimulation() {
      if (!oxPiSlider) return;
      const pi = parseFloat(oxPiSlider.value);
      const isFilterOn = oxFilterToggle ? oxFilterToggle.checked : true;

      if (oxPiVal) oxPiVal.textContent = `${pi.toFixed(2)}%`;

      // Calculate accuracy
      let acc;
      if (isFilterOn) {
        acc = Math.max(1.1, Math.min(3.2, 1.1 + (0.12 / pi))).toFixed(1);
      } else {
        acc = Math.min(6.5, 2.6 + (0.8 / pi)).toFixed(1);
      }
      if (oxAccVal) oxAccVal.textContent = `±${acc}`;

      // Calculate SNR
      const baseSnr = 16 + (Math.log10(Math.max(0.05, pi)) * 9);
      const snr = Math.max(8.5, Math.min(32.0, isFilterOn ? baseSnr + 6 : baseSnr)).toFixed(1);
      if (oxSnrVal) oxSnrVal.textContent = snr;

      // Statuses & Waveform
      if (pi >= 1.2 && isFilterOn) {
        if (oxAccStatus) oxAccStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--green"></span> ISO 80601-2-61 Conforming';
        if (oxSnrStatus) oxSnrStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--green"></span> Robust Telemetry';
        if (oxWaveStatus) {
          oxWaveStatus.textContent = 'PULSATILE OPTIMAL';
          oxWaveStatus.style.color = 'var(--color-pale-mint)';
        }
        if (oxWavePath) {
          oxWavePath.setAttribute('d', 'M 0,30 Q 15,30 25,10 Q 35,2 45,34 Q 55,22 65,30 Q 80,30 90,30 Q 105,30 115,10 Q 125,2 135,34 Q 145,22 155,30 Q 170,30 180,30 Q 195,30 205,10 Q 215,2 225,34 Q 235,22 245,30 Q 260,30 270,30 Q 285,30 295,10 Q 305,2 315,34 Q 325,22 335,30 Q 350,30 360,30 Q 375,30 385,10 Q 395,2 400,34');
          oxWavePath.style.stroke = 'var(--color-pale-mint)';
        }
      } else if (pi >= 0.3) {
        if (oxAccStatus) oxAccStatus.innerHTML = `<span class="status-indicator-dot status-indicator-dot--amber"></span> ${isFilterOn ? 'Compensated' : 'Elevated Variance'}`;
        if (oxSnrStatus) oxSnrStatus.innerHTML = `<span class="status-indicator-dot status-indicator-dot--amber"></span> ${isFilterOn ? 'Filtered Stable' : 'Marginal Noise'}`;
        if (oxWaveStatus) {
          oxWaveStatus.textContent = 'MODERATE ATTENUATION';
          oxWaveStatus.style.color = '#FBBF24';
        }
        if (oxWavePath) {
          oxWavePath.setAttribute('d', 'M 0,30 Q 15,30 25,18 Q 35,12 45,32 Q 55,26 65,30 Q 80,30 90,30 Q 105,30 115,18 Q 125,12 135,32 Q 145,26 155,30 Q 170,30 180,30 Q 195,30 205,18 Q 215,12 225,32 Q 235,26 245,30 Q 260,30 270,30 Q 285,30 295,18 Q 305,12 315,32 Q 325,26 335,30 Q 350,30 360,30 Q 375,30 385,18 Q 395,12 400,32');
          oxWavePath.style.stroke = '#FBBF24';
        }
      } else {
        if (oxAccStatus) oxAccStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--red"></span> Shock-State Boundary';
        if (oxSnrStatus) oxSnrStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--red"></span> Weak Arterial Pulse';
        if (oxWaveStatus) {
          oxWaveStatus.textContent = 'CRITICAL LOW PERFUSION';
          oxWaveStatus.style.color = 'var(--color-alert-red)';
        }
        if (oxWavePath) {
          oxWavePath.setAttribute('d', 'M 0,30 Q 20,30 30,26 Q 40,24 50,31 Q 60,29 70,30 Q 90,30 110,30 Q 120,26 Q 130,24 140,31 Q 150,29 160,30 Q 180,30 200,30 Q 210,26 Q 220,24 230,31 Q 240,29 250,30 Q 270,30 290,30 Q 300,26 Q 310,24 320,31 Q 330,29 340,30 Q 360,30 380,30 Q 390,26 400,31');
          oxWavePath.style.stroke = 'var(--color-alert-red)';
        }
      }
    }

    if (oxPiSlider) oxPiSlider.addEventListener('input', updateOximetrySimulation);
    if (oxFilterToggle) oxFilterToggle.addEventListener('change', updateOximetrySimulation);

    // 3. Aerosol Droplet Dynamics Simulator
    const aeroMmadSlider = document.getElementById('rnd-aero-mmad');
    const aeroMmadVal = document.getElementById('rnd-aero-mmad-val');
    const aeroMeshToggle = document.getElementById('rnd-aero-mesh');
    const aeroAlvVal = document.getElementById('rnd-aero-alveolar');
    const aeroOralVal = document.getElementById('rnd-aero-oral');
    const aeroTargetStatus = document.getElementById('rnd-aero-target-status');
    const meterAlv = document.getElementById('meter-alv');
    const meterBronch = document.getElementById('meter-bronch');
    const meterLoss = document.getElementById('meter-loss');

    function updateAerosolSimulation() {
      if (!aeroMmadSlider) return;
      const mmad = parseFloat(aeroMmadSlider.value);
      const isMesh = aeroMeshToggle ? aeroMeshToggle.checked : true;

      if (aeroMmadVal) aeroMmadVal.textContent = `${mmad.toFixed(1)} µm`;

      // Calculate deposition fractions based on physiological lung impact models
      const peakDeviation = Math.abs(mmad - 3.0);
      let alv = Math.round(Math.max(12, (isMesh ? 72 : 48) - (peakDeviation * 12)));
      let loss = Math.round(Math.min(78, (mmad > 3.5 ? Math.pow(mmad - 2.5, 2) * (isMesh ? 4.5 : 7.2) + 12 : 10)));
      if (alv + loss > 92) alv = 92 - loss;
      const bronch = Math.max(6, 100 - alv - loss);

      if (aeroAlvVal) aeroAlvVal.textContent = alv;
      if (aeroOralVal) aeroOralVal.textContent = loss;

      if (meterAlv) meterAlv.style.width = `${alv}%`;
      if (meterBronch) meterBronch.style.width = `${bronch}%`;
      if (meterLoss) meterLoss.style.width = `${loss}%`;

      if (aeroTargetStatus) {
        if (alv >= 55) {
          aeroTargetStatus.textContent = 'OPTIMAL ALVEOLAR REACH';
          aeroTargetStatus.style.color = 'var(--color-pale-mint)';
        } else if (mmad > 4.5) {
          aeroTargetStatus.textContent = 'HIGH OROPHARYNGEAL IMPACTION';
          aeroTargetStatus.style.color = 'var(--color-alert-red)';
        } else {
          aeroTargetStatus.textContent = 'INTERMEDIATE BRONCHIAL';
          aeroTargetStatus.style.color = '#FBBF24';
        }
      }
    }

    if (aeroMmadSlider) aeroMmadSlider.addEventListener('input', updateAerosolSimulation);
    if (aeroMeshToggle) aeroMeshToggle.addEventListener('change', updateAerosolSimulation);

    // 4. Metallurgy Autoclave Passivation Simulator
    let selectedAlloy = '316L';
    const alloyBtns = document.querySelectorAll('.rnd-alloy-btn');
    const cyclesSlider = document.getElementById('rnd-metal-cycles');
    const cyclesVal = document.getElementById('rnd-metal-cycles-val');
    const prenVal = document.getElementById('rnd-metal-pren');
    const prenStatus = document.getElementById('rnd-metal-pren-status');
    const raVal = document.getElementById('rnd-metal-ra');
    const raStatus = document.getElementById('rnd-metal-ra-status');
    const metalSummary = document.getElementById('rnd-metal-summary');

    function updateMetallurgySimulation() {
      if (!cyclesSlider) return;
      const cycles = parseInt(cyclesSlider.value, 10);
      if (cyclesVal) cyclesVal.textContent = `${cycles} Cycles`;

      if (selectedAlloy === '316L') {
        if (prenVal) prenVal.textContent = '24.5';
        if (prenStatus) prenStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--green"></span> 2.5% Molybdenum Passivated';
        const ra = (0.18 + (cycles / 1000) * 0.10).toFixed(2);
        if (raVal) raVal.textContent = ra;
        if (raStatus) raStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--green"></span> Biofilm Resistant';
        if (metalSummary) {
          metalSummary.textContent = 'UNRESTRICTED CSSD STEAM (134°C)';
          metalSummary.style.color = 'var(--color-pale-mint)';
        }
      } else if (selectedAlloy === '304') {
        if (prenVal) prenVal.textContent = '19.2';
        if (prenStatus) prenStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--amber"></span> Standard Austenitic';
        const ra = (0.24 + (cycles / 1000) * 0.32).toFixed(2);
        if (raVal) raVal.textContent = ra;
        if (raStatus) raStatus.innerHTML = cycles > 400 
          ? '<span class="status-indicator-dot status-indicator-dot--amber"></span> Surface Micro-Pitting Risk'
          : '<span class="status-indicator-dot status-indicator-dot--green"></span> Stable Passivation';
        if (metalSummary) {
          metalSummary.textContent = cycles > 500 ? 'MONITOR FOR MICRO-OXIDATION' : 'PERMITTED FOR ROUTINE INSTRUMENTATION';
          metalSummary.style.color = cycles > 500 ? '#FBBF24' : 'var(--color-pale-mint)';
        }
      } else {
        // Brass
        if (prenVal) prenVal.textContent = 'N/A';
        if (prenStatus) prenStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--red"></span> Non-Autoclavable Alloy';
        if (raVal) raVal.textContent = '0.85+';
        if (raStatus) raStatus.innerHTML = '<span class="status-indicator-dot status-indicator-dot--red"></span> Thermal Coating Hazard';
        if (metalSummary) {
          metalSummary.textContent = 'CONTRAINDICATED FOR STEAM AUTOCLAVING';
          metalSummary.style.color = 'var(--color-alert-red)';
        }
      }
    }

    alloyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        alloyBtns.forEach(b => {
          b.classList.remove('active', 'btn--primary');
          b.classList.add('btn--dark-outline');
        });
        btn.classList.add('active', 'btn--primary');
        btn.classList.remove('btn--dark-outline');
        selectedAlloy = btn.getAttribute('data-alloy');
        updateMetallurgySimulation();
      });
    });

    if (cyclesSlider) cyclesSlider.addEventListener('input', updateMetallurgySimulation);
  }

  function setupBentoFilters() {
    elements.bentoFilters.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = btn.getAttribute('data-filter-category');
        if (!cat) return;

        state.selectedCategory = cat;

        // Update active pill in category filters
        if (elements.categoryFilters) {
          elements.categoryFilters.querySelectorAll('.category-pill').forEach(b => {
            const matches = b.getAttribute('data-category') === cat;
            b.classList.toggle('active', matches);
            b.setAttribute('aria-pressed', matches ? 'true' : 'false');
          });
        }

        renderCatalogue();

        // Smooth scroll to catalogue section
        const catSection = document.getElementById('catalogue');
        if (catSection) {
          catSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ==========================================================================
     9. CATALOGUE FILTERING, SORTING & RENDERING
     ========================================================================== */
  function getFilteredProducts() {
    return CATALOGUE_DATA.filter(product => {
      const matchesCategory =
        state.selectedCategory === 'all' ||
        product.category.toLowerCase() === state.selectedCategory.toLowerCase();

      const query = state.searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.id.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.shortDesc.toLowerCase().includes(query) ||
        product.partner.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (state.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (state.sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (state.sortBy === 'sku') {
        return a.id.localeCompare(b.id);
      } else if (state.sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  }

  function renderCatalogue() {
    const products = getFilteredProducts();
    const total = CATALOGUE_DATA.length;

    if (state.searchQuery || state.selectedCategory !== 'all') {
      elements.resultsCounter.textContent = `Showing ${products.length} of ${total} products (Filtered)`;
    } else {
      elements.resultsCounter.textContent = `Showing all ${products.length} products`;
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.style.display = state.searchQuery ? 'inline-flex' : 'none';
    }

    if (products.length === 0) {
      elements.productGrid.style.display = 'none';
      elements.emptyState.removeAttribute('hidden');
      return;
    }

    elements.productGrid.style.display = 'grid';
    elements.emptyState.setAttribute('hidden', 'true');

    elements.productGrid.innerHTML = products.map((product, idx) => {
      const isCompared = state.comparedProducts.has(product.id);
      return `
        <article 
          class="product-card tilt-card is-revealed" 
          data-product-id="${product.id}" 
          id="card-${product.id}"
          data-reveal="fade-up"
          style="--card-delay: ${idx * 60}ms;"
        >
          <div class="product-card__media">
            <img 
              src="${product.image}" 
              alt="${escapeHtml(product.name)} — ${escapeHtml(product.category)}" 
              class="product-card__img"
              loading="lazy"
              width="400"
              height="300"
            />
            <div class="product-card__badges">
              <span class="badge badge--category">${escapeHtml(product.category)}</span>
              <span class="badge badge--sample">Sample Spec</span>
            </div>
            <!-- Compare Checkbox Control -->
            <label class="product-card__compare-label" title="Compare specifications">
              <input 
                type="checkbox" 
                class="compare-checkbox" 
                data-compare-id="${product.id}"
                ${isCompared ? 'checked' : ''}
              />
              <span class="compare-label-text">Compare</span>
            </label>
          </div>

          <div class="product-card__content">
            <div class="product-card__header">
              <span class="product-card__ref">REF: ${escapeHtml(product.id)}</span>
              <span class="product-card__partner">${escapeHtml(product.partner)}</span>
            </div>

            <h3 class="product-card__title">
              <a href="#product=${product.id}" class="product-card__title-link" data-action="view-details" data-id="${product.id}">
                ${escapeHtml(product.name)}
              </a>
            </h3>

            <p class="product-card__desc">${escapeHtml(product.shortDesc)}</p>

            <div class="product-card__spec-highlight">
              <span class="spec-highlight__label">Key Standard:</span>
              <span class="spec-highlight__value">${escapeHtml(product.badge)}</span>
            </div>

            <div class="product-card__footer">
              <button 
                type="button" 
                class="btn btn--secondary btn--sm btn-view-spec" 
                data-action="view-details" 
                data-id="${product.id}"
                aria-label="View specifications for ${escapeHtml(product.name)}"
              >
                Specifications
              </button>
              <button 
                type="button" 
                class="btn btn--primary btn--sm btn-enquire" 
                data-action="enquire" 
                data-id="${product.id}"
                aria-label="Enquire about ${escapeHtml(product.name)}"
              >
                Enquire
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Rebind tilt interactions on freshly rendered cards
    setupPerspectiveTilt();
  }

  function setupCatalogueListeners() {
    let debounceTimer;
    elements.searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.searchQuery = e.target.value;
        renderCatalogue();
      }, 180);
    });

    elements.clearSearchBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.searchInput.focus();
      renderCatalogue();
    });

    elements.categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-pill');
      if (!btn) return;

      elements.categoryFilters.querySelectorAll('.category-pill').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      state.selectedCategory = btn.getAttribute('data-category');
      renderCatalogue();
    });

    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderCatalogue();
    });

    elements.resetFiltersBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.selectedCategory = 'all';
      state.sortBy = 'default';
      elements.searchInput.value = '';
      elements.sortSelect.value = 'default';

      elements.categoryFilters.querySelectorAll('.category-pill').forEach(b => {
        const isAll = b.getAttribute('data-category') === 'all';
        b.classList.toggle('active', isAll);
        b.setAttribute('aria-pressed', isAll ? 'true' : 'false');
      });

      renderCatalogue();
      elements.searchInput.focus();
    });

    // Card Actions Delegation
    elements.productGrid.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;

      const action = target.getAttribute('data-action');
      const productId = target.getAttribute('data-id');

      if (action === 'view-details') {
        e.preventDefault();
        openProductModal(productId, target);
      } else if (action === 'enquire') {
        e.preventDefault();
        selectProductForEnquiry(productId);
      }
    });

    // Compare Checkbox Delegation
    elements.productGrid.addEventListener('change', (e) => {
      if (e.target.classList.contains('compare-checkbox')) {
        const productId = e.target.getAttribute('data-compare-id');
        if (e.target.checked) {
          if (state.comparedProducts.size >= 3) {
            e.target.checked = false;
            alert('You can compare a maximum of 3 medical products simultaneously.');
            return;
          }
          state.comparedProducts.add(productId);
        } else {
          state.comparedProducts.delete(productId);
        }
        updateCompareDrawer();
      }
    });
  }

  /* ==========================================================================
     10. SIDE-BY-SIDE PRODUCT COMPARISON ENGINE
     ========================================================================== */
  function setupCompareDrawer() {
    if (elements.clearCompareBtn) {
      elements.clearCompareBtn.addEventListener('click', () => {
        state.comparedProducts.clear();
        updateCompareDrawer();
        renderCatalogue();
      });
    }

    if (elements.compareBtn) {
      elements.compareBtn.addEventListener('click', openCompareModal);
    }

    if (elements.compareModalCloseBtn) {
      elements.compareModalCloseBtn.addEventListener('click', closeCompareModal);
    }

    if (elements.compareModalBackdrop) {
      elements.compareModalBackdrop.addEventListener('click', closeCompareModal);
    }

    if (elements.compareModal) {
      elements.compareModal.addEventListener('click', (e) => {
        if (e.target === elements.compareModal) {
          closeCompareModal();
        }
      });
    }
  }

  function updateCompareDrawer() {
    const count = state.comparedProducts.size;
    if (count > 0) {
      elements.compareDrawer.removeAttribute('hidden');
      elements.compareDrawer.style.display = 'block';
      elements.compareDrawer.classList.add('is-active');

      const items = Array.from(state.comparedProducts).map(id => {
        const prod = CATALOGUE_DATA.find(p => p.id === id);
        return prod ? `
          <div class="compare-tray-chip">
            <span class="compare-chip-name">${escapeHtml(prod.name)}</span>
            <button type="button" class="compare-chip-remove" data-remove-id="${prod.id}" aria-label="Remove ${escapeHtml(prod.name)} from compare">&times;</button>
          </div>
        ` : '';
      }).join('');

      elements.compareItemsList.innerHTML = items;

      elements.compareItemsList.querySelectorAll('.compare-chip-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-remove-id');
          state.comparedProducts.delete(id);
          updateCompareDrawer();
          renderCatalogue();
        });
      });

      elements.compareBtn.textContent = `Compare ${count} Item${count > 1 ? 's' : ''}`;
    } else {
      elements.compareDrawer.classList.remove('is-active');
      setTimeout(() => {
        elements.compareDrawer.setAttribute('hidden', 'true');
        elements.compareDrawer.style.display = 'none';
      }, 300);
    }
  }

  function openCompareModal() {
    const products = Array.from(state.comparedProducts)
      .map(id => CATALOGUE_DATA.find(p => p.id === id))
      .filter(Boolean);

    if (products.length < 2) {
      alert('Please select at least 2 medical products to view side-by-side comparison.');
      return;
    }

    const allSpecKeys = new Set();
    products.forEach(p => {
      Object.keys(p.specifications).forEach(k => allSpecKeys.add(k));
    });

    const headersHtml = products.map(p => `
      <th scope="col" class="compare-th">
        <div class="compare-prod-card">
          <img src="${p.image}" alt="${escapeHtml(p.name)}" class="compare-prod-thumb" />
          <span class="compare-prod-ref">${escapeHtml(p.id)}</span>
          <h4 class="compare-prod-title">${escapeHtml(p.name)}</h4>
          <span class="badge badge--category">${escapeHtml(p.category)}</span>
          <button type="button" class="btn btn--primary btn--sm compare-enquire-btn" data-enquire-id="${p.id}" style="margin-top: 8px;">
            Enquire
          </button>
        </div>
      </th>
    `).join('');

    const rowsHtml = Array.from(allSpecKeys).map(key => {
      const cells = products.map(p => `
        <td class="compare-td">${p.specifications[key] || '<span class="text-muted">—</span>'}</td>
      `).join('');

      return `
        <tr class="compare-row">
          <th scope="row" class="compare-key-cell">${escapeHtml(key)}</th>
          ${cells}
        </tr>
      `;
    }).join('');

    elements.compareModalContent.innerHTML = `
      <div class="table-container compare-table-wrap">
        <table class="compare-matrix-table">
          <thead>
            <tr>
              <th scope="col" class="compare-key-cell compare-key-header">Technical Specification</th>
              ${headersHtml}
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;

    elements.compareModalContent.querySelectorAll('.compare-enquire-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-enquire-id');
        closeCompareModal();
        selectProductForEnquiry(id);
      });
    });

    elements.compareModal.removeAttribute('hidden');
    elements.compareModal.style.display = 'flex';
    if (elements.compareModalBackdrop) {
      elements.compareModalBackdrop.removeAttribute('hidden');
      elements.compareModalBackdrop.style.display = 'block';
    }
    document.body.classList.add('modal-open');
    if (elements.compareModalCloseBtn) elements.compareModalCloseBtn.focus();
  }

  function closeCompareModal() {
    if (!elements.compareModal) return;
    elements.compareModal.setAttribute('hidden', 'true');
    elements.compareModal.style.display = 'none';
    if (elements.compareModalBackdrop) {
      elements.compareModalBackdrop.setAttribute('hidden', 'true');
      elements.compareModalBackdrop.style.display = 'none';
    }
    document.body.classList.remove('modal-open');
  }

  /* ==========================================================================
     11. CLINICAL INTELLIGENCE DOSSIER MODALS
     ========================================================================== */
  function setupIntelligenceModals() {
    document.querySelectorAll('[data-dossier-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const dossierId = btn.getAttribute('data-dossier-id');
        openDossierModal(dossierId);
      });
    });

    if (elements.dossierModalCloseBtn) {
      elements.dossierModalCloseBtn.addEventListener('click', closeDossierModal);
    }
    if (elements.dossierModalBackdrop) {
      elements.dossierModalBackdrop.addEventListener('click', closeDossierModal);
    }
    if (elements.dossierModal) {
      elements.dossierModal.addEventListener('click', (e) => {
        if (e.target === elements.dossierModal) {
          closeDossierModal();
        }
      });
    }
  }

  function openDossierModal(dossierId) {
    const dossier = INTELLIGENCE_DOSSIERS.find(d => d.id === dossierId);
    if (!dossier) return;

    elements.dossierModalTitle.textContent = dossier.title;
    elements.dossierModalBody.innerHTML = `
      <div class="dossier-modal-meta">
        <span class="badge badge--category">${escapeHtml(dossier.category)}</span>
        <span class="dossier-read-time">${escapeHtml(dossier.readTime)}</span>
        <span class="dossier-date">${escapeHtml(dossier.date)}</span>
      </div>
      <div class="dossier-modal-content">
        ${dossier.fullContent}
      </div>
      <div class="alert-box alert-box--warning" style="margin-top: 24px;">
        <div>
          <strong>Regulatory Evaluation Advisory:</strong>
          This technical dossier provides biomedical equipment engineering benchmarks for institutional procurement and clinical infrastructure planning.
        </div>
      </div>
    `;

    elements.dossierModal.removeAttribute('hidden');
    elements.dossierModal.style.display = 'flex';
    if (elements.dossierModalBackdrop) {
      elements.dossierModalBackdrop.removeAttribute('hidden');
      elements.dossierModalBackdrop.style.display = 'block';
    }
    document.body.classList.add('modal-open');
    if (elements.dossierModalCloseBtn) elements.dossierModalCloseBtn.focus();
  }

  function closeDossierModal() {
    if (!elements.dossierModal) return;
    elements.dossierModal.setAttribute('hidden', 'true');
    elements.dossierModal.style.display = 'none';
    if (elements.dossierModalBackdrop) {
      elements.dossierModalBackdrop.setAttribute('hidden', 'true');
      elements.dossierModalBackdrop.style.display = 'none';
    }
    document.body.classList.remove('modal-open');
  }

  /* ==========================================================================
     12. ACCESSIBLE PRODUCT DETAIL MODAL
     ========================================================================== */
  function setupProductModals() {
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeProductModal);
    }
    if (elements.modalBackdrop) {
      elements.modalBackdrop.addEventListener('click', closeProductModal);
    }
    if (elements.modal) {
      elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) {
          closeProductModal();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProductModal();
        closeCompareModal();
        closeDossierModal();
      }
    });
  }

  function openProductModal(productId, triggerElement = null) {
    const product = CATALOGUE_DATA.find(p => p.id === productId);
    if (!product) return;

    state.lastFocusedElement = triggerElement || document.activeElement;
    elements.modalTitle.textContent = product.name;

    const specsHtml = Object.entries(product.specifications).map(([key, val]) => `
      <tr class="spec-row">
        <th scope="row" class="spec-label">${escapeHtml(key)}</th>
        <td class="spec-value">${val}</td>
      </tr>
    `).join('');

    elements.modalBody.innerHTML = `
      <div class="modal-product-layout">
        <div class="modal-product-media">
          <img 
            src="${product.image}" 
            alt="${escapeHtml(product.name)}" 
            class="modal-product-img"
          />
          <div class="modal-badges">
            <span class="badge badge--category">${escapeHtml(product.category)}</span>
            <span class="badge badge--sample">Sample Catalogue Entry</span>
          </div>
          <div class="modal-partner-note">
            <strong>Sourcing / Partner:</strong> ${escapeHtml(product.partner)}
          </div>
        </div>

        <div class="modal-product-details">
          <div class="modal-meta-bar">
            <span class="modal-ref-code">REF: ${escapeHtml(product.id)}</span>
            <span class="modal-status-pill">Available for Procurement Assessment</span>
          </div>

          <h3 class="modal-product-heading">${escapeHtml(product.name)}</h3>
          <p class="modal-product-lead">${escapeHtml(product.fullDesc)}</p>

          <div class="modal-section">
            <h4 class="modal-section-title">Technical Specifications</h4>
            <div class="table-container">
              <table class="specs-table">
                <tbody>
                  ${specsHtml}
                </tbody>
              </table>
            </div>
          </div>

          <div class="modal-section">
            <h4 class="modal-section-title">Intended Operational Context</h4>
            <p class="modal-intended-use">${escapeHtml(product.intendedUse)}</p>
          </div>

          <div class="alert-box alert-box--warning" role="note">
            <svg class="alert-box__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <div>
              <strong>Informational Catalogue Preview:</strong>
              This entry represents technical equipment specifications for institutional assessment. Does not constitute personal medical diagnosis or clinical prescription advice.
            </div>
          </div>

          <div class="modal-actions">
            <button 
              type="button" 
              class="btn btn--primary modal-enquire-btn" 
              data-enquire-id="${product.id}"
            >
              Request Institutional Quote for this Item
            </button>
            <button 
              type="button" 
              class="btn btn--secondary modal-close-action"
            >
              Back to Catalogue
            </button>
          </div>
        </div>
      </div>
    `;

    const enquireBtn = elements.modalBody.querySelector('.modal-enquire-btn');
    if (enquireBtn) {
      enquireBtn.addEventListener('click', () => {
        closeProductModal();
        selectProductForEnquiry(product.id);
      });
    }

    const closeActionBtn = elements.modalBody.querySelector('.modal-close-action');
    if (closeActionBtn) {
      closeActionBtn.addEventListener('click', closeProductModal);
    }

    elements.modal.removeAttribute('hidden');
    elements.modal.style.display = 'flex';
    if (elements.modalBackdrop) {
      elements.modalBackdrop.removeAttribute('hidden');
      elements.modalBackdrop.style.display = 'block';
    }
    document.body.classList.add('modal-open');

    if (elements.modalCloseBtn) elements.modalCloseBtn.focus();
    setupFocusTrap(elements.modal);
  }

  function closeProductModal() {
    if (!elements.modal) return;
    elements.modal.setAttribute('hidden', 'true');
    elements.modal.style.display = 'none';
    if (elements.modalBackdrop) {
      elements.modalBackdrop.setAttribute('hidden', 'true');
      elements.modalBackdrop.style.display = 'none';
    }
    document.body.classList.remove('modal-open');

    if (window.location.hash.startsWith('#product=')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }

    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === 'function') {
      state.lastFocusedElement.focus();
    }
  }

  function setupFocusTrap(modalContainer) {
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = modalContainer.querySelectorAll(focusableSelectors);
    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modalContainer.addEventListener('keydown', function trap(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });
  }

  function handleUrlHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#product=')) {
      const productId = hash.replace('#product=', '');
      openProductModal(productId);
    }
  }

  /* ==========================================================================
     13. DIRECT ENQUIRY PRE-POPULATION HOOK
     ========================================================================== */
  function populateEnquiryProductDropdown() {
    if (!elements.enquiryProductSelect) return;

    const options = CATALOGUE_DATA.map(p => `
      <option value="${p.id}">
        ${escapeHtml(p.id)} — ${escapeHtml(p.name)}
      </option>
    `).join('');

    elements.enquiryProductSelect.innerHTML = `
      <option value="">-- General Catalogue / Multi-item Enquiry --</option>
      ${options}
    `;
  }

  function selectProductForEnquiry(productId) {
    const product = CATALOGUE_DATA.find(p => p.id === productId);
    if (!product) return;

    elements.enquiryProductSelect.value = productId;
    elements.selectedProductName.textContent = `${product.name} (REF: ${product.id})`;
    elements.selectedProductNotice.removeAttribute('hidden');

    elements.enquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const nameInput = document.getElementById('enquiry-fullname');
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 500);
    }
  }

  function setupEnquiryForm() {
    if (elements.clearSelectedProductBtn) {
      elements.clearSelectedProductBtn.addEventListener('click', () => {
        elements.enquiryProductSelect.value = '';
        elements.selectedProductNotice.setAttribute('hidden', 'true');
      });
    }

    elements.enquiryProductSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val) {
        const product = CATALOGUE_DATA.find(p => p.id === val);
        if (product) {
          elements.selectedProductName.textContent = `${product.name} (REF: ${product.id})`;
          elements.selectedProductNotice.removeAttribute('hidden');
        }
      } else {
        elements.selectedProductNotice.setAttribute('hidden', 'true');
      }
    });

    elements.enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm(elements.enquiryForm)) return;

      const formData = new FormData(elements.enquiryForm);
      const data = Object.fromEntries(formData.entries());

      const productInfo = data.product 
        ? CATALOGUE_DATA.find(p => p.id === data.product)?.name + ` (${data.product})` 
        : 'General Institutional Sourcing Enquiry';

      elements.feedbackDetails.innerHTML = `
        <div class="feedback-summary">
          <p><strong>Contact:</strong> ${escapeHtml(data.fullName)} (${escapeHtml(data.email)})</p>
          <p><strong>Organization:</strong> ${escapeHtml(data.organization)} • ${escapeHtml(data.role || 'Not specified')}</p>
          <p><strong>Enquiry Type:</strong> ${escapeHtml(data.enquiryType)}</p>
          <p><strong>Product Focus:</strong> ${escapeHtml(productInfo)}</p>
          <p><strong>Message / Requirements:</strong></p>
          <blockquote class="feedback-quote">${escapeHtml(data.message)}</blockquote>
        </div>
      `;

      elements.enquiryForm.style.display = 'none';
      elements.selectedProductNotice.setAttribute('hidden', 'true');
      elements.formFeedback.removeAttribute('hidden');
      elements.formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      elements.formFeedback.focus();
    });

    if (elements.resetFormDemoBtn) {
      elements.resetFormDemoBtn.addEventListener('click', () => {
        elements.enquiryForm.reset();
        elements.enquiryProductSelect.value = '';
        elements.selectedProductNotice.setAttribute('hidden', 'true');
        elements.formFeedback.setAttribute('hidden', 'true');
        elements.enquiryForm.style.display = 'block';

        elements.enquiryForm.querySelectorAll('.form-group--error').forEach(g => {
          g.classList.remove('form-group--error');
        });
        elements.enquiryForm.querySelectorAll('.error-msg').forEach(msg => {
          msg.textContent = '';
        });
      });
    }

    elements.enquiryForm.addEventListener('input', (e) => {
      const input = e.target;
      const group = input.closest('.form-group');
      if (group && group.classList.contains('form-group--error')) {
        group.classList.remove('form-group--error');
        input.removeAttribute('aria-invalid');
        const errSpan = group.querySelector('.error-msg');
        if (errSpan) errSpan.textContent = '';
      }
    });
  }

  function validateForm(form) {
    let isValid = true;
    let firstInvalidInput = null;

    function setError(input, message) {
      isValid = false;
      const group = input.closest('.form-group');
      if (group) {
        group.classList.add('form-group--error');
        input.setAttribute('aria-invalid', 'true');
        const errSpan = group.querySelector('.error-msg');
        if (errSpan) errSpan.textContent = message;
      }
      if (!firstInvalidInput) firstInvalidInput = input;
    }

    const nameInput = form.querySelector('#enquiry-fullname');
    if (!nameInput.value.trim()) {
      setError(nameInput, 'Please enter your full name.');
    }

    const emailInput = form.querySelector('#enquiry-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      setError(emailInput, 'Work or organizational email is required.');
    } else if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, 'Please enter a valid email address.');
    }

    const orgInput = form.querySelector('#enquiry-org');
    if (!orgInput.value.trim()) {
      setError(orgInput, 'Please enter your clinic, hospital, or organization name.');
    }

    const msgInput = form.querySelector('#enquiry-message');
    if (!msgInput.value.trim() || msgInput.value.trim().length < 10) {
      setError(msgInput, 'Please provide enquiry details or specification requests (min 10 characters).');
    }

    const consentInput = form.querySelector('#enquiry-consent');
    if (!consentInput.checked) {
      setError(consentInput, 'You must acknowledge the catalogue informational preview notice.');
    }

    if (!isValid && firstInvalidInput) {
      firstInvalidInput.focus();
    }

    return isValid;
  }

  /* ==========================================================================
     14. NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  function setupNavigation() {
    elements.mobileToggle.addEventListener('click', () => {
      const isExpanded = elements.mobileToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      elements.mobileToggle.setAttribute('aria-expanded', String(newState));
      elements.primaryNav.classList.toggle('is-open', newState);
      document.body.classList.toggle('nav-drawer-open', newState);
    });

    elements.primaryNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        elements.mobileToggle.setAttribute('aria-expanded', 'false');
        elements.primaryNav.classList.remove('is-open');
        document.body.classList.remove('nav-drawer-open');
      }
    });

    if (elements.navSearchBtn) {
      elements.navSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const searchInput = elements.searchInput;
        if (searchInput) {
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => searchInput.focus(), 350);
        }
      });
    }

    // Keyboard shortcut '/' to trigger search
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        elements.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => elements.searchInput.focus(), 250);
      }
    });


    // Base44 Left Milestone Rail Smooth Scrolling
    if (elements.leftRailBtns && elements.leftRailBtns.length) {
      elements.leftRailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetSectionId = btn.getAttribute('data-section');
          const targetEl = document.getElementById(targetSectionId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            updateActiveSectionIndicators(targetSectionId);
          }
        });
      });
    }

    if (elements.backToTopBtn) {
      elements.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ==========================================================================
     15. MICRO-PERSPECTIVE 3D TILT PHYSICS
     ========================================================================== */
  function setupPerspectiveTilt() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || window.innerWidth < 1024) return;

    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // max 5 deg tilt
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ==========================================================================
     16. UTILITY HELPERS
     ========================================================================== */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
