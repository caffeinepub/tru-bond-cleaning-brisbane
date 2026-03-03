import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Leaf,
  MapPin,
  Shield,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useSEO } from "../hooks/useSEO";

const values = [
  {
    icon: Heart,
    title: "Honesty",
    description:
      "We give you a clear, upfront quote with no hidden fees. What we quote is what you pay — nothing more.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We clean to the REIQ standard so your property manager is satisfied. Every room, every surface, every time.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up on time, every time, and we finish the job properly. We never cut corners or rush a clean.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "We treat your rental property with respect, as if it were our own home. We take pride in every job.",
  },
  {
    icon: Shield,
    title: "Guarantee",
    description:
      "If you're not happy, we'll make it right — no questions asked. Our 100% bond back guarantee is real.",
  },
  {
    icon: ThumbsUp,
    title: "Communication",
    description:
      "We keep you informed throughout the process. No surprises, no confusion — just clear, friendly updates.",
  },
];

const trustPoints = [
  "We're local Brisbane people who understand the local rental market",
  "We follow the REIQ end of lease cleaning checklist",
  "We use eco-friendly products that are safe for families, children, and pets",
  "We're fully insured, so you're protected if anything goes wrong",
  "We offer a 100% bond back guarantee",
  "We work 7 days a week, including public holidays",
  "We communicate clearly and keep you informed throughout the process",
  "We've served hundreds of Brisbane renters with a 5-star track record",
];

const northSuburbs = [
  "Chermside",
  "Kedron",
  "Stafford",
  "Aspley",
  "Bracken Ridge",
  "Sandgate",
  "Nundah",
  "Clayfield",
];

const southSuburbs = [
  "Sunnybank",
  "Moorooka",
  "Annerley",
  "Greenslopes",
  "Holland Park",
  "Carindale",
  "Wynnum",
  "Manly",
];

const innerSuburbs = [
  "Brisbane CBD",
  "South Brisbane",
  "West End",
  "Paddington",
  "Fortitude Valley",
  "New Farm",
  "Newstead",
  "Teneriffe",
];

const westSuburbs = [
  "Ipswich Corridor",
  "Richlands",
  "Oxley",
  "Indooroopilly",
  "Taringa",
  "Toowong",
  "Kenmore",
  "Fig Tree Pocket",
];

