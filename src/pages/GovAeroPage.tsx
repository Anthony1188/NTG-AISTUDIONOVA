import type { ComponentType } from 'react';
import { ArrowRight, Shield, Crosshair, Trophy, Activity, Wrench, Factory, Truck, Lock, CheckCircle, BarChart2, FileText, ShieldCheck, Layers, Settings, CheckSquare, Gauge, RefreshCw } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import govHero from '../assets/images/gov_aero_card_bg_1784713090507.jpg';
import ctaSynergyBanner from '../assets/images/cta_synergy_banner_1784924147107.jpg';
import cardImg1 from '../assets/images/regenerated_image_1784937218817.png';
import cardImg2 from '../assets/images/regenerated_image_1784937220140.png';
import cardImg3 from '../assets/images/regenerated_image_1784937221355.png';
import cardImg4 from '../assets/images/regenerated_image_1784937222721.png';
import cardImg5 from '../assets/images/regenerated_image_1784937224022.png';
import { BrandLogo } from '../components/BrandLogo';

/* ─── Data ────────────────────────────────────────────────── */

const capabilities = [
  {
    num: '01',
    Icon: Shield,
    title: 'Prepare',
    desc: 'Build organizational readiness with compliance, certifications, systems, and internal infrastructure.',
  },
  {
    num: '02',
    Icon: Crosshair,
    title: 'Pursue',
    desc: 'Identify opportunities, develop strategy, build teaming relationships, and position for success.',
  },
  {
    num: '03',
    Icon: Trophy,
    title: 'Win',
    desc: 'Execute capture and proposal strategies that communicate value and meet mission requirements.',
  },
  {
    num: '04',
    Icon: Activity,
    title: 'Perform',
    desc: 'Deliver with operational excellence through program management, quality, and continuous improvement.',
  },
];

interface OperatingCapability {
  title: string;
  desc: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
}

interface OperatingGroup {
  groupNum: string;
  groupTitle: string;
  capabilities: OperatingCapability[];
}

const operatingGroups: OperatingGroup[] = [
  {
    groupNum: 'GROUP 1',
    groupTitle: 'CONTRACT INFRASTRUCTURE',
    capabilities: [
      {
        title: 'Contract Strategy',
        desc: 'Strategic positioning, vehicle selection, and opportunity assessment for defense and civilian pursuits.',
        Icon: FileText,
      },
      {
        title: 'Capture & Proposal Systems',
        desc: 'Scalable proposal workflows, compliance matrixing, and win-theme architecture for competitive solicitations.',
        Icon: Crosshair,
      },
      {
        title: 'Compliance & Risk',
        desc: 'Governance frameworks, FAR/DFARS alignment, and proactive risk management protocols.',
        Icon: ShieldCheck,
      },
      {
        title: 'Program Management',
        desc: 'Structured execution frameworks, milestone tracking, and cost and schedule control systems.',
        Icon: Layers,
      },
    ],
  },
  {
    groupNum: 'GROUP 2',
    groupTitle: 'TECHNICAL OPERATIONS',
    capabilities: [
      {
        title: 'Engineering Coordination',
        desc: 'Aligning multi-disciplinary engineering workflows, interface controls, and technical governance across teams.',
        Icon: Settings,
      },
      {
        title: 'Manufacturing Readiness',
        desc: 'Transition-to-production frameworks, process control systems, and operational scalability models.',
        Icon: Factory,
      },
      {
        title: 'Quality Assurance',
        desc: 'Quality management systems, audit readiness, and continuous process verification controls.',
        Icon: CheckSquare,
      },
      {
        title: 'Test & Evaluation Planning',
        desc: 'Test strategy frameworks, acceptance criteria, and validation coordination protocols.',
        Icon: Gauge,
      },
    ],
  },
  {
    groupNum: 'GROUP 3',
    groupTitle: 'MISSION SUPPORT SYSTEMS',
    capabilities: [
      {
        title: 'Supplier & Logistics Infrastructure',
        desc: 'Vendor management systems, supply chain controls, and material coordination networks.',
        Icon: Truck,
      },
      {
        title: 'Secure Information Workflows',
        desc: 'Compliant data handling, controlled document distribution, and secure information governance.',
        Icon: Lock,
      },
      {
        title: 'Sustainment Planning',
        desc: 'Lifecycle support models, maintenance frameworks, and long-term readiness systems.',
        Icon: RefreshCw,
      },
      {
        title: 'Performance & Mission Analytics',
        desc: 'Decision-support dashboards, operational reporting, and mission performance telemetry.',
        Icon: BarChart2,
      },
    ],
  },
];

