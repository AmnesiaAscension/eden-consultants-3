
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                    isActive(link.path) ? 'text-emerald-700' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="bg-emerald-800 text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-emerald-900 transition-colors"
              >
                Inquire Now
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-200">
            <ul className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block text-lg font-medium ${
                      isActive(link.path) ? 'text-emerald-700' : 'text-slate-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Social */}
          <div className="space-y-6">
            <Logo className="brightness-200 invert" />
            <p className="text-sm leading-relaxed max-w-xs">
              Providing strategic development consulting for high-performing commercial, retail, and medical sites since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>info@edenconsultants.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>1200 Commerce Way, Suite 400<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Service Area</h4>
            <p className="text-sm mb-4">
              Primarily serving developers and investors across Northern California and the Pacific Northwest.
            </p>
            <Link to="/contact" className="inline-block border border-emerald-500 text-emerald-500 px-4 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-white transition-all">
              Request Case Studies
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Eden Consultants. All rights reserved.</p>
          <p>Development Strategy & Pro Forma inputs are for illustrative purposes and do not constitute financial advice.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