export function AboutPage() {
  useSEO({
    title:
      "About Tru Bond Cleaning Brisbane | Local Brisbane Bond Cleaning Experts",
    description:
      "Learn about Tru Bond Cleaning Brisbane — a local Brisbane bond cleaning company committed to helping renters get their full bond back. Meet our team and learn our story.",
    canonical: "https://trubondcleaningbrisbane.com/about",
  });

  return (
    <main>
      {/* Hero */}
      <section
        className="bg-brand-navy pt-28 pb-16 md:pt-32 md:pb-20"
        aria-label="About page hero"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            About <span className="text-brand-gold">Tru Bond Cleaning</span>{" "}
            Brisbane
          </h1>
          <p className="text-white/75 text-xl font-body max-w-2xl mx-auto">
            We're a local Brisbane team with one mission: help renters get their
            full bond back without the stress.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white" aria-label="Our story">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-brand-muted font-body text-base leading-relaxed">
                <p>
                  Tru Bond Cleaning Brisbane started with one simple goal: to
                  help Brisbane renters get their full bond back without the
                  stress. We saw too many good renters lose hundreds of dollars
                  from their bond because of a dirty oven or a missed bathroom.
                </p>
                <p>
                  We knew we could do better. We built a team of experienced,
                  passionate cleaners who take pride in their work and care
                  about the outcome for every customer. We invested in
                  professional equipment, commercial-grade cleaning products,
                  and thorough training to REIQ standards.
                </p>
                <p>
                  Today, we've helped{" "}
                  <strong className="text-brand-navy">
                    hundreds of Brisbane families and individuals
                  </strong>{" "}
                  move out with a full bond refund — and we're proud of every
                  single one. From one-bedroom inner-city apartments to large
                  family homes in the outer suburbs, we've done it all.
                </p>
                <p>
                  We're not a big national franchise. We're a local Brisbane
                  business, and we treat every customer like a neighbour.
                  Because that's exactly what we are.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru Bond Cleaning Brisbane friendly professional cleaning team"
                className="rounded-2xl shadow-card-hover w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-brand-gold text-brand-navy rounded-xl px-6 py-4 shadow-gold hidden md:block">
                <p className="font-display font-bold text-2xl">100%</p>
                <p className="font-label text-sm font-semibold">
                  Bond Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 md:py-20 section-light" aria-label="Our values">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              What We Stand For
            </h2>
            <p className="text-brand-muted text-lg font-body max-w-2xl mx-auto">
              These aren't just words on a website. They're the principles we
              bring to every single job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-card card-hover border border-brand-mid-gray"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-navy flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-gold" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-brand-muted text-sm font-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Brisbane Renters Trust Us */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Why Brisbane renters trust us"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why Brisbane Renters Trust Us
              </h2>
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <CheckCircle
                      size={18}
                      className="text-brand-gold mt-0.5 shrink-0"
                    />
                    <span className="text-brand-muted font-body text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-navy rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <Star size={22} className="text-brand-gold fill-brand-gold" />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl">5-Star</p>
                  <p className="text-white/60 text-sm font-body">
                    Customer Rating
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { number: "500+", label: "Happy Customers" },
                  { number: "100%", label: "Bond Back Guarantee" },
                  { number: "7", label: "Days a Week Service" },
                  { number: "5+", label: "Years Experience" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-white/70 font-body text-sm">
                      {stat.label}
                    </span>
                    <span className="font-display font-bold text-brand-gold text-xl">
                      {stat.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guarantee */}
      <section
        className="py-16 md:py-20 section-light"
        aria-label="Our guarantee"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center mx-auto mb-6">
              <Shield size={30} className="text-brand-gold" />
            </div>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Our Guarantee to You
            </h2>
            <div className="space-y-4 text-brand-muted font-body text-base leading-relaxed text-left">
              <p>
                We offer a{" "}
                <strong className="text-brand-navy">
                  100% bond back guarantee
                </strong>{" "}
                on all our bond cleaning services. This means if your property
                manager finds anything that doesn't meet their standards{" "}
                <strong className="text-brand-navy">within 72 hours</strong> of
                our clean, we'll return and re-clean that area at absolutely no
                additional charge.
              </p>
              <p>
                We're confident in our team and our process. We've helped
                renters in properties ranging from one-bedroom units to large
                family homes, and we've never let a customer down on our
                guarantee.
              </p>
              <p>
                We follow the REIQ end of lease checklist — the same checklist
                your property manager uses. By cleaning to that standard, we
                make sure nothing gets flagged during the exit inspection. But
                if it does, we stand by our work and come back to make it right.
              </p>
              <p>
                Our guarantee gives you peace of mind when you need it most.
                Moving is stressful. Getting your bond back shouldn't be.
              </p>
            </div>
            <div className="mt-8 p-6 bg-brand-navy rounded-xl">
              <p className="font-display font-bold text-white text-lg mb-2">
                100% Bond Back Guarantee
              </p>
              <p className="text-white/70 font-body text-sm">
                If your property manager isn't satisfied within 72 hours of our
                clean, we'll come back and re-clean for free. No questions
                asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brisbane Suburbs We Service */}
      <section className="py-16 md:py-20 bg-white" aria-label="Service areas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Brisbane Suburbs We Service
            </h2>
            <p className="text-brand-muted text-lg font-body max-w-2xl mx-auto">
              We service all Brisbane suburbs up to 40km from the CBD. Here are
              some of the areas we regularly clean in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { region: "Inner Brisbane", suburbs: innerSuburbs, icon: MapPin },
              { region: "North Brisbane", suburbs: northSuburbs, icon: MapPin },
              { region: "South Brisbane", suburbs: southSuburbs, icon: MapPin },
              { region: "West Brisbane", suburbs: westSuburbs, icon: MapPin },
            ].map(({ region, suburbs, icon: Icon }) => (
              <div
                key={region}
                className="bg-brand-light-gray rounded-xl p-5 border border-brand-mid-gray"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={18} className="text-brand-gold" />
                  <h3 className="font-display font-bold text-brand-navy text-base">
                    {region}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {suburbs.map((suburb) => (
                    <li
                      key={suburb}
                      className="text-brand-muted text-sm font-body flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                      {suburb}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-muted font-body text-sm mt-6">
            Don't see your suburb? Contact us — we likely service your area.{" "}
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy font-semibold hover:text-brand-gold transition-colors"
            >
              WhatsApp us to check.
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 bg-brand-navy"
        aria-label="Contact call to action"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Move Out Stress-Free?
          </h2>
          <p className="text-white/70 text-lg font-body max-w-xl mx-auto mb-8">
            Let Brisbane's most trusted bond cleaning team take care of
            everything. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-label font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-gold"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-label font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <SiWhatsapp size={22} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
