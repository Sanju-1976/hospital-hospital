import { Link, useLocation } from 'react-router';
import { Phone, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/doctors', label: 'Doctors' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-xl text-white font-bold">+</span>
          </div>
          <span className="font-semibold text-gray-900">MediCare Hospital</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive(to) ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-1.5">
              <Phone className="size-4 text-blue-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-4 text-blue-600" />
              <span>24/7 Emergency</span>
            </div>
          </div>
          <Link
            to="/appointment"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors"
          >
            Book Appointment
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 flex flex-col gap-3">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium py-1 transition-colors hover:text-blue-600 ${
                isActive(to) ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
