import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const serviceAreas = [
  "Brisbane CBD",
  "South Brisbane",
  "North Brisbane",
  "West End",
  "Paddington",
  "Fortitude Valley",
  "Chermside",
  "Sunnybank",
  "Gold Coast Corridor",
];

const services = [
  { label: "Bond Cleaning", anchor: "#bond-cleaning" },
  { label: "Carpet Steam Cleaning", anchor: "#carpet-steam-cleaning" },
  { label: "Oven & Kitchen Cleaning", anchor: "#oven-kitchen-cleaning" },
  { label: "Bathroom Cleaning", anchor: "#bathroom-cleaning" },
  { label: "Window Cleaning", anchor: "#window-cleaning" },
  { label: "Wall Spot Cleaning", anchor: "#wall-spot-cleaning" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-display text-xl font-bold text-brand-gold">
                Tru Bond
              </span>
              <br />
              <span className="font-display text-base font-medium text-white">
                Cleaning Brisbane
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5 font-body">
              Brisbane's most trusted bond cleaning service. We help renters get
              their full bond back — guaranteed.
            </p>
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp_button"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-4 py-2.5 rounded-md text-sm font-label font-semibold transition-colors"
            >
              <SiWhatsapp size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-display font-bold text-brand-gold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navLinks.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`footer.link.${i + 1}`}
                  className="text-white/70 hover:text-brand-gold text-sm font-body transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-bold text-brand-gold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.anchor}>
                  <Link
                    to="/services"
                    hash={service.anchor.replace("#", "")}
                    className="text-white/70 hover:text-brand-gold text-sm font-body transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-bold text-brand-gold text-sm uppercase tracking-wider mb-4">
              Contact & Hours
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-label font-semibold">
                    0488 841 883
                  </p>
                  <a
                    href="https://wa.me/610488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-brand-gold text-xs transition-colors"
                  >
                    WhatsApp available
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-body">7 days a week</p>
                  <p className="text-white/60 text-xs font-body">7am – 7pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-body">
                    All Brisbane Suburbs
                  </p>
                  <p className="text-white/60 text-xs font-body">
                    Up to 40km from CBD
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-5">
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2 font-label">
                Service Areas
              </h4>
              <div className="flex flex-wrap gap-1">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="text-white/50 text-xs font-body bg-white/5 px-2 py-0.5 rounded"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-body text-center sm:text-left">
            © {currentYear} Tru Bond Cleaning Brisbane. All rights reserved.
            Serving Brisbane, QLD, Australia.
          </p>
          <p className="text-white/30 text-xs font-body">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
