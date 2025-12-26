
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd handle form submission here
  };

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Start a Consultation</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Ready to secure your next prime development site? Fill out the form below or reach out to our office directly.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form Section */}
            <div className="lg:w-2/3">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-12 text-center rounded-lg">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Received</h2>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you for contacting Eden Consultants. A principal member of our team will review your project details and respond within 24–48 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-emerald-800 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
                        placeholder="e.g. Marcus Thorne"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-bold text-slate-700">Project Type *</label>
                      <select 
                        id="type" 
                        required 
                        className="w-full border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
                      >
                        <option value="">Select an option...</option>
                        <option value="shopping">Shopping Center</option>
                        <option value="medical">Medical Condos</option>
                        <option value="restaurant">Fast Food / Restaurant</option>
                        <option value="office">Office Condos</option>
                        <option value="other">Other Commercial</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Project Overview *</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      required 
                      className="w-full border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
                      placeholder="Please briefly describe the site location and current development status..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="bg-emerald-800 text-white px-10 py-4 font-bold rounded-sm shadow-lg hover:bg-emerald-900 transition-all flex items-center gap-3"
                  >
                    Submit Inquiry <Send size={18} />
                  </button>
                  <p className="text-xs text-slate-500">* Required fields. We value your privacy and confidentiality.</p>
                </form>
              )}
            </div>

            {/* Sidebar Section */}
            <div className="lg:w-1/3">
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 sticky top-28">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-800 flex items-center justify-center rounded-full shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone</h4>
                      <p className="text-slate-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-800 flex items-center justify-center rounded-full shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-slate-600">inquiry@edenconsultants.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-800 flex items-center justify-center rounded-full shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Office</h4>
                      <p className="text-slate-600">1200 Commerce Way, Suite 400<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-800 flex items-center justify-center rounded-full shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Hours</h4>
                      <p className="text-slate-600">Mon - Fri: 8:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Regional Focus</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Greater Bay Area</li>
                    <li>• Central Valley, CA</li>
                    <li>• Portland Metro Area</li>
                    <li>• Puget Sound Region</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
