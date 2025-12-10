import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, Download, Mail, Sparkles, CircleDot, TrendingUp, Zap } from 'lucide-react';

const NextStageWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [leadForm, setLeadForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActivePage(sectionId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = () => {
    if (contactForm.name && contactForm.email && contactForm.message) {
      alert('Thank you. I\'ll respond within 24 hours.');
      setContactForm({ name: '', email: '', message: '' });
    }
  };

  const handleLeadSubmit = () => {
    if (leadForm.name && leadForm.email) {
      setSubmitted(true);
    }
  };

  // Navigation
  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      scrollY > 50 ? 'bg-[#F5F1EA]/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center h-24">
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#9B7E6A] to-[#6B5848] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg">
              <span className="text-white font-black text-xl">N</span>
            </div>
            <span className="text-2xl font-black tracking-tight">
              <span className="text-[#3D3027]">Next Stage</span>
              <span className="text-[#9B7E6A] ml-2">Strategy</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-12">
            {['services', 'about', 'resources', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => scrollToSection(page)}
                className={`capitalize text-sm font-semibold tracking-wider uppercase transition-all duration-300 relative group ${
                  activePage === page ? 'text-[#9B7E6A]' : 'text-[#3D3027]/70 hover:text-[#9B7E6A]'
                }`}
              >
                {page}
                <span className={`absolute -bottom-2 left-0 h-px bg-gradient-to-r from-[#9B7E6A] to-[#C9A581] transition-all duration-500 ${
                  activePage === page ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-[#9B7E6A] to-[#6B5848] text-white text-sm font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-none relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B5848] to-[#9B7E6A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#3D3027]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F1EA]/98 backdrop-blur-xl border-t border-[#9B7E6A]/20">
          <div className="px-8 py-6 space-y-4">
            {['home', 'services', 'about', 'resources', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => scrollToSection(page)}
                className="capitalize block w-full text-left px-6 py-4 text-lg font-semibold text-[#3D3027] hover:text-[#9B7E6A] hover:bg-white/50 rounded-sm transition-all duration-300"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div>
      {/* Hero - Luxury Editorial */}
      <div
        className="relative min-h-screen flex items-center justify-center px-8 lg:px-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F5F1EA 0%, #E8DFD3 50%, #F5F1EA 100%)',
        }}
      >
        {/* Animated gradient orb that follows mouse */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(155,126,106,0.4) 0%, transparent 70%)',
            left: `${mousePos.x - 300}px`,
            top: `${mousePos.y - 300}px`,
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#9B7E6A] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-[#9B7E6A]/20 rounded-full">
              <CircleDot className="text-[#9B7E6A]" size={16} />
              <span className="text-sm font-medium tracking-widest uppercase text-[#3D3027]">Strategic Consulting</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#3D3027] leading-[0.95] tracking-tighter">
              Strategy without
              <br />
              <span className="italic font-serif text-[#9B7E6A] relative inline-block">
                execution
                <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 400 12" fill="none">
                  <path
                    d="M0,6 Q100,0 200,6 T400,6"
                    stroke="#9B7E6A"
                    strokeWidth="2"
                    className="animate-draw"
                  />
                </svg>
              </span>
              <br />
              is just fiction
            </h1>

            <p className="text-xl sm:text-2xl text-[#3D3027]/70 max-w-3xl mx-auto leading-relaxed font-light">
              I help nonprofit leaders bridge the gap between ambitious vision and operational reality—building strategies designed for implementation, not shelves.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => scrollToSection('services')}
                className="group px-10 py-5 bg-gradient-to-r from-[#9B7E6A] to-[#6B5848] text-white text-sm font-bold tracking-widest uppercase hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Services
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B5848] to-[#9B7E6A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <button
                onClick={() => scrollToSection('resources')}
                className="px-10 py-5 bg-white/80 backdrop-blur-sm text-[#3D3027] text-sm font-bold tracking-widest uppercase border-2 border-[#3D3027] hover:bg-[#3D3027] hover:text-white transition-all duration-500"
              >
                Free Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#9B7E6A]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#9B7E6A]/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* The Problem - Luxury Cards */}
      <div className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#9B7E6A]" />
              <span className="text-sm font-medium tracking-widest uppercase text-[#9B7E6A]">The Challenge</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-[#3D3027] mb-6 tracking-tight">
              You've built something remarkable
            </h2>
            <p className="text-xl text-[#3D3027]/60 leading-relaxed font-light">
              Your passion and determination created impact. But to scale, you need more than vision—you need operational excellence. Here's where most organizations struggle:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                num: '01',
                title: 'Strategic drift',
                desc: 'Ambitious plans that remain aspirational, never translating into measurable progress or organizational change.'
              },
              {
                icon: Zap,
                num: '02',
                title: 'Operational chaos',
                desc: 'Teams trapped in reactive firefighting mode, unable to focus on strategic priorities that drive real impact.'
              },
              {
                icon: CircleDot,
                num: '03',
                title: 'Growth plateau',
                desc: 'The approaches that built your success no longer scale. You need new systems, not just new strategies.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-[#F5F1EA] to-white p-10 border border-[#9B7E6A]/20 hover:border-[#9B7E6A] transition-all duration-700 hover:shadow-2xl cursor-pointer"
                style={{
                  transform: `translateY(${scrollY * 0.02 * (i + 1)}px)`
                }}
              >
                <div className="absolute top-8 right-8 text-7xl font-black text-[#9B7E6A]/5 group-hover:text-[#9B7E6A]/10 transition-all duration-700">
                  {item.num}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#9B7E6A] to-[#6B5848] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <item.icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#3D3027] mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-[#3D3027]/60 leading-relaxed font-light">{item.desc}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#9B7E6A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Solution - Split Screen */}
      <div className="relative py-32 px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D3027] via-[#4A3A2E] to-[#3D3027]" />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(155,126,106,0.3),transparent_60%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(201,165,129,0.2),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A581]" />
                <span className="text-sm font-medium tracking-widest uppercase text-[#C9A581]">The Difference</span>
              </div>

              <h2 className="text-5xl font-black mb-8 tracking-tight">
                Strategic thinking meets operational mastery
              </h2>

              <p className="text-xl text-white/70 mb-8 leading-relaxed font-light">
                Most consultants live on one side of this divide. I've spent years mastering both—which means your strategies aren't just visionary, they're executable.
              </p>

              <div className="space-y-6">
                {[
                  'Realistic plans grounded in your actual capacity',
                  'Clear ownership and accountability at every level',
                  'Fixed scope with transparent outcomes',
                  'Implementation support, not just recommendations'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 border-2 border-[#C9A581] flex items-center justify-center mt-1 group-hover:bg-[#C9A581] transition-all duration-300">
                      <Check className="text-[#C9A581] group-hover:text-[#3D3027]" size={14} />
                    </div>
                    <span className="text-white/90 text-lg font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Premium stat cards */}
              <div className="space-y-6">
                {[
                  { label: 'Years Experience', value: '10+', desc: 'Strategic & operational leadership' },
                  { label: 'Sectors Served', value: '3', desc: 'Arts, education, nonprofit' },
                  { label: 'Implementation Rate', value: '95%', desc: 'Plans actually executed' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:border-[#C9A581] group cursor-pointer"
                    style={{
                      transform: `translateX(${scrollY * 0.03 * (i + 1)}px)`
                    }}
                  >
                    <div className="flex items-end justify-between mb-4">
                      <div className="text-5xl font-black text-white group-hover:text-[#C9A581] transition-colors duration-500">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium tracking-widest uppercase text-white/40">
                        {stat.label}
                      </div>
                    </div>
                    <p className="text-white/60 font-light">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages - Premium Grid */}
      <div className="py-32 px-8 lg:px-16 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#9B7E6A]" />
              <span className="text-sm font-medium tracking-widest uppercase text-[#9B7E6A]">Services</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#9B7E6A]" />
            </div>

            <h2 className="text-5xl sm:text-6xl font-black text-[#3D3027] mb-6 tracking-tight">
              Productized excellence
            </h2>
            <p className="text-xl text-[#3D3027]/60 leading-relaxed font-light">
              Fixed-scope engagements designed for maximum impact. Choose your entry point.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                level: 'Foundation',
                name: 'Strategy Session',
                price: '£750',
                duration: '3 hours',
                desc: 'Rapid clarity on your most pressing strategic challenge',
                features: ['3-hour intensive session', 'Pre-session analysis', '5 prioritized recommendations', 'Implementation roadmap', '48-hour delivery']
              },
              {
                level: 'Signature',
                name: 'Strategy to Delivery',
                price: '£2,200',
                duration: '3 weeks',
                desc: 'Transform vision into executable operational reality',
                features: ['Strategic capacity audit', 'Stakeholder alignment', '18-month implementation plan', '90-day sprint planning', 'Resource allocation', 'KPI framework', '30-day follow-up'],
                featured: true
              },
              {
                level: 'Comprehensive',
                name: 'Strategic Clarity',
                price: '£4,000',
                duration: '6 weeks',
                desc: 'Complete strategic transformation with board approval',
                features: ['10 stakeholder interviews', 'Organizational audit', 'Market analysis', '3-year strategic plan', 'Year 1 operations plan', 'Board presentation', 'Implementation toolkit']
              }
            ].map((pkg, i) => (
              <div
                key={i}
                className={`group relative bg-white border transition-all duration-700 hover:shadow-2xl ${
                  pkg.featured
                    ? 'border-[#9B7E6A] lg:-translate-y-8 shadow-xl'
                    : 'border-[#9B7E6A]/20 hover:border-[#9B7E6A]'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-8 px-6 py-2 bg-gradient-to-r from-[#9B7E6A] to-[#6B5848] text-white text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-10">
                  <div className="mb-8">
                    <div className="text-xs font-medium tracking-widest uppercase text-[#9B7E6A] mb-4">{pkg.level}</div>
                    <h3 className="text-3xl font-black text-[#3D3027] mb-2 tracking-tight">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-black text-[#3D3027]">{pkg.price}</span>
                      <span className="text-sm text-[#3D3027]/50 font-light">{pkg.duration}</span>
                    </div>
                    <p className="text-[#3D3027]/60 leading-relaxed font-light">{pkg.desc}</p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="text-[#9B7E6A] flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-[#3D3027]/70 text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-4 text-sm font-bold tracking-widest uppercase transition-all duration-500 ${
                      pkg.featured
                        ? 'bg-gradient-to-r from-[#9B7E6A] to-[#6B5848] text-white hover:shadow-xl'
                        : 'bg-[#F5F1EA] text-[#3D3027] hover:bg-[#3D3027] hover:text-white'
                    }`}
                  >
                    Begin Engagement
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-6 p-10 bg-white/60 backdrop-blur-sm border border-[#9B7E6A]/20">
              <p className="text-[#3D3027]/70 font-light">
                <span className="font-semibold text-[#3D3027]">Ongoing Partnership:</span> Fractional Strategist retainer at £1,500/month for continuous support
              </p>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-3 border-2 border-[#3D3027] text-[#3D3027] text-sm font-bold tracking-widest uppercase hover:bg-[#3D3027] hover:text-white transition-all duration-500"
              >
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-32 px-8 lg:px-16 bg-gradient-to-br from-[#3D3027] to-[#4A3A2E]">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="inline-block text-[#C9A581] mb-8" size={32} />
          <blockquote className="text-3xl sm:text-4xl font-light text-white/90 mb-8 leading-relaxed italic">
            "For the first time in our organization's history, everyone understands what we're trying to accomplish and who's responsible for what. The clarity is transformative."
          </blockquote>
          <div className="h-px w-24 bg-[#C9A581]/50 mx-auto mb-6" />
          <p className="text-[#C9A581] font-medium tracking-wider uppercase text-sm">
            Board Chair, Regional Arts Organization
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative py-32 px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1EA] to-[#E8DFD3]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl font-black text-[#3D3027] mb-8 tracking-tight">
            Ready to move forward?
          </h2>
          <p className="text-xl text-[#3D3027]/60 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Begin with our complimentary Strategic Health Check, or schedule a consultation to discuss your specific challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollToSection('resources')}
              className="px-10 py-5 bg-gradient-to-r from-[#9B7E6A] to-[#6B5848] text-white text-sm font-bold tracking-widest uppercase hover:shadow-2xl transition-all duration-500"
            >
              Free Assessment
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-10 py-5 bg-white text-[#3D3027] text-sm font-bold tracking-widest uppercase border-2 border-[#3D3027] hover:bg-[#3D3027] hover:text-white transition-all duration-500"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Services Page (abbreviated for space)
  const ServicesPage = () => (
    <div className="pt-32 pb-20 px-8 lg:px-16 bg-[#F5F1EA] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black text-[#3D3027] mb-6 tracking-tight">Services</h1>
        <p className="text-xl text-[#3D3027]/60 max-w-3xl">Detailed service information...</p>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-32 pb-20 px-8 lg:px-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black text-[#3D3027] mb-6 tracking-tight">About</h1>
      </div>
    </div>
  );

  const ResourcesPage = () => {
    if (submitted) {
      return (
        <div className="pt-32 pb-20 px-8 lg:px-16 min-h-screen bg-[#F5F1EA] flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-[#9B7E6A] to-[#6B5848] rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="text-white" size={40} />
            </div>
            <h1 className="text-4xl font-black text-[#3D3027] mb-4 tracking-tight">Check your inbox</h1>
            <p className="text-xl text-[#3D3027]/60">Assessment sent to {leadForm.email}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-32 pb-20 px-8 lg:px-16 bg-[#F5F1EA] min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#9B7E6A]" />
                <span className="text-sm font-medium tracking-widest uppercase text-[#9B7E6A]">Free Resource</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-[#3D3027] mb-6 tracking-tight">
                Strategic Health Check
              </h1>
              <p className="text-xl text-[#3D3027]/60 mb-8 leading-relaxed font-light">
                A diagnostic tool to assess your organization's strategic readiness and identify implementation barriers.
              </p>
              <div className="space-y-4">
                {['Strategic readiness score', 'Implementation barriers', 'Personalized recommendations'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-[#9B7E6A]" size={20} />
                    <span className="text-[#3D3027]/70 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-12 border-2 border-[#9B7E6A]/20">
              <h2 className="text-3xl font-black text-[#3D3027] mb-8 tracking-tight">Request Assessment</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#3D3027] mb-2">Name</label>
                  <input
                    type="text"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
                    className="w-full px-4 py-4 bg-[#F5F1EA] border-2 border-transparent focus:border-[#9B7E6A] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#3D3027] mb-2">Email</label>
                  <input
                    type="email"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
                    className="w-full px-4 py-4 bg-[#F5F1EA] border-2 border-transparent focus:border-[#9B7E6A] outline-none transition-all"
                  />
                </div>
                <button
                  onClick={handleLeadSubmit}
                  className="w-full py-4 bg-gradient-to-r from-[#9B7E6A] to-[#6B5848] text-white text-sm font-bold tracking-widest uppercase hover:shadow-2xl transition-all duration-500"
                >
                  Download Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => (
    <div className="pt-32 pb-20 px-8 lg:px-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-[#3D3027] mb-6 tracking-tight">Let's talk</h1>
          <p className="text-xl text-[#3D3027]/60 max-w-2xl mx-auto font-light">
            Schedule a consultation to discuss your strategic challenge
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-[#F5F1EA] p-12">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-[#3D3027] mb-2">Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-4 bg-white border-2 border-transparent focus:border-[#9B7E6A] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-[#3D3027] mb-2">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-4 bg-white border-2 border-transparent focus:border-[#9B7E6A] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-[#3D3027] mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows="6"
                  className="w-full px-4 py-4 bg-white border-2 border-transparent focus:border-[#9B7E6A] outline-none transition-all"
                />
              </div>
              <button
                onClick={handleContactSubmit}
                className="w-full py-4 bg-gradient-to-r from-[#9B7E6A] to-[#6B5848] text-white text-sm font-bold tracking-widest uppercase hover:shadow-2xl transition-all duration-500"
              >
                Send Message
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-[#9B7E6A]/20">
              <p className="text-xs font-bold tracking-widest uppercase text-[#3D3027] mb-2">Direct Contact</p>
              <a href="mailto:hello@nextstage-strategy.co.uk" className="text-[#9B7E6A] hover:text-[#6B5848] inline-flex items-center gap-2">
                <Mail size={18} />
                hello@nextstage-strategy.co.uk
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#3D3027] mb-6 tracking-tight">Process</h2>
              {[
                { step: '01', title: 'Response within 24 hours', desc: 'Initial review of your inquiry' },
                { step: '02', title: '15-minute consultation', desc: 'Understand your challenge and context' },
                { step: '03', title: 'Proposal or recommendation', desc: 'Clear path forward or alternative resources' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 mb-8">
                  <div className="text-5xl font-black text-[#9B7E6A]/20">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-[#3D3027] mb-1">{item.title}</h3>
                    <p className="text-[#3D3027]/60 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-[#3D3027] text-white py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black mb-4 tracking-tight">
              Next Stage <span className="text-[#C9A581]">Strategy</span>
            </h3>
            <p className="text-white/60 leading-relaxed font-light max-w-md">
              Strategic consulting for nonprofit leaders bridging vision and operational excellence
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Navigation</h4>
            <div className="space-y-3">
              {['home', 'services', 'about', 'resources', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => scrollToSection(page)}
                  className="block text-white/60 hover:text-white capitalize transition-colors font-light"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Contact</h4>
            <p className="text-white/60 font-light mb-2">hello@nextstage-strategy.co.uk</p>
            <p className="text-white/60 font-light">Manchester, UK</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm font-light">© 2024 Next Stage Strategy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw 2s ease-out forwards;
        }
      `}</style>
      <Navigation />
      {activePage === 'home' && <HomePage />}
      {activePage === 'services' && <ServicesPage />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'resources' && <ResourcesPage />}
      {activePage === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
};

export default NextStageWebsite;
