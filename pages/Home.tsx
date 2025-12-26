
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, TESTIMONIALS, INDUSTRIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Commercial skyscraper" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-white pt-12">
          <div className="max-w-2xl">
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Strategic Development Consulting
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Engineering Value in <span className="text-emerald-500">Commercial Real Estate</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Eden Consultants provides specialized guidance for site selection, entitlements, and use planning for retail, medical, and office developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold transition-all text-center">
                Explore Our Services
              </Link>
              <Link to="/contact" className="border-2 border-white/20 hover:border-white text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all text-center">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Core Consulting Capabilities</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-slate-600">Expertise that bridges the gap between raw land and thriving commercial destinations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 flex items-center justify-center rounded-sm mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                  <ArrowRight size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-emerald-700 text-xs font-bold uppercase tracking-widest hover:text-emerald-900 flex items-center gap-2">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">Specialized Focus for Diverse Sectors</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Commercial development isn't one-size-fits-all. We tailor our strategies to the specific operational needs of your target tenants.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {INDUSTRIES.map((industry) => (
                  <div key={industry.name} className="flex items-center gap-4 bg-slate-800 p-6 rounded-sm border border-slate-700">
                    <div className="text-emerald-500">{industry.icon}</div>
                    <span className="font-semibold text-lg">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square bg-emerald-800/10 absolute -inset-4 rotate-3 -z-10 border border-emerald-500/20"></div>
               <img 
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1470" 
                 alt="Construction planning" 
                 className="w-full h-full object-cover shadow-2xl"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">The Eden Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Intelligence Gathering', desc: 'We analyze demographics, traffic patterns, and local ordinances to establish a data-backed foundation.' },
              { step: '02', title: 'Strategic Planning', desc: 'Creation of site plans, entitlement maps, and strategy documentation to maximize site value.' },
              { step: '03', title: 'Execution & Support', desc: 'Ongoing coordination with stakeholders and agencies to push your development through to groundbreaking.' }
            ].map((p) => (
              <div key={p.step} className="relative pt-10 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl font-black text-slate-50 -z-10">{p.step}</div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Perspectives</h2>
            <p className="text-slate-600">Building trust through successful outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex text-emerald-500 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                  </div>
                  <p className="italic text-slate-700 mb-6 leading-relaxed">"{t.quote}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 italic">Ready to accelerate your next development?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Schedule a confidential consultation with our principal consultant to discuss your site selection or entitlement needs.
          </p>
          <Link to="/contact" className="bg-white text-emerald-900 px-10 py-4 font-bold rounded-sm shadow-xl hover:bg-emerald-50 transition-all inline-block">
            Start Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
