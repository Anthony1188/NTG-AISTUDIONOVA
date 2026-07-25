import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function NovagentecArchitecture() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#0a0a0a] text-[#f3f2ee] font-sans selection:bg-gray-700">
      <Header theme="dark" />

      <main className="flex-1 pt-[80px]">
        {/* 01 THE HERO SECTION */}
        <section className="relative px-6 py-24 md:py-32 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center border-b border-gray-800">
          <div className="max-w-3xl">
            {/* Eyebrow / Minimal Shared Header Context */}
            <p className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">
              Engineered Business Synergy
            </p>
            
            {/* H1 - High-impact tracking */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight uppercase mb-6 text-white leading-tight">
              Engineered For Profit.<br />
              <span className="text-gray-400">Built From Experience.</span>
            </h1>
            
            {/* Body Copy - Max 3 Lines Rule Enforced */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              NOVAGENTEC is built on 25 years of small business experience and the successful founding of three previous companies. We design intelligent business ecosystems focused on one outcome: providing results and profit over tools and systems.
            </p>
            
            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#sequence"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold tracking-wide uppercase text-sm hover:bg-gray-200 transition-colors duration-200"
              >
                Explore Our Approach →
              </a>
              <a
                href="mailto:contact@novagentec.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white font-semibold tracking-wide uppercase text-sm hover:border-gray-400 transition-colors duration-200"
              >
                Speak With A Founder →
              </a>
            </div>
          </div>
        </section>

        {/* 02 CAPABILITY ARCHITECTURE: 4-Step Sequence */}
        <section id="sequence" className="px-6 py-24 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 text-white">
              We Are Practitioners, Not Just Technologists.
            </h2>
            <p className="text-lg text-gray-400">
              We replace chaos with a phased growth structure designed to deliver results, not just new software subscriptions.
            </p>
          </div>

          {/* Card-Based UI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 01 */}
            <div className="p-8 border border-gray-800 bg-[#111111] hover:border-gray-500 transition-colors duration-300 flex flex-col h-full">
              <span className="text-gray-500 font-mono text-sm mb-6 block">01</span>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">Assess</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Evaluate your existing processes, technology stack, team workflows, and growth bottlenecks.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                We understand the mission, vision, goals, and constraints of your business.
              </p>
            </div>

            {/* Card 02 */}
            <div className="p-8 border border-gray-800 bg-[#111111] hover:border-gray-500 transition-colors duration-300 flex flex-col h-full">
              <span className="text-gray-500 font-mono text-sm mb-6 block">02</span>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">Align</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Connect leadership, teams, and operational priorities. Technology alone does not create transformation.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                We ensure your strategy dictates the tools, not the other way around.
              </p>
            </div>

            {/* Card 03 */}
            <div className="p-8 border border-gray-800 bg-[#111111] hover:border-gray-500 transition-colors duration-300 flex flex-col h-full">
              <span className="text-gray-500 font-mono text-sm mb-6 block">03</span>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">Integrate</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Connect systems, software, data, and workflows for structured, phased growth.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                We utilize AI and agentic automation strictly as a service to provide results and profit.
              </p>
            </div>

            {/* Card 04 */}
            <div className="p-8 border border-gray-800 bg-[#111111] hover:border-gray-500 transition-colors duration-300 flex flex-col h-full">
              <span className="text-gray-500 font-mono text-sm mb-6 block">04</span>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">Synergize</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Remove friction and repetitive effort through strategic automation.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                The outcome is not another tool; it is a business that functions as a coordinated, intelligent system.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer theme="dark" />
    </div>
  );
}
