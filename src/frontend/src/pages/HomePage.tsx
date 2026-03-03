import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  Calendar,
  CheckCircle,
  ChevronDown,
  Droplets,
  Eye,
  Flame,
  Home,
  Leaf,
  MapPin,
  PaintBucket,
  Shield,
  Star,
  Users,
} from "lucide-react";
import type React from "react";
import { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useSEO } from "../hooks/useSEO";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Bond Cleaning and why is it required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bond cleaning (also called end of lease cleaning) is a thorough, deep clean of a rental property before you move out. Your landlord or property manager requires it to return the home to the condition it was in when you first moved in.",
      },
    },
    {
      "@type": "Question",
      name: "Why is bond cleaning important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bond cleaning is important because it protects your money. Your bond is usually four weeks' rent. If you leave the property dirty, your landlord can use that money to pay for a professional clean.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a bond clean cost in Brisbane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A bond clean in Brisbane typically costs: Studio/1-bedroom: $200–$350, 2-bedroom: $300–$450, 3-bedroom: $400–$600, 4-bedroom: $500–$750+.",
      },
    },
    {
      "@type": "Question",
      name: "What is full bond cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full bond cleaning means cleaning the entire property from top to bottom — no room left out. It includes all bedrooms, kitchen (oven, stovetop, rangehood), bathrooms and toilets, living areas, windows, walls, and garage or laundry if applicable.",
      },
    },
    {
      "@type": "Question",
      name: "Which are the top rated bond cleaning companies near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top-rated Brisbane bond cleaning companies include: Fantastic Cleaners Brisbane, Jim's Cleaning Brisbane, Calibre Cleaning Brisbane, End Of Lease Cleaning Brisbane, and Tru Bond Cleaning Brisbane.",
      },
    },
    {
      "@type": "Question",
      name: "Which cleaning products are best for bond cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Best products for bond cleaning include: Selleys Oven Brite for ovens, Domestos Thick Bleach for toilets, Windex for windows, Method All-Purpose Cleaner for surfaces, HG Grout Cleaner for tiles, and Vanish Oxi Action for carpet stains.",
      },
    },
    {
      "@type": "Question",
      name: "How much does professional bond cleaning typically cost in Brisbane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional bond cleaning in Brisbane typically costs $250–$750 depending on property size. Extra services like carpet steam cleaning ($40–$80/room), oven deep clean ($50–$80), and exterior window cleaning ($50–$150) add to the cost.",
      },
    },
    {
      "@type": "Question",
      name: "What products are best for bond cleaning carpets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Best carpet cleaning products include Vanish Carpet Care PowerPowder, Preen Carpet Stain Remover, and Scotchgard Carpet Protector. For bond cleaning, professional hot water extraction (steam cleaning) is the gold standard.",
      },
    },
    {
      "@type": "Question",
      name: "How to choose a reliable bond cleaner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To choose a reliable bond cleaner: check Google reviews, ask about their REIQ checklist, confirm a re-clean guarantee, get a written quote, verify they're insured, ask about experience, and choose a local Brisbane cleaner.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a bond cleaning company online with a satisfaction guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Tru Bond Cleaning Brisbane offers online booking via our contact form or WhatsApp at 0488 841 883. We offer a 100% bond back guarantee — if your property manager isn't happy, we'll come back and fix it at no extra charge.",
      },
    },
  ],
};

const services = [
  {
    id: 1,
    icon: Home,
    title: "Bond Cleaning",
    description:
      "Complete end of lease cleaning to REIQ standards. We guarantee your full bond back or we re-clean for free.",
    anchor: "bond-cleaning",
  },
  {
    id: 2,
    icon: Droplets,
    title: "Carpet Steam Cleaning",
    description:
      "Professional hot water extraction removes 95%+ of embedded dirt, stains, and allergens from your carpets.",
    anchor: "carpet-steam-cleaning",
  },
  {
    id: 3,
    icon: Flame,
    title: "Oven & Kitchen Cleaning",
    description:
      "Deep clean ovens, rangehoods, and kitchens using professional degreasers that cut through baked-on grease.",
    anchor: "oven-kitchen-cleaning",
  },
  {
    id: 4,
    icon: Bath,
    title: "Bathroom & Toilet Cleaning",
    description:
      "Remove mould, limescale, and soap scum. We clean every surface until your bathroom sparkles.",
    anchor: "bathroom-cleaning",
  },
  {
    id: 5,
    icon: Eye,
    title: "Window Cleaning",
    description:
      "Streak-free windows inside and out. We also clean window tracks, sills, frames, and fly screens.",
    anchor: "window-cleaning",
  },
  {
    id: 6,
    icon: PaintBucket,
    title: "Wall Spot Cleaning",
    description:
      "We carefully remove scuffs, fingerprints, and marks from painted walls without damaging the paint.",
    anchor: "wall-spot-cleaning",
  },
];