const techOpsSummary = [
  { Icon: Wrench, label: 'Program & Contract Management' },
  { Icon: Shield, label: 'Compliance & Quality Systems' },
  { Icon: Activity, label: 'Engineering Coordination & Services' },
  { Icon: Truck, label: 'Supplier & Logistics Infrastructure' },
  { Icon: Factory, label: 'Manufacturing Readiness Support' },
  { Icon: Lock, label: 'Secure Information Workflows' },
  { Icon: BarChart2, label: 'Performance & Decision Analytics' },
];

interface IndustryCard {
  title: string;
  desc: string;
  image: string;
  srcSet: string;
  sizes: string;
  alt: string;
  objectPos: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
}

const industryCards: IndustryCard[] = [
  {
    title: 'GOVERNMENT CONTRACTORS',
    desc: 'Contract readiness, capture systems, compliance, and program infrastructure.',
    image: cardImg1,
    srcSet: '',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    alt: 'Precision metrology instruments, calibration equipment, and technical test cases in defense production workspace',
    objectPos: 'object-[50%_40%]',
    Icon: ShieldCheck,
  },
  {
    title: 'AEROSPACE & DEFENSE SUPPLIERS',
    desc: 'Quality, supplier, manufacturing, and mission-execution infrastructure.',
    image: cardImg2,
    srcSet: '',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    alt: 'High-tolerance aerospace structural components, machined titanium brackets, and composite panels over technical blueprints',
    objectPos: 'object-[50%_50%]',
    Icon: Gauge,
  },
  {
    title: 'INDUSTRIAL MANUFACTURERS',
    desc: 'Operational systems, traceability, production readiness, and scalable execution.',
    image: cardImg3,
    srcSet: '',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    alt: 'Electronics test and calibration station with oscilloscope, power analyzer, and precision engineering schematics',
    objectPos: 'object-[50%_45%]',
    Icon: Factory,
  },
  {
    title: 'ENGINEERING COMPANIES',
    desc: 'Program structure, technical workflows, quality controls, and delivery discipline.',
    image: cardImg4,
    srcSet: '',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    alt: 'Engineering workstation featuring aerospace structural brackets, blueprints, precision calipers, and program documentation',
    objectPos: 'object-[50%_50%]',
    Icon: Settings,
  },
  {
    title: 'TECHNICAL-SERVICE BUSINESSES',
    desc: 'Specialized operations, field execution, documentation, and sustainment systems.',
    image: cardImg5,
    srcSet: '',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    alt: 'Coordinate measuring machine (CMM) inspecting high-precision machined aerospace flange with micrometers',
    objectPos: 'object-[50%_40%]',
    Icon: Wrench,
  },
  {
    title: 'SPACE SYSTEMS',
    desc: 'Supplier readiness, technical coordination, quality, and program-support infrastructure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    srcSet: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80 1200w',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    alt: 'Space payload thermal shield and satellite hardware in orbital cleanroom test cell',
    objectPos: 'object-[50%_50%]',
    Icon: Layers,
  },
];

/* ─── Component ───────────────────────────────────────────── */

