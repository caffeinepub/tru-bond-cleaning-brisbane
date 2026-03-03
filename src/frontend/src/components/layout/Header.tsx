import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-navy shadow-nav" : "bg-brand-navy"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Tru Bond Cleaning Brisbane — Home"
          >
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg md:text-xl font-bold text-brand-gold tracking-tight">
                Tru Bond
              </span>
              <span className="font-display text-sm md:text-base font-medium text-white tracking-wide">
                Cleaning Brisbane
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.link.${i + 1}`}
                className={`px-4 py-2 rounded-md text-sm font-label font-semibold transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-brand-gold"
                    : "text-white/90 hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0488841883"
              className="flex items-center gap-2 text-white/80 hover:text-brand-gold transition-colors text-sm font-label font-semibold"
            >
              <Phone size={16} />
              <span>0488 841 883</span>
            </a>
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.whatsapp_button"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-4 py-2 rounded-md text-sm font-label font-semibold transition-colors duration-200"
            >
              <SiWhatsapp size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.mobile_toggle"
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10">
          <nav
            className="container mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.link.${i + 1}`}
                className={`px-4 py-3 rounded-md text-base font-label font-semibold transition-colors ${
                  location.pathname === link.to
                    ? "text-brand-gold bg-white/10"
                    : "text-white hover:text-brand-gold hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:0488841883"
                className="flex items-center gap-2 text-white/80 hover:text-brand-gold px-4 py-2 transition-colors font-label font-semibold"
              >
                <Phone size={18} />
                <span>0488 841 883</span>
              </a>
              <a
                href="https://wa.me/610488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.whatsapp_button"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-4 py-3 rounded-md font-label font-semibold transition-colors"
              >
                <SiWhatsapp size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
