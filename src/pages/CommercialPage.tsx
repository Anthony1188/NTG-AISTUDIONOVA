import { ArrowRight, Rocket, Target, Settings, TrendingUp, Globe, Users, Calendar, Zap, BarChart2, MessageCircle, Truck, HardHat, Leaf, Wrench, Home, ShoppingBag } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import commercialHero from '../assets/images/commercial_card_bg_1784713078439.jpg';
import ctaBanner from '../assets/images/regenerated_image_1784940388883.png';
import haulingImage from '../assets/images/regenerated_image_1784940390256.png';
import constructionImage from '../assets/images/regenerated_image_1784940616833.png';
import automotiveImage from '../assets/images/regenerated_image_1784940618471.png';
import { BrandLogo } from '../components/BrandLogo';

/* ─── Data ────────────────────────────────────────────────── */

const valueProps = [
  {
    Icon: TrendingUp,
    title: 'BUILT FOR GROWTH',
    desc: 'Systems that scale as your business grows.',
  },
  {
    Icon: Target,
    title: 'OPERATIONAL CLARITY',
    desc: 'Organized workflows that reduce friction and waste.',
  },
  {
    Icon: Users,
    title: 'CUSTOMER FOCUSED',
    desc: 'Better experiences that turn leads into loyalty.',
  },
  {
    Icon: BarChart2,
    title: 'MEASURABLE RESULTS',
    desc: 'Data that supports stronger decisions and performance.',
  },
];

const services = [
  {
    num: '01',
    Icon: Rocket,
    title: 'LAUNCH',
    desc: 'Establish the foundation through positioning, brand, digital presence, and clear customer entry points.',
  },
  {
    num: '02',
    Icon: Target,
    title: 'ATTRACT',
    desc: 'Build visibility, messaging, acquisition pathways, and qualified lead flow.',
  },
  {
    num: '03',
    Icon: Settings,
    title: 'OPERATE',
    desc: 'Connect CRM, intake, scheduling, communication, workflows, and customer execution.',
  },
  {
    num: '04',
    Icon: TrendingUp,
    title: 'SCALE',
    desc: 'Improve automation, reporting, retention, capacity, and long-term infrastructure.',
  },
];

const systemStages = [
  {
    title: 'WEBSITE',
    desc: 'The digital foundation that presents, explains, and converts.',
    Icon: Globe,
  },
  {
    title: 'LEAD CAPTURE',
    desc: 'Forms, calls, chat, and intake pathways that capture real demand.',
    Icon: Target,
  },
  {
    title: 'CRM',
    desc: 'One organized location for leads, customers, status, and communication.',
    Icon: Users,
  },
  {
    title: 'SCHEDULING',
    desc: 'Connected booking, estimates, appointments, and job coordination.',
    Icon: Calendar,
  },
  {
    title: 'AUTOMATION',
    desc: 'Reliable workflows that reduce repetitive work and prevent missed actions.',
    Icon: Zap,
  },
  {
    title: 'FOLLOW-UP',
    desc: 'Structured communication that supports conversion, retention, and loyalty.',
    Icon: MessageCircle,
  },
  {
    title: 'REPORTING',
    desc: 'Clear visibility into performance, opportunities, and bottlenecks.',
    Icon: BarChart2,
  },
];

const industryCards = [
  {
    title: 'HAULING & LOCAL LOGISTICS',
    desc: 'Dispatch, routing, communication, and operational systems that keep jobs moving.',
    Icon: Truck,
    image: haulingImage,
  },
  {
    title: 'CONSTRUCTION & CONTRACTING',
    desc: 'Lead flow, estimates, scheduling, project communication, and customer follow-up.',
    Icon: HardHat,
    image: constructionImage,
  },
  {
    title: 'LANDSCAPING & OUTDOOR SERVICES',
    desc: 'Seasonal scheduling, recurring services, customer communication, and retention systems.',
    Icon: Leaf,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'AUTOMOTIVE SERVICE',
    desc: 'Appointments, reminders, estimates, workflow visibility, and customer follow-up.',
    Icon: Wrench,
    image: automotiveImage,
  },
  {
    title: 'HVAC & HOME SERVICES',
    desc: 'Service scheduling, intake, dispatch, maintenance plans, and repeat-business systems.',
    Icon: Home,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'INDEPENDENT RETAIL & CLOTHING',
    desc: 'Local visibility, customer experience, retention, inventory communication, and brand infrastructure.',
    Icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
  },
];

/* ─── Component ───────────────────────────────────────────── */

