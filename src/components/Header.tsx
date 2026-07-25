import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  theme?: 'light' | 'dark';
}

export function Header({ theme = 'light' }: HeaderProps) {
  const isDark = theme === 'dark';
  const location = useLocation();
  const pathname = location.pathname;

  const isCommercial = pathname === '/commercial';
  const isGovAero = pathname === '/government-aerospace';

  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={[
        'h-[80px] w-full flex items-center justify-between px-6 md:px-12 fixed top-0 z-50 backdrop-blur-md transition-colors duration-200',
        isDark
          ? 'bg-[#0B0B0B]/98 border-b border-[#242424]'
          : 'bg-[#F3F2EE]/98 border-b border-[#D7D5CF]',
      ].join(' ')}
    >
      {/* Wordmark logo aligned left */}
      <a
        href="/"
        aria-label="NOVAGENTEC home"
        className="flex items-center hover:opacity-85 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black rounded-sm"
      >
        {isDark
          ? <BrandLogo variant="government-header" />
          : <BrandLogo variant="commercial-header" />
        }
      </a>

      {/* Desktop navigation aligned right */}
      <nav
        className={[
          'hidden md:flex items-center gap-7 lg:gap-9 font-mono text-[12px] font-medium tracking-[0.14em] uppercase',
          isDark ? 'text-stone-gray' : 'text-carbon-black',
        ].join(' ')}
      >
        <a
          href="/#approach"
          className="hover:text-graphite transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black"
        >
          Approach
        </a>

        {/* Divisions dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDivisionsOpen(true)}
          onMouseLeave={() => setDivisionsOpen(false)}
        >
          <button
            onClick={() => setDivisionsOpen(!divisionsOpen)}
            className={`flex items-center gap-1.5 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black ${
              isCommercial || isGovAero
                ? 'text-carbon-black font-semibold'
                : 'hover:text-graphite'
            }`}
            aria-expanded={divisionsOpen}
          >
            <span>Divisions</span>
            {isCommercial && (
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brushed-silver ml-0.5" />
            )}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${divisionsOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {divisionsOpen && (
            <div className="absolute top-full left-0 w-64 pt-2 shadow-lg z-50 animate-in fade-in duration-150">
              <div className={`border p-2 ${isDark ? 'bg-[#0B0B0B] border-[#242424] text-pure-white' : 'bg-[#F3F2EE] border-[#D7D5CF] text-carbon-black'}`}>
                <a
                  href="/commercial"
                  className={`flex items-center justify-between px-3 py-2.5 text-[11px] tracking-[0.14em] uppercase font-mono transition-colors ${
                    isCommercial
                      ? 'bg-stone-gray/20 font-semibold text-carbon-black border-l-2 border-[#A7A8A5]'
                      : 'hover:bg-stone-gray/10 text-graphite'
                  }`}
                >
                  <span>Commercial Small Business</span>
                  {isCommercial && <span className="w-1.5 h-1.5 rounded-full bg-[#A7A8A5]" />}
                </a>
                <a
                  href="/government-aerospace"
                  className={`flex items-center justify-between px-3 py-2.5 text-[11px] tracking-[0.14em] uppercase font-mono transition-colors ${
                    isGovAero
                      ? 'bg-stone-gray/20 font-semibold text-pure-white border-l-2 border-technical-bronze'
                      : 'hover:bg-stone-gray/10 text-graphite'
                  }`}
                >
                  <span>Government &amp; Aerospace</span>
                  {isGovAero && <span className="w-1.5 h-1.5 rounded-full bg-technical-bronze" />}
                </a>
              </div>
            </div>
          )}
        </div>

        <a
          href="/#solutions"
          className="hover:text-graphite transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black"
        >
          Solutions
        </a>

        <a
          href="/#insights"
          className="hover:text-graphite transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black"
        >
          Insights
        </a>

        <a
          href="/#about"
          className="hover:text-graphite transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black"
        >
          About
        </a>

        <a
          href="#contact"
          className={[
            'px-5 py-2 border font-mono text-[12px] font-medium tracking-[0.14em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black',
            isDark
              ? 'border-technical-bronze text-technical-bronze hover:bg-technical-bronze hover:text-carbon-black'
              : 'border-carbon-black text-carbon-black hover:bg-carbon-black hover:text-pure-white',
          ].join(' ')}
        >
          Contact
        </a>
      </nav>

      {/* Mobile menu trigger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black rounded-sm ${
          isDark ? 'text-pure-white' : 'text-carbon-black'
        }`}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed inset-x-0 top-[80px] bottom-0 z-40 p-6 flex flex-col justify-between overflow-y-auto ${
          isDark ? 'bg-[#0B0B0B] text-pure-white border-t border-[#242424]' : 'bg-[#F3F2EE] text-carbon-black border-t border-[#D7D5CF]'
        }`}>
          <div className="flex flex-col gap-5 font-mono text-[13px] tracking-[0.14em] uppercase font-medium">
            <a
              href="/#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center border-b border-stone-gray/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black"
            >
              Approach
            </a>

            <div className="flex flex-col gap-2 py-1">
              <div className="text-[11px] text-brushed-silver tracking-[0.18em] font-semibold">
                DIVISIONS
              </div>
              <a
                href="/commercial"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[44px] flex items-center justify-between px-3 border-l-2 ${
                  isCommercial ? 'border-[#A7A8A5] font-semibold text-carbon-black bg-stone-gray/20' : 'border-transparent text-graphite'
                }`}
              >
                Commercial Small Business
                {isCommercial && <span className="w-2 h-2 rounded-full bg-[#A7A8A5]" />}
              </a>
              <a
                href="/government-aerospace"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[44px] flex items-center justify-between px-3 border-l-2 ${
                  isGovAero ? 'border-technical-bronze font-semibold text-carbon-black bg-stone-gray/20' : 'border-transparent text-graphite'
                }`}
              >
                Government &amp; Aerospace
                {isGovAero && <span className="w-2 h-2 rounded-full bg-technical-bronze" />}
              </a>
            </div>

            <a
              href="/#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center border-b border-stone-gray/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black"
            >
              Solutions
            </a>

            <a
              href="/#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center border-b border-stone-gray/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black"
            >
              Insights
            </a>

            <a
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center border-b border-stone-gray/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black"
            >
              About
            </a>
          </div>

          <div className="pt-6">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full min-h-[48px] flex items-center justify-center border font-mono text-[12px] font-semibold tracking-[0.18em] uppercase ${
                isDark
                  ? 'border-technical-bronze text-technical-bronze bg-transparent active:bg-technical-bronze active:text-carbon-black'
                  : 'border-carbon-black text-carbon-black bg-transparent active:bg-carbon-black active:text-pure-white'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