export default function GovAeroPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#0B0B0B] text-pure-white">
      <Header theme="dark" />

      <main className="flex-1 pt-[72px]">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative w-full bg-[#0B0B0B] flex flex-col md:flex-row md:min-h-[800px]">

          {/* Copy column */}
          <div className="relative z-10 flex flex-col justify-center
                          w-full md:w-[45%] lg:w-[43%]
                          px-6 md:px-14 lg:px-20
                          pt-20 pb-16 md:py-32
                          bg-[#0B0B0B]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-5 h-[1.5px] bg-technical-bronze flex-shrink-0" />
              <p className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-technical-bronze uppercase">
                Contract and Technical Infrastructure
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-[clamp(48px,5vw,76px)]
                           font-semibold tracking-tight text-pure-white uppercase
                           leading-[1.05] mb-6">
              Contract Readiness.<br />Mission Performance.
            </h1>

            {/* Bronze rule */}
            <div className="w-10 h-[2px] bg-technical-bronze mb-8" />

            {/* Body */}
            <p className="font-sans text-stone-gray/90 font-light text-[16px] md:text-[18px]
                          leading-[1.6] max-w-[65ch] mb-10">
              NOVAGENTEC builds the strategic, technical, and operational infrastructure
              that helps government contractors, aerospace suppliers, and engineering
              organizations prepare, pursue, win, and perform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3
                           bg-technical-bronze text-carbon-black
                           px-7 py-3.5
                           font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase font-semibold
                           transition-opacity duration-200 hover:opacity-85
                           flex-shrink-0"
              >
                Start the Conversation
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#approach"
                className="inline-flex items-center gap-3
                           border border-technical-bronze/50 text-stone-gray
                           px-7 py-3.5
                           font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase font-semibold
                           transition-colors duration-200
                           hover:border-technical-bronze hover:text-technical-bronze
                           flex-shrink-0"
              >
                Explore Capabilities
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative
                          w-full h-[56vw] max-h-[420px]
                          md:absolute md:right-0 md:top-0 md:bottom-0
                          md:w-[55%] md:h-auto md:max-h-none
                          overflow-hidden">

            <img
              src={govHero}
              alt="Precision machined aerospace propulsion and structural components arranged on a technical blueprint"
              width={1200}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-[60%_40%] filter saturate-[0.88] brightness-[0.95] contrast-[1.03]"
            />

            <div className="absolute inset-0
                            bg-gradient-to-r
                            from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent
                            md:block" />

            <div className="hidden md:block absolute inset-0
                            bg-gradient-to-t from-[#0B0B0B]/30 via-transparent to-transparent" />

            <div className="md:hidden absolute inset-0
                            bg-gradient-to-b from-[#0B0B0B]/25 via-transparent to-[#0B0B0B]/80" />

            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="govHeroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A27B52" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#govHeroGrid)" />
              </svg>
            </div>
          </div>

        </section>

        {/* ── Capability Lifecycle Architecture ──────────────── */}
        <section id="approach" className="w-full bg-[#0f0f0f] border-t border-[#242424] py-0">
          <div className="max-w-[1400px] mx-auto">
            <div className="px-8 md:px-12 pt-12 pb-6 flex items-center gap-4">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-brushed-silver uppercase">
                Lifecycle Framework
              </span>
              <div className="flex-1 h-px bg-[#242424]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#242424]">
              {capabilities.map(({ num, Icon, title, desc }, i) => (
                <div
                  key={num}
                  className={`relative p-8 md:p-10 flex flex-col gap-5 border-[#242424] ${i < 3 ? 'lg:border-r' : ''} ${i % 2 === 0 ? 'sm:border-r lg:border-r-0' : ''} border-b lg:border-b-0`}
                >
                  <div
                    className="absolute bottom-0 right-0 w-5 h-5 bg-technical-bronze/20"
                    style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
                  />

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-technical-bronze uppercase font-semibold">{num}</span>
                    <Icon className="w-6 h-6 text-technical-bronze/60" strokeWidth={1.25} />
                  </div>

                  <div>
                    <h3 className="font-heading text-[18px] md:text-[22px] font-semibold tracking-tight text-pure-white uppercase mb-3 leading-[1.1]">
                      {title}
                    </h3>
                    <p className="font-sans text-stone-gray font-light text-[14px] md:text-[15px] leading-[1.55]">{desc}</p>
                  </div>

                  {i < 3 && (
                    <ArrowRight className="w-4 h-4 text-technical-bronze/40 mt-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contract & Technical Infrastructure Capability Grid ──── */}
        <section className="w-full bg-[#0B0B0B] border-t border-[#242424] py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-brushed-silver uppercase">
                Contract &amp; Technical Infrastructure Capabilities
              </span>
              <div className="flex-1 h-px bg-[#242424]" />
            </div>

            {/* Three Equal Desktop Columns / Stacked on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {operatingGroups.map((group) => (
                <div key={group.groupNum} className="flex flex-col">
                  {/* Group Header with thin Bronze top rule */}
                  <div className="border-t border-technical-bronze pt-5 mb-10">
                    <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-technical-bronze uppercase block mb-1.5">
                      {group.groupNum}
                    </span>
                    <h3 className="font-heading text-[18px] md:text-[22px] font-semibold tracking-tight text-pure-white uppercase leading-[1.1]">
                      {group.groupTitle}
                    </h3>
                  </div>

                  {/* Four Capabilities Per Group */}
                  <div className="flex flex-col gap-9">
                    {group.capabilities.map(({ title, desc, Icon }) => (
                      <div key={title} className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-brushed-silver flex-shrink-0" strokeWidth={1.25} />
                          <h4 className="font-heading text-[16px] md:text-[18px] font-medium tracking-tight text-pure-white uppercase leading-[1.15]">
                            {title}
                          </h4>
                        </div>
                        <p className="font-sans text-stone-gray font-light text-[14px] md:text-[15px] leading-[1.55] pl-7">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Restrained note beneath grid */}
            <div className="mt-16 md:mt-20 pt-6 border-t border-[#1e1e1e]">
              <p className="font-mono text-[11px] md:text-[12px] text-brushed-silver/70 tracking-wide">
                * Specialized execution may be delivered in coordination with qualified technical partners where required.
              </p>
            </div>
          </div>
        </section>

        {/* ── Technical Operations Dashboard System ─────────── */}
        <section className="w-full bg-[#0f0f0f] border-t border-[#242424] py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-brushed-silver uppercase">Integrated Operations Architecture</span>
              <div className="flex-1 h-px bg-[#242424]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

              {/* Left: system list */}
              <div className="flex flex-col gap-0">
                {techOpsSummary.map(({ Icon, label }, i) => (
                  <div
                    key={label}
                    className={`flex items-center gap-4 py-4 ${i < techOpsSummary.length - 1 ? 'border-b border-[#1e1e1e]' : ''} group cursor-default`}
                  >
                    <Icon className="w-4 h-4 text-technical-bronze/50 flex-shrink-0 group-hover:text-technical-bronze transition-colors" strokeWidth={1.25} />
                    <span className="font-mono text-[11px] md:text-[12px] tracking-[0.18em] text-stone-gray uppercase group-hover:text-pure-white transition-colors">
                      {label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#2a2a2a] ml-auto group-hover:text-technical-bronze/50 transition-colors" />
                  </div>
                ))}
              </div>

              {/* Right: visual panel */}
              <div className="border border-[#242424] bg-[#0B0B0B] p-8 md:p-10">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-8 border-b border-[#242424] pb-6">
                  <div className="flex items-center gap-3">
                    <BrandLogo variant="monogram-only" scheme="white" size={28} className="opacity-60" />
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] text-brushed-silver uppercase">Program Overview</p>
                      <p className="font-mono text-[11px] tracking-[0.15em] text-[#5a5a5a] uppercase mt-0.5">Integrated Operations Dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {['Contracts', 'Deliverables', 'Milestones', 'Risk Status', 'Action Items'].map(t => (
                      <div key={t} className="h-1.5 w-1.5 rounded-full bg-[#2a2a2a]" />
                    ))}
                  </div>
                </div>

                {/* Mock metric rows */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Quality Metrics', val: '98.4%', sub: 'Acceptance Rate' },
                    { label: 'Delivery Performance', val: 'ON TRACK', sub: '12/14 Milestones' },
                    { label: 'Supplier Status', val: '6 ACTIVE', sub: '2 Pending Review' },
                    { label: 'Compliance Control', val: '100%', sub: 'Access Verified' },
                  ].map(({ label, val, sub }) => (
                    <div key={label} className="border border-[#1e1e1e] p-4">
                      <p className="font-mono text-[11px] tracking-[0.18em] text-brushed-silver uppercase mb-3">{label}</p>
                      <p className="font-heading text-2xl md:text-3xl font-semibold text-technical-bronze leading-none mb-1">{val}</p>
                      <p className="font-mono text-[11px] text-[#5a5a5a] uppercase tracking-wider">{sub}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#1e1e1e] pt-5 flex items-center justify-between">
                  <BrandLogo variant="compact-lockup" className="opacity-20" />
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[#5a5a5a] uppercase">Gov &amp; Aerospace Division</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Industries We Empower ────────────────────────────── */}
        <section className="w-full border-t border-[#242424] bg-[#0B0B0B] py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-14">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-brushed-silver uppercase">
                Industries We Empower
              </span>
              <div className="flex-1 h-px bg-[#242424]" />
            </div>

            {/* 6 Image-backed Cards Grid: 3 cols desktop, 2 tablet, 1 mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {industryCards.map(({ title, desc, image, srcSet, sizes, alt, objectPos, Icon }) => (
                <div
                  key={title}
                  className="group relative flex flex-col bg-[#0f0f0f] border border-[#242424] hover:border-technical-bronze/60 transition-colors duration-300 rounded-none overflow-hidden"
                >
                  {/* Image Container (aspect 3/2) */}
                  <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={image}
                      srcSet={srcSet || undefined}
                      sizes={srcSet ? sizes : undefined}
                      alt={alt}
                      width={800}
                      height={533}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover ${objectPos} filter saturate-[0.85] brightness-[0.92] contrast-[1.05] group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/25 to-transparent" />
                    
                    {/* Icon Badge Overlay */}
                    <div className="absolute bottom-3 left-4 p-2 bg-[#0B0B0B]/90 border border-[#242424] text-technical-bronze backdrop-blur-sm">
                      <Icon className="w-4 h-4" strokeWidth={1.25} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-7 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      {/* Bronze micro-rule */}
                      <div className="w-5 h-[1.5px] bg-technical-bronze mb-3" />
                      <h3 className="font-heading text-[18px] md:text-[20px] font-semibold tracking-tight text-pure-white uppercase leading-[1.1] mb-2.5">
                        {title}
                      </h3>
                      <p className="font-sans text-stone-gray font-light text-[14px] md:text-[15px] leading-[1.55]">
                        {desc}
                      </p>
                    </div>

                    {/* Understated Link */}
                    <div className="flex items-center gap-2 font-mono text-[11px] md:text-[12px] tracking-[0.18em] text-technical-bronze uppercase group-hover:text-pure-white transition-colors pt-3 border-t border-[#1e1e1e]">
                      <span>Explore Infrastructure</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final Mission Infrastructure CTA Banner ─────────────── */}
        <section id="contact" className="relative w-full bg-[#0B0B0B] border-t border-[#242424] min-h-[320px] md:min-h-[350px] lg:h-[360px] py-14 md:py-16 lg:py-0 px-6 md:px-12 flex items-center overflow-hidden">
          {/* Subtle Graphite Blueprint Linework & Far-Right Synergy Joint Image */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src={ctaSynergyBanner}
              alt="Precision engineered high-tolerance titanium structural joint component for aerospace applications"
              width={1400}
              height={450}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-right md:object-[85%_50%] filter saturate-[0.82] brightness-[0.92] contrast-[1.04]"
            />
            {/* Left and center carbon black gradient fade: guarantees 100% legibility and open copy space */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B] sm:via-[#0B0B0B]/90 md:via-[#0B0B0B]/80 to-transparent w-full md:w-[78%]" />
            <div className="absolute inset-0 bg-[#0B0B0B]/30" />

            {/* Graphite blueprint grid overlay */}
            <div className="absolute inset-0 opacity-[0.05]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="ctaBlueprintGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#A7A8A5" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaBlueprintGrid)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 items-center">
            {/* Left & Center Open Copy Area */}
            <div className="flex flex-col items-start max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-[1.5px] bg-technical-bronze flex-shrink-0" />
                <p className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-technical-bronze uppercase">
                  MISSION INFRASTRUCTURE
                </p>
              </div>

              {/* Headline */}
              <h2 className="font-heading text-[clamp(30px,3vw,46px)] font-semibold tracking-tight text-pure-white uppercase leading-[1.08] mb-4">
                BUILD READINESS INTO EVERY PROGRAM.
              </h2>

              {/* Body */}
              <p className="font-sans text-brushed-silver font-light text-[16px] md:text-[18px] leading-[1.6] mb-8 max-w-[65ch]">
                Start with a focused review of your contract, compliance, technical, supplier, quality, and execution infrastructure.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="mailto:contact@novagentec.com"
                  className="inline-flex items-center justify-center gap-3 bg-technical-bronze text-carbon-black border border-technical-bronze px-8 py-3.5 font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase font-semibold transition-colors hover:bg-technical-bronze/90 w-full sm:w-auto flex-shrink-0"
                >
                  START THE CONVERSATION
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-3 border border-[#2a2a2a] text-brushed-silver px-8 py-3.5 font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase transition-colors hover:border-technical-bronze/60 hover:text-pure-white w-full sm:w-auto flex-shrink-0"
                >
                  RETURN TO DIVISIONS
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Mobile / Tablet Decorative Image Object beneath content */}
            <div className="lg:hidden mt-6 w-full flex justify-center">
              <div className="w-full max-w-[340px] aspect-[16/9] border border-[#242424] overflow-hidden relative bg-[#0a0a0a]">
                <img
                  src={ctaSynergyBanner}
                  alt="Detail view of precision engineered titanium structural joint component"
                  width={600}
                  height={338}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter saturate-[0.85] brightness-[0.92] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