const features = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    description:
      "If your property manager isn't satisfied, we'll come back and re-clean for free. No questions asked.",
  },
  {
    icon: Users,
    title: "Experienced & Trained Cleaners",
    description:
      "Our team has years of experience cleaning Brisbane rental properties to real estate agent standards.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use professional products that are tough on grime but safe for your family, children, and pets.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "We work 7 days a week, including weekends and public holidays, to fit around your moving schedule.",
  },
  {
    icon: CheckCircle,
    title: "Fully Insured",
    description:
      "We're fully insured, so you're protected if anything goes wrong during your clean.",
  },
  {
    icon: MapPin,
    title: "Brisbane Locals",
    description:
      "We know the Brisbane rental market. We understand exactly what local property managers expect.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    suburb: "Paddington",
    rating: 5,
    text: "Tru Bond Cleaning Brisbane did an amazing job on our end of lease clean. We got our full bond back with no issues! I couldn't believe how clean the oven was. Highly recommend.",
  },
  {
    id: 2,
    name: "James T.",
    suburb: "Chermside",
    rating: 5,
    text: "I was stressed about moving out but these guys made it so easy. They came on short notice, cleaned everything thoroughly, and my property manager was impressed. Worth every cent.",
  },
  {
    id: 3,
    name: "Priya K.",
    suburb: "Sunnybank",
    rating: 5,
    text: "Booked them for carpet steam cleaning and bond cleaning together. The carpets looked brand new! Professional team, on time, and great value. Will definitely use again.",
  },
  {
    id: 4,
    name: "Luke D.",
    suburb: "Fortitude Valley",
    rating: 5,
    text: "The wall spot cleaning was brilliant — they removed marks I thought would cost me my bond. Friendly team, great communication throughout. 5 stars.",
  },
];

