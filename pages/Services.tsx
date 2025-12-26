
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            From initial site selection to the final entitlement approvals, we provide end-to-end expertise for commercial developers.
          </p>
        </div>
      </section>

      {/* Detail List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="lg:w-1/2">
                <div className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-4">Service {String(index + 1).padStart(2, '0')}</div>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/800/600`} 
                  alt={service.title}
                  className="rounded-lg shadow-2xl w-full object-cover aspect-video"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-8 flex gap-6 items-start">
            <AlertTriangle className="w-10 h-10 text-amber-500 shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Advisory Note</h4>
              <p className="text-slate-700 leading-relaxed">
                Development Strategy & Pro Forma inputs provided by Eden Consultants are based on market observations and historical benchmarks. These outputs are intended for strategic planning and feasibility analysis only and do not constitute certified financial, legal, or investment advice. We recommend consulting with licensed professionals for final financial audits and legal filings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to discuss your project requirements?</h2>
          <a href="#/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-sm font-bold inline-block transition-all">
            Get a Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
