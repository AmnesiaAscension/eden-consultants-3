
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
       <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Representative Projects</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Our portfolio spans a wide range of commercial developments, from boutique medical suites to large-scale retail plazas.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group overflow-hidden bg-white border border-slate-200 hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-700 text-white text-[10px] uppercase font-black tracking-widest px-3 py-1">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-800 transition-colors">{project.title}</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">Our Scope</p>
                      <p className="text-slate-700 font-medium">{project.scope}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">Key Outcome</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-slate-50 border border-dashed border-slate-300 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Looking for more specific examples?</h4>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Due to confidentiality agreements, we only show a representative sample of our work online. Contact us for detailed case studies relevant to your industry and region.
            </p>
            <a href="#/contact" className="text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all">
              Request Full Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