export default function CommercialPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F3F2EE]">
      <Header />

      <main className="flex-1 pt-[80px]">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative w-full min-h-[88vh] flex items-stretch overflow-hidden">

          {/* Drafting grid background */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="draftGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0B0B0B" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#draftGrid)" />
            </svg>
          </div>

          {/* Left: copy */}
          <div className="relative z-10 flex flex-col justify-center w-full md:w-[48%] px-8 md:px-16 lg:px-20 py-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-[1.5px] bg-brushed-silver flex-shrink-0" />
              <p className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-brushed-silver uppercase font-medium">
                Commercial Small Business Division
              </p>
            </div>
            <h1 className="font-heading text-[clamp(40px,4.5vw,68px)] font-semibold tracking-tight text-carbon-black uppercase leading-[1.06] mb-6">
              Business Growth<br />Infrastructure.
            </h1>
            <div className="w-12 h-[2px] bg-brushed-silver mb-8" />
            <p className="font-sans text-graphite font-light text-[16px] md:text-[18px] leading-[1.6] max-w-[65ch] mb-10">
              NOVAGENTEC Commercial designs the brand, customer, and operational infrastructure that helps small businesses operate with clarity and scale with confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-carbon-black text-pure-white px-8 py-4 font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase font-semibold transition-opacity hover:opacity-85"
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#approach"
                className="inline-flex items-center gap-3 border border-graphite/40 text-carbon-black px-8 py-4 font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase font-semibold transition-colors hover:bg-carbon-black hover:text-pure-white hover:border-carbon-black"
              >
                Explore Our Approach
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[56%]">
            <img
              src={commercialHero}
              alt="Architectural modern small business operations environment and growth infrastructure"
              width={1200}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-[55%_45%] filter saturate-[0.88] brightness-[0.96] contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F3F2EE] via-[#F3F2EE]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F3F2EE]/20 to-transparent" />
          </div>
        </section>

        {/* ── Four-Value Strip ───────────────────────────────── */}
        <section className="w-full bg-[#F3F2EE] border-t border-b border-[#D7D5CF] py-11 md:py-12 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-0">
            {valueProps.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex flex-col gap-2.5 ${
                  i < 3 ? 'border-b border-[#D7D5CF] pb-8 sm:pb-0' : ''
                } ${
                  i < 2 ? 'sm:border-b sm:border-[#D7D5CF] sm:pb-8 lg:sm:border-b-0 lg:sm:pb-0' : ''
                } ${
                  i % 2 === 0 ? 'sm:border-r sm:border-[#D7D5CF] sm:pr-8' : 'sm:pl-8'
                } ${
                  i < 3 ? 'lg:border-r lg:border-[#D7D5CF] lg:pr-8' : 'lg:border-r-0 lg:pr-0'
                } ${
                  i > 0 ? 'lg:pl-8' : 'lg:pl-0'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5 text-graphite flex-shrink-0" strokeWidth={1.25} />
                  <h2 className="font-heading text-[14px] md:text-[15px] font-semibold tracking-[0.14em] text-carbon-black uppercase leading-tight">
                    {title}
                  </h2>
                </div>
                <p className="font-sans text-graphite font-light text-[14px] md:text-[15px] leading-[1.55] max-w-[280px]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Service Architecture (Launch · Attract · Operate · Scale) ── */}
        <section id="approach" className="w-full bg-[#ECEAE6] border-t border-b border-[#D7D5CF]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[290px] lg:min-h-[310px]">
            {services.map(({ num, Icon, title, desc }, i) => (
              <div
                key={num}
                className={`group relative p-8 md:p-9 lg:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-[#E4E2DC] border-[#D7D5CF] ${
                  i < 3 ? 'border-b lg:border-b-0 lg:border-r' : ''
                } ${
                  i === 0 ? 'md:border-r md:border-b' : ''
                } ${
                  i === 1 ? 'md:border-b md:border-r-0' : ''
                } ${
                  i === 2 ? 'md:border-r md:border-b-0' : ''
                } ${
                  i === 3 ? 'md:border-r-0 md:border-b-0' : ''
                }`}
              >
                {/* Top: Stage number & Minimal line icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-brushed-silver uppercase font-semibold">
                    {num}
                  </span>
                  <Icon
                    className="w-5 h-5 text-graphite group-hover:text-carbon-black transition-transform duration-200 group-hover:-translate-y-0.5"
                    strokeWidth={1.25}
                  />
                </div>

                {/* Bottom: Stage title (dominates) & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-[22px] md:text-[24px] lg:text-[26px] font-semibold tracking-tight text-carbon-black uppercase leading-[1.1]">
                    {title}
                  </h3>
                  <p className="font-sans text-graphite font-light text-[14px] md:text-[15px] leading-[1.6]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Connected Business Infrastructure ─────────────────── */}
        <section className="w-full bg-[#F3F2EE] py-20 md:py-28 px-6 md:px-12 border-t border-b border-[#D7D5CF] relative overflow-hidden">
          {/* Subtle drafting grid background */}
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#A7A8A5 0.75px, transparent 0.75px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col gap-12 lg:gap-14">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#D7D5CF]">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-brushed-silver uppercase mb-3 font-semibold">
                  CONNECTED BUSINESS INFRASTRUCTURE
                </p>
                <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[46px] font-semibold tracking-tight text-carbon-black uppercase leading-[1.08]">
                  YOUR SYSTEMS.<br />
                  WORKING TOGETHER.
                </h2>
              </div>
              <p className="font-sans text-graphite font-light text-[15px] md:text-[16px] leading-[1.6] max-w-[540px]">
                We connect the systems that power your business so information moves clearly, follow-up happens consistently, and every qualified opportunity moves forward.
              </p>
            </div>

            {/* Flat Architectural System Map (Desktop & Tablet) */}
            <div className="hidden md:flex flex-col gap-8 relative p-8 md:p-10 bg-[#FAF9F5] border border-[#D7D5CF]">
              {/* Technical indicators */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#A7A8A5] tracking-[0.2em] uppercase pb-2 border-b border-[#D7D5CF]/60">
                <span>+ ARCHITECTURAL_SYSTEM_MAP</span>
                <span>INTEGRATED_INFRASTRUCTURE_BUS</span>
              </div>

              {/* Row 1: Primary Demand & Intake (WEBSITE -> LEAD CAPTURE -> CRM) */}
              <div className="grid grid-cols-3 gap-6 relative">
                {systemStages.slice(0, 3).map((stage, idx) => {
                  const { Icon, title, desc } = stage;
                  return (
                    <div
                      key={title}
                      className="relative flex flex-col justify-between p-6 bg-[#F3F2EE] border border-[#D7D5CF] transition-colors hover:border-[#A7A8A5] group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] tracking-[0.18em] text-[#A7A8A5] uppercase font-semibold">
                          STAGE 0{idx + 1}
                        </span>
                        <Icon className="w-5 h-5 text-graphite group-hover:text-carbon-black transition-colors" strokeWidth={1.25} />
                      </div>
                      <div>
                        <h3 className="font-heading text-[16px] font-semibold tracking-[0.08em] text-carbon-black uppercase mb-2">
                          {title}
                        </h3>
                        <p className="font-sans text-graphite font-light text-[13px] md:text-[14px] leading-[1.5]">
                          {desc}
                        </p>
                      </div>

                      {/* Thin Connector node indicator between top cards */}
                      {idx < 2 && (
                        <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#A7A8A5] border border-[#4B4B49]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Connecting Central System Bus Line */}
              <div className="relative py-2 flex items-center justify-between">
                <div className="h-px bg-[#D7D5CF] w-full relative">
                  <div className="absolute left-[16.66%] -top-1 w-2 h-2 rounded-full bg-[#A7A8A5] border border-[#4B4B49]" />
                  <div className="absolute left-[50%] -top-1 w-2 h-2 rounded-full bg-[#A7A8A5] border border-[#4B4B49]" />
                  <div className="absolute right-[16.66%] -top-1 w-2 h-2 rounded-full bg-[#A7A8A5] border border-[#4B4B49]" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-[#FAF9F5] px-4 font-mono text-[10px] tracking-[0.2em] text-[#A7A8A5] uppercase font-medium">
                  AUTOMATED WORKFLOW &amp; DATA SYNCHRONIZATION
                </div>
              </div>

              {/* Row 2: Operations & Execution (SCHEDULING -> AUTOMATION -> FOLLOW-UP -> REPORTING) */}
              <div className="grid grid-cols-4 gap-5 relative">
                {systemStages.slice(3, 7).map((stage, idx) => {
                  const { Icon, title, desc } = stage;
                  return (
                    <div
                      key={title}
                      className="relative flex flex-col justify-between p-5 bg-[#F3F2EE] border border-[#D7D5CF] transition-colors hover:border-[#A7A8A5] group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] tracking-[0.18em] text-[#A7A8A5] uppercase font-semibold">
                          STAGE 0{idx + 4}
                        </span>
                        <Icon className="w-5 h-5 text-graphite group-hover:text-carbon-black transition-colors" strokeWidth={1.25} />
                      </div>
                      <div>
                        <h3 className="font-heading text-[15px] font-semibold tracking-[0.08em] text-carbon-black uppercase mb-2">
                          {title}
                        </h3>
                        <p className="font-sans text-graphite font-light text-[13px] md:text-[14px] leading-[1.5]">
                          {desc}
                        </p>
                      </div>

                      {/* Thin Connector node indicator between bottom cards */}
                      {idx < 3 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#A7A8A5] border border-[#4B4B49]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Logical Vertical Sequence */}
            <div className="md:hidden flex flex-col gap-4">
              {systemStages.map((stage, idx) => {
                const { Icon, title, desc } = stage;
                return (
                  <div key={title} className="flex flex-col p-5 bg-[#FAF9F5] border border-[#D7D5CF] relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] tracking-[0.18em] text-[#A7A8A5] font-semibold">0{idx + 1}</span>
                        <h3 className="font-heading text-[15px] font-semibold tracking-[0.08em] text-carbon-black uppercase">
                          {title}
                        </h3>
                      </div>
                      <Icon className="w-5 h-5 text-graphite" strokeWidth={1.25} />
                    </div>
                    <p className="font-sans text-graphite font-light text-[13px] leading-[1.5]">
                      {desc}
                    </p>
                    {idx < systemStages.length - 1 && (
                      <div className="w-px h-3 bg-[#D7D5CF] mx-auto -mb-4 mt-2 relative z-10" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Industries We Help Build ─────────────────────────────────── */}
        <section className="w-full bg-[#F3F2EE] py-20 md:py-28 px-6 md:px-12 border-t border-b border-[#D7D5CF]">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
            {/* Section Header */}
            <div>
              <p className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-brushed-silver uppercase font-semibold">
                INDUSTRIES WE HELP BUILD
              </p>
            </div>

            {/* 3 cols desktop, 2 cols tablet, 1 col mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {industryCards.map(({ title, desc, Icon, image }) => (
                <div
                  key={title}
                  className="group flex flex-col h-full bg-[#FAF9F5] border border-[#D7D5CF] transition-colors duration-200 hover:border-[#A7A8A5]"
                >
                  {/* Card Image */}
                  <div className="w-full aspect-[16/10] overflow-hidden relative border-b border-[#D7D5CF] bg-[#E8E6E1]">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover saturate-[0.82] contrast-[1.02] transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col justify-between flex-1 p-6 md:p-7 bg-[#FAF9F5]">
                    <div className="flex flex-col gap-3">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-graphite flex-shrink-0 mt-0.5" strokeWidth={1.25} />
                        <h3 className="font-heading text-[15px] md:text-[16px] font-semibold tracking-[0.06em] text-carbon-black uppercase leading-snug">
                          {title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-graphite font-light text-[13px] md:text-[14px] leading-[1.6]">
                        {desc}
                      </p>
                    </div>

                    {/* Directional Arrow */}
                    <div className="pt-6 flex items-center">
                      <span className="font-mono text-[14px] text-graphite group-hover:text-carbon-black group-hover:translate-x-1.5 transition-all duration-200">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final Commercial CTA Section ──────────────────────────────── */}
        <section id="contact" className="w-full bg-[#0B0B0B] text-pure-white relative overflow-hidden min-h-[340px] lg:min-h-[380px] flex items-center border-t border-[#242424]">
          {/* Blueprint drafting background image with Synergy Joint object on far right */}
          <div className="absolute inset-0 z-0">
            <img
              src={ctaBanner}
              alt="NOVAGENTEC Systems Infrastructure Blueprint"
              className="w-full h-full object-cover object-right opacity-60 mix-blend-luminosity"
            />
            {/* Dark gradient overlay keeping copy area on left 55-60% clean and highly legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/90 via-60% to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left 55-60% content container */}
            <div className="max-w-2xl flex flex-col gap-5">
              <p className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-[#A7A8A5] uppercase font-semibold">
                READY TO BUILD
              </p>

              <h2 className="font-heading text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-semibold tracking-tight text-[#F3F2EE] uppercase leading-[1.05]">
                BUILD THE SYSTEM<br />
                BEHIND YOUR GROWTH.
              </h2>

              <p className="font-sans text-[#A7A8A5] font-light text-[15px] md:text-[16px] leading-[1.6] max-w-[54ch]">
                Start with a focused review of your brand, customer journey, systems, workflows, and operational bottlenecks.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="mailto:contact@novagentec.com"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#F3F2EE] text-[#0B0B0B] font-mono text-[11px] md:text-[12px] tracking-[0.16em] uppercase font-semibold transition-colors duration-200 hover:bg-[#A7A8A5]"
                >
                  <span>START THE CONVERSATION</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#A7A8A5] text-[#F3F2EE] bg-transparent font-mono text-[11px] md:text-[12px] tracking-[0.16em] uppercase font-semibold transition-colors duration-200 hover:bg-[#A7A8A5]/10 hover:border-[#F3F2EE]"
                >
                  <span>EXPLORE OUR APPROACH</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