const faqs = [
  {
    id: 1,
    question: "What is Bond Cleaning and why is it required?",
    answer: `Bond cleaning (also called end of lease cleaning) is a thorough, deep clean of a rental property before you move out. Your landlord or property manager requires it to return the home to the condition it was in when you first moved in.

In Queensland, most rental agreements include a clause that says you must leave the property clean. If you don't, your landlord can take money from your bond (security deposit) to pay for cleaning.

Bond cleaning covers every room, including kitchens, bathrooms, carpets, windows, and walls. It's much more detailed than a regular clean — everything must be spotless.

Getting a professional bond cleaner like Tru Bond Cleaning Brisbane means you can hand back the keys with confidence.`,
  },
  {
    id: 2,
    question: "Why is bond cleaning important?",
    answer: `Bond cleaning is important because it protects your money. Your bond is usually four weeks' rent — that's a lot of cash! If you leave the property dirty, your landlord or real estate agent can use that money to pay for a professional clean. That means less money back in your pocket.

A proper bond clean makes sure you get your full bond refunded. It also protects your rental history. A bad exit report can make it harder to rent again in the future.

Tru Bond Cleaning Brisbane helps you leave on good terms, so your rental record stays clean and your bond comes back to you in full.`,
  },
  {
    id: 3,
    question: "How much does a bond clean cost in Brisbane?",
    answer: `The cost of a bond clean in Brisbane depends on the size of your property and its condition. Here's a rough guide:

• Studio/1-bedroom unit: $200–$350
• 2-bedroom unit or house: $300–$450
• 3-bedroom house: $400–$600
• 4-bedroom house: $500–$750+

These prices usually include all rooms, kitchen, bathrooms, and basic carpet vacuuming. Steam cleaning carpets costs extra — usually $40–$80 per room. Oven cleaning may also be an add-on.

At Tru Bond Cleaning Brisbane, we give you a clear quote upfront with no hidden fees. We believe you should know exactly what you're paying before we start.`,
  },
  {
    id: 4,
    question: "What is full bond cleaning?",
    answer: `Full bond cleaning means cleaning the entire property from top to bottom — no room left out. It includes:

• All bedrooms (vacuuming, dusting, wiping surfaces)
• Kitchen (oven, stovetop, rangehood, cupboards inside and out, benches, sink)
• Bathrooms and toilets (tiles, grouting, taps, mirrors, toilet bowls)
• Living areas (floors, skirting boards, light switches, window sills)
• Windows (inside, and outside if accessible)
• Walls (removing scuff marks and light stains)
• Garage or laundry if applicable

Full bond cleaning is what your landlord expects when you move out. It's much more thorough than a standard weekly clean.

At Tru Bond Cleaning Brisbane, our full bond clean covers all of the above and more — we follow the Real Estate Institute of Queensland (REIQ) checklist so nothing gets missed.`,
  },
  {
    id: 5,
    question: "Which are the top rated bond cleaning companies near me?",
    answer: `Here are five top-rated bond cleaning companies in Brisbane worth considering:

**1. Fantastic Cleaners Brisbane** (fantasticcleaners.com.au)
Fantastic Cleaners is one of Australia's largest cleaning networks with a strong Brisbane presence. They offer end of lease cleaning, carpet cleaning, and a range of other home services. Their online booking system is easy to use, and they have a large team that can accommodate last-minute bookings. They follow a detailed checklist that meets most property manager requirements. They offer a re-clean guarantee if the property manager is not satisfied. Pricing is competitive for the Brisbane market.

**2. Jim's Cleaning Brisbane** (jimscleaning.com.au)
Jim's Cleaning is part of the well-known Jim's Group franchise network. They have multiple operators across Brisbane who specialise in bond and end of lease cleaning. They offer a satisfaction guarantee and are happy to work around your move-out schedule. Customer feedback on Google and Hipages is generally positive. Their brand recognition gives many renters peace of mind when booking.

**3. Calibre Cleaning Brisbane** (calibrecleaning.com.au)
Calibre Cleaning is a Brisbane-based professional cleaning company with a strong reputation for end of lease and bond cleaning. They use eco-friendly cleaning products that are safe for children and pets. Their team follows strict REIQ checklist standards. They are fully insured and offer a bond-back guarantee on their services. They cover inner Brisbane, North Brisbane, South Brisbane, and surrounding suburbs.

**4. End Of Lease Cleaning Brisbane** (endofleasecleaningbrisbane.com.au)
End Of Lease Cleaning Brisbane is a specialist company focused exclusively on bond and exit cleaning. Because they only do one thing, they do it very well. Their checklists are comprehensive and updated regularly to match real estate agent expectations. They offer a 72-hour re-clean guarantee. They service all major Brisbane suburbs and have a quick online booking process.

**5. Tru Bond Cleaning Brisbane** (trubondcleaningbrisbane.com)
Tru Bond Cleaning Brisbane is a local Brisbane cleaning company with a genuine passion for helping renters get their full bond back. We are 100% Brisbane-based, which means we know the local real estate market and understand exactly what Brisbane property managers expect. Our team is experienced, fully trained, and uses eco-friendly products. We offer a 100% bond back guarantee — if your property manager is not satisfied with our clean, we'll come back and re-clean at no extra charge. We work 7 days a week. Call or WhatsApp us on 0488 841 883 for a free quote today.`,
  },
  {
    id: 6,
    question: "Which cleaning products are best for bond cleaning?",
    answer: `Professional bond cleaners use specific products designed to tackle tough built-up grime. Here are some of the best products used for bond cleaning:

• **Oven cleaner**: Selleys Oven Brite or Easy-Off BAM are excellent for cutting through baked-on grease
• **Bathroom cleaner**: Domestos Thick Bleach for toilets; CLR Bathroom & Kitchen for removing calcium and lime scale from taps and showerheads
• **Glass cleaner**: Windex Original or a microfibre cloth with white vinegar for streak-free windows
• **All-purpose cleaner**: Enjo cloths with water, or Method All-Purpose Cleaner for benches and surfaces
• **Grout cleaner**: HG Grout Cleaner or a baking soda and hydrogen peroxide paste for tile grout
• **Floor cleaner**: Fabuloso Multi-Purpose Cleaner for tiles; Bona Hardwood Floor Cleaner for timber floors
• **Carpet pre-treatment**: Vanish Oxi Action or Preen for spot stains before steam cleaning

At Tru Bond Cleaning Brisbane, we bring our own professional-grade products to every job, so you don't need to worry about stocking up.`,
  },
  {
    id: 7,
    question:
      "How much does professional bond cleaning typically cost in Brisbane?",
    answer: `Professional bond cleaning in Brisbane typically costs between $250 and $750, depending on the property size and condition. Here's a detailed breakdown:

• **1-bedroom unit**: $250–$350 (approximately 3–4 hours of cleaning)
• **2-bedroom home**: $320–$450 (approximately 4–6 hours)
• **3-bedroom home**: $400–$550 (approximately 6–8 hours)
• **4-bedroom home**: $500–$750+ (approximately 8–10+ hours)

Extra services that add to the cost include:
• Carpet steam cleaning: $40–$80 per room
• Oven deep clean: $50–$80
• Exterior window cleaning: $50–$150 depending on house size
• Garage cleaning: $50–$100

The cheapest quote is not always the best choice. A cleaner who charges too little may rush the job, leaving you at risk of losing your bond. At Tru Bond Cleaning Brisbane, we offer fair, competitive pricing with a detailed quote upfront — and our bond back guarantee means you're protected.`,
  },
  {
    id: 8,
    question: "What products are best for bond cleaning carpets?",
    answer: `Carpet cleaning during a bond clean requires the right products to remove stains, odours, and embedded dirt. Here are the best products and methods:

• **Vanish Carpet Care PowerPowder** (available at Woolworths and Coles): Sprinkle on carpets, leave for 5 minutes, then vacuum. Great for general deodorising and light stains.
• **Bissell SpotClean Portable Carpet Cleaner**: A portable machine that uses hot water and cleaning solution to lift stains. Available at Bunnings and Harvey Norman.
• **Preen Carpet Stain Remover** (preen.com.au): Spray on stains, leave for 2 minutes, blot with a cloth. Works well on pet stains, food, and drink spills.
• **Scotchgard Carpet Protector**: After cleaning, apply Scotchgard to protect carpets from future stains. Available at hardware stores across Brisbane.
• **White King Carpet Freshener**: For freshening up carpets quickly before inspection.

For a bond clean, the gold standard is professional hot water extraction (steam cleaning). This uses hot water and a professional cleaning agent injected into carpet fibres, then extracted with a powerful vacuum. It removes 95%+ of deep-seated dirt and bacteria.

At Tru Bond Cleaning Brisbane, we offer professional carpet steam cleaning as an add-on to your bond clean for $50–$80 per room.`,
  },
  {
    id: 9,
    question: "How to choose a reliable bond cleaner?",
    answer: `Choosing the right bond cleaner in Brisbane can save you time, stress, and money. Here's what to look for:

• **Check reviews**: Look for Google reviews, Facebook ratings, or testimonials. Real reviews from Brisbane renters tell you a lot about reliability.
• **Ask about their checklist**: A professional bond cleaner should follow a detailed checklist based on REIQ standards. Ask to see it before you book.
• **Confirm their guarantee**: Does the company offer a re-clean guarantee if your property manager is not satisfied? This is a must-have.
• **Get a written quote**: Avoid verbal quotes. A written quote protects you from hidden charges after the job is done.
• **Check they're insured**: Accidents happen. Always use a fully insured cleaning company so you're protected if anything gets damaged.
• **Ask about experience**: How long have they been doing bond cleaning in Brisbane? Experience matters when it comes to meeting real estate agent expectations.
• **Verify they know your suburb**: A local Brisbane cleaner understands local property standards better than someone travelling from far away.

At Tru Bond Cleaning Brisbane, we tick every single box above. Call us on 0488 841 883 for a free, no-obligation quote.`,
  },
  {
    id: 10,
    question:
      "Can I book a bond cleaning company online with a satisfaction guarantee?",
    answer: `Yes! Many bond cleaning companies in Brisbane — including Tru Bond Cleaning Brisbane — offer online booking and a satisfaction guarantee. Here's what to look for when booking online:

• **Instant quote**: A good booking system gives you a clear price upfront based on your home size and services needed.
• **Flexible scheduling**: You should be able to choose your preferred date and time, including weekends and public holidays.
• **Confirmation by email or WhatsApp**: After booking, you should receive written confirmation with all the details.
• **Satisfaction guarantee**: Look for a company that offers a free re-clean if your property manager finds anything unsatisfactory.
• **Clear cancellation policy**: Life happens. Make sure you can reschedule without a big penalty if your moving date changes.

At Tru Bond Cleaning Brisbane, you can book online via our contact form or send us a message on WhatsApp at 0488 841 883. We confirm your booking quickly and work around your schedule. Our 100% bond back guarantee means if your property manager isn't happy, we'll come back and fix it — no questions asked.`,
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  const stars = ["s1", "s2", "s3", "s4", "s5"].slice(0, count);
  return (
    <div className="flex gap-0.5">
      {stars.map((key) => (
        <Star key={key} size={16} className="text-brand-gold fill-brand-gold" />
      ))}
    </div>
  );
}

function parseBoldText(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={part} className="text-brand-navy font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function renderFAQAnswer(text: string) {
  return text.split("\n\n").map((paragraph) => {
    const lines = paragraph.split("\n");
    const isList = lines.some((l) => l.startsWith("•") || l.startsWith("**"));

    if (isList) {
      const filteredLines = lines.filter((l) => l.trim());
      return (
        <ul key={paragraph.slice(0, 40)} className="space-y-2 my-3">
          {filteredLines.map((line) => {
            if (line.startsWith("**")) {
              const content = line.replace(/\*\*/g, "");
              return (
                <li
                  key={line}
                  className="font-semibold text-brand-navy mt-3 first:mt-0"
                >
                  {content}
                </li>
              );
            }
            const lineText = line.replace(/^•\s*/, "");
            return (
              <li key={line} className="flex gap-2 items-start">
                <span className="text-brand-gold mt-1 shrink-0">•</span>
                <span>{parseBoldText(lineText)}</span>
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <p key={paragraph.slice(0, 40)} className="mb-3 last:mb-0">
        {paragraph}
      </p>
    );
  });
}

export function HomePage() {
  useSEO({
    title:
      "Bond Cleaning Brisbane | 100% Bond Back Guarantee | Tru Bond Cleaning Brisbane",
    description:
      "Looking for reliable bond cleaning in Brisbane? Tru Bond Cleaning Brisbane offers professional end of lease cleaning with a 100% bond back guarantee. Call 0488 841 883 today.",
    canonical: "https://trubondcleaningbrisbane.com/",
  });

  // Inject FAQ schema
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <main>
      {/* =================== HERO =================== */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/generated/hero-bond-cleaning.dim_1200x600.jpg')`,
          }}
          role="img"
          aria-label="Tru Bond Cleaning Brisbane professional bond cleaning service"
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center py-24">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-sm font-label font-semibold px-4 py-1.5 rounded-full mb-6">
            <CheckCircle size={14} />
            <span>Brisbane's #1 Bond Cleaning Service</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Brisbane's Most Trusted{" "}
            <span className="text-brand-gold">Bond Cleaning</span> Service
          </h1>

          <p className="text-white/85 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            We help you get your full bond back — guaranteed. Professional,
            thorough, and Brisbane-based.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-label font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-gold hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.whatsapp_button"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-label font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <SiWhatsapp size={22} />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-white/50 text-sm mt-6 font-body">
            Tru Bond Cleaning Brisbane · 0488 841 883 · 7 days a week
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-white/40" />
        </div>
      </section>

      {/* =================== INTRO =================== */}
      <section className="py-16 md:py-20 bg-white" aria-label="Introduction">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Brisbane's Bond Cleaning Experts
            </h2>
            <p className="text-brand-muted text-lg font-body leading-relaxed mb-4">
              Tru Bond Cleaning Brisbane is a local Brisbane team that helps
              renters get their bond back. We clean every corner of your home so
              your landlord is happy and you get your money back.
            </p>
            <p className="text-brand-muted text-lg font-body leading-relaxed mb-4">
              We follow the{" "}
              <strong className="text-brand-navy">
                Real Estate Institute of Queensland (REIQ)
              </strong>{" "}
              checklist, which means we clean to the exact standard your
              property manager expects. No shortcuts. No missed corners.
            </p>
            <p className="text-brand-muted text-lg font-body leading-relaxed">
              We've helped{" "}
              <strong className="text-brand-navy">
                hundreds of Brisbane families
              </strong>{" "}
              move out stress-free and get their full bond refunded. Let us do
              the same for you.
            </p>
          </div>
        </div>
      </section>

      {/* =================== WHY CHOOSE US =================== */}
      <section
        className="py-16 md:py-20 section-light"
        aria-label="Why choose us"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Choose Tru Bond Cleaning Brisbane?
            </h2>
            <p className="text-brand-muted text-lg font-body max-w-2xl mx-auto">
              We're not just another cleaning company. Here's why Brisbane
              renters trust us with their bond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-card card-hover border border-brand-mid-gray"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-navy flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-gold" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-brand-muted text-sm font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== SERVICES OVERVIEW =================== */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Services overview"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-brand-muted text-lg font-body max-w-2xl mx-auto">
              From full bond cleans to carpet steam cleaning — we cover
              everything your property manager checks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  data-ocid={`services.card.${service.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-card card-hover border border-brand-mid-gray group"
                >
                  <div className="bg-brand-navy p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-brand-gold" />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-brand-muted text-sm font-body leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      hash={service.anchor}
                      data-ocid={`services.link.${service.id}`}
                      className="inline-flex items-center gap-1.5 text-brand-navy hover:text-brand-gold font-label font-semibold text-sm transition-colors group-hover:gap-2"
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-label font-bold px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =================== TESTIMONIALS =================== */}
      <section
        className="py-16 md:py-20 section-navy"
        aria-label="Customer testimonials"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What Brisbane Customers Say About Us
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Real reviews from real Brisbane renters who got their full bond
              back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                data-ocid={`testimonials.item.${testimonial.id}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <StarRating count={testimonial.rating} />
                <blockquote className="mt-4 text-white/90 text-sm font-body leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                <footer className="mt-5 pt-4 border-t border-white/20">
                  <p className="font-label font-bold text-brand-gold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-white/50 text-xs font-body flex items-center gap-1">
                    <MapPin size={11} />
                    {testimonial.suburb}, Brisbane
                  </p>
                </footer>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-label font-bold px-8 py-3.5 rounded-lg transition-colors duration-200 shadow-gold"
            >
              Get Your Free Quote Today
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =================== FAQ =================== */}
      <section
        className="py-16 md:py-24 section-light"
        aria-label="Frequently asked questions"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="gold-divider mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Frequently Asked Questions About Bond Cleaning in Brisbane
              </h2>
              <p className="text-brand-muted text-lg font-body max-w-2xl mx-auto">
                Everything you need to know about bond cleaning in Brisbane —
                answered simply and clearly.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`faq-${faq.id}`}
                  data-ocid={`faq.item.${faq.id}`}
                  className="bg-white rounded-xl border border-brand-mid-gray shadow-card overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-display font-bold text-brand-navy text-base hover:text-brand-navy hover:no-underline hover:bg-brand-light-gray/50 transition-colors [&[data-state=open]]:text-brand-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-brand-muted font-body text-sm leading-relaxed">
                    <div className="pt-2">{renderFAQAnswer(faq.answer)}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 text-center">
              <p className="text-brand-muted font-body mb-4">
                Still have questions? We're happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-label font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="https://wa.me/610488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-label font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <SiWhatsapp size={18} />
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
