
import React from 'react';
import { Target, Eye, ShieldCheck, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Built on Insight</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Eden Consultants was founded on the belief that successful development requires a harmonious blend of data, regulatory finesse, and strategic vision.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded in 2012 by principal developer Marcus Thorne, Eden Consultants was established to help smaller developers and private equity groups navigate the increasingly complex web of commercial real estate entitlements and site selection.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just find sites; we find opportunities that align with long-term economic trends. Our specialized focus on fast-food, medical, and office condos ensures that our clients benefit from deep, niche-specific knowledge that generalist firms often overlook.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-slate-100 aspect-square p-8 flex flex-col justify-center text-center">
              <span className="text-4xl font-black text-emerald-800 mb-2">12+</span>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Years Experience</span>
            </div>
            <div className="bg-emerald-800 aspect-square p-8 flex flex-col justify-center text-center text-white">
              <span className="text-4xl font-black mb-2">85+</span>
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-200">Sites Approved</span>
            </div>
            <div className="bg-emerald-600 aspect-square p-8 flex flex-col justify-center text-center text-white">
              <span className="text-4xl font-black mb-2">1.2M</span>
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-100">SQ FT Managed</span>
            </div>
            <div className="bg-slate-900 aspect-square p-8 flex flex-col justify-center text-center text-white">
              <span className="text-4xl font-black mb-2">98%</span>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Client Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-10 h-10 mb-6 text-emerald-700" />, title: 'Precision', desc: 'Detailed analysis ensures zero surprises during the entitlement phase.' },
              { icon: <Eye className="w-10 h-10 mb-6 text-emerald-700" />, title: 'Vision', desc: 'Seeing the long-term potential where others see vacant land.' },
              { icon: <ShieldCheck className="w-10 h-10 mb-6 text-emerald-700" />, title: 'Integrity', desc: 'Transparent reporting and honest assessments of site viability.' },
              { icon: <Clock className="w-10 h-10 mb-6 text-emerald-700" />, title: 'Efficiency', desc: 'Time is money in development; we move fast without cutting corners.' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 border border-slate-200 hover:shadow-lg transition-shadow">
                {v.icon}
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
              { year: '2012', event: 'Eden Consultants founded in San Francisco with a focus on retail site selection.' },
              { year: '2015', event: 'Expanded into medical condo planning as outpatient facilities demand surged.' },
              { year: '2018', event: 'Reached milestone of 500,000 sq ft of entitled commercial space.' },
              { year: '2021', event: 'Launched proprietary feasibility scoring model for fast-food operators.' },
              { year: 'Present', event: 'Leading the way in resilient, data-backed commercial development consulting.' },
            ].map((t, i) => (
              <div key={i} className="flex gap-8 items-start border-l-2 border-emerald-800 pl-8 relative">
                <div className="absolute w-4 h-4 bg-emerald-800 rounded-full -left-[9px] top-1"></div>
                <div>
                  <span className="text-2xl font-black text-emerald-800 block mb-1">{t.year}</span>
                  <p className="text-slate-600 text-lg leading-relaxed">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
