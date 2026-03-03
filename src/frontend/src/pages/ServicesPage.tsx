import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import type React from "react";
import { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useSEO } from "../hooks/useSEO";

function ServiceCTA() {
  return (
    <div className="mt-8 p-6 bg-brand-light-gray rounded-xl border border-brand-mid-gray">
      <p className="font-display font-bold text-brand-navy text-lg mb-4">
        Ready to book or get a free quote?
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-label font-bold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          Get a Free Quote
          <ArrowRight size={16} />
        </Link>
        <a
          href="https://wa.me/610488841883"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-label font-bold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          <SiWhatsapp size={18} />
          WhatsApp 0488 841 883
        </a>
      </div>
    </div>
  );
}

function SectionImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-card mb-8">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 md:h-80 object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-brand-navy/70 backdrop-blur-sm px-4 py-3">
        <p className="text-white/90 text-sm font-label font-semibold">
          {caption}
        </p>
      </div>
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item) => (
        <li key={item.slice(0, 40)} className="flex gap-3 items-start">
          <CheckCircle size={16} className="text-brand-gold mt-0.5 shrink-0" />
          <span className="text-brand-muted font-body text-sm leading-relaxed">
            {parseBoldText(item)}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PriceTable({ rows }: { rows: { label: string; price: string }[] }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-brand-mid-gray">
      <table className="w-full text-sm font-body">
        <thead>
          <tr className="bg-brand-navy text-white">
            <th className="text-left px-5 py-3 font-label font-bold">
              Property Type
            </th>
            <th className="text-right px-5 py-3 font-label font-bold">
              Price From
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-white" : "bg-brand-light-gray"}
            >
              <td className="px-5 py-3 text-brand-navy font-medium">
                {row.label}
              </td>
              <td className="px-5 py-3 text-right text-brand-gold font-label font-bold">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ServicesPage() {
  useSEO({
    title:
      "Bond Cleaning Services Brisbane | End of Lease, Carpet, Oven & More | Tru Bond Cleaning Brisbane",
    description:
      "Tru Bond Cleaning Brisbane offers professional bond cleaning, carpet steam cleaning, oven cleaning, bathroom cleaning, window cleaning, and wall spot cleaning in Brisbane.",
    canonical: "https://trubondcleaningbrisbane.com/services",
  });

  // Scroll to anchor if present
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <main>
      {/* Hero */}
      <section
        className="bg-brand-navy pt-28 pb-16 md:pt-32 md:pb-20"
        aria-label="Services page hero"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            Our Professional{" "}
            <span className="text-brand-gold">Cleaning Services</span> in
            Brisbane
          </h1>
          <p className="text-white/75 text-xl font-body max-w-2xl mx-auto mb-8">
            Every service comes with our 100% bond back guarantee. We follow the
            REIQ checklist so your property manager is satisfied — or we
            re-clean for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-label font-bold px-7 py-3.5 rounded-lg transition-colors shadow-gold"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-label font-bold px-7 py-3.5 rounded-lg transition-colors"
            >
              <SiWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-brand-mid-gray sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {[
              { anchor: "bond-cleaning", label: "Bond Clean" },
              { anchor: "carpet-steam-cleaning", label: "Carpet Steam" },
              { anchor: "oven-kitchen-cleaning", label: "Oven & Kitchen" },
              { anchor: "bathroom-cleaning", label: "Bathroom" },
              { anchor: "window-cleaning", label: "Windows" },
              { anchor: "wall-spot-cleaning", label: "Wall Spot" },
            ].map(({ anchor, label }) => (
              <a
                key={anchor}
                href={`#${anchor}`}
                className="whitespace-nowrap px-4 py-2 rounded-md text-sm font-label font-semibold text-brand-muted hover:text-brand-navy hover:bg-brand-light-gray transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =================== SERVICE 1: BOND CLEANING =================== */}
      <section
        id="bond-cleaning"
        className="py-16 md:py-20 bg-white scroll-mt-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Bond Cleaning / End of Lease Cleaning Brisbane
            </h2>

            <SectionImage
              src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
              alt="Tru Bond Cleaning Brisbane professional bond cleaning and end of lease cleaning service"
              caption="Tru Bond Cleaning Brisbane — Professional End of Lease Cleaning"
            />

            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Moving out of a rental property is stressful enough without
              worrying about whether you'll get your bond back. At{" "}
              <strong className="text-brand-navy">
                Tru Bond Cleaning Brisbane
              </strong>
              , we take that stress away. Our professional end of lease cleaning
              service covers every single room in your home — thoroughly,
              carefully, and to the standard your property manager expects.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              What We Clean During a Bond Clean
            </h3>
            <BulletList
              items={[
                "**All bedrooms**: vacuuming, dusting surfaces, wiping down wardrobes inside and out, cleaning mirrors, and removing cobwebs",
                "**Kitchen**: deep cleaning the oven and stovetop, scrubbing the rangehood and filters, wiping all cupboards inside and out, cleaning the sink and benchtops, and mopping the floor",
                "**Bathrooms and toilets**: scrubbing tiles and grout, polishing taps and showerheads, cleaning toilet bowls, removing soap scum and mould, and wiping all surfaces",
                "**Living areas**: vacuuming carpets, mopping hard floors, dusting skirting boards and light switches, cleaning window sills and blinds",
                "**Windows**: cleaning glass inside, and outside where accessible",
                "**Walls**: spot cleaning marks and scuffs",
                "**Laundry (if applicable)**: wiping appliances, cleaning tubs and sinks",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Why Choose Tru Bond Cleaning Brisbane for Your End of Lease Clean?
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              We follow the{" "}
              <strong className="text-brand-navy">
                Real Estate Institute of Queensland (REIQ)
              </strong>{" "}
              checklist, which means we clean to the standard your real estate
              agent expects. Our team has years of experience cleaning rental
              properties across Brisbane — from inner-city apartments in
              Fortitude Valley and South Brisbane to family homes in Chermside,
              Sunnybank, and the western suburbs.
            </p>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              We also offer a{" "}
              <strong className="text-brand-navy">
                100% bond back guarantee
              </strong>
              . If your property manager finds anything that doesn't meet their
              standards after our clean, we'll come back and re-clean that area
              at no extra charge. We're confident in our work, and we want you
              to get every dollar of your bond returned to you.
            </p>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-6">
              Our team brings all the cleaning products and equipment needed. We
              use eco-friendly products that are tough on grime but safe for
              your family and pets. We work 7 days a week and can accommodate
              last-minute bookings when your moving timeline changes
              unexpectedly.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Bond Cleaning Pricing in Brisbane
            </h3>
            <PriceTable
              rows={[
                { label: "1-bedroom unit", price: "From $280" },
                { label: "2-bedroom home", price: "From $350" },
                { label: "3-bedroom home", price: "From $450" },
                { label: "4-bedroom home", price: "From $550" },
              ]}
            />
            <p className="text-brand-muted font-body text-sm">
              All prices include a detailed clean of every room. Carpet steam
              cleaning and oven deep cleaning are available as add-ons at
              transparent, upfront prices.
            </p>

            <p className="text-brand-muted font-body text-base leading-relaxed mt-4">
              Don't risk losing your bond. Contact Tru Bond Cleaning Brisbane
              today for a free, no-obligation quote.
            </p>
            <ServiceCTA />
          </div>
        </div>
      </section>

      {/* =================== SERVICE 2: CARPET STEAM CLEANING =================== */}
      <section
        id="carpet-steam-cleaning"
        className="py-16 md:py-20 section-light scroll-mt-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Carpet Steam Cleaning Brisbane
            </h2>

            <SectionImage
              src="/assets/generated/carpet-steam-cleaning.dim_800x500.jpg"
              alt="Tru Bond Cleaning Brisbane professional carpet steam cleaning service"
              caption="Tru Bond Cleaning Brisbane — Professional Carpet Steam Cleaning"
            />

            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Carpets hold onto dirt, dust, allergens, and stains long after a
              regular vacuum. At{" "}
              <strong className="text-brand-navy">
                Tru Bond Cleaning Brisbane
              </strong>
              , we use professional hot water extraction — the most effective
              carpet cleaning method available — to deep clean your carpets and
              leave them looking and smelling fresh.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              What is Hot Water Extraction (Steam Cleaning)?
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Hot water extraction works by injecting hot water mixed with a
              professional cleaning solution deep into the carpet fibres. A
              powerful extraction machine then pulls out the water along with
              all the dirt, bacteria, allergens, and stains it has loosened.
              This method removes up to{" "}
              <strong className="text-brand-navy">95% of embedded dirt</strong>{" "}
              and is recommended by most carpet manufacturers.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              What Our Carpet Steam Cleaning Covers
            </h3>
            <BulletList
              items={[
                "Pre-treatment of visible stains (food, drinks, pet accidents, mud)",
                "Hot water extraction across the full carpet area",
                "Deodorising treatment to remove pet smells and musty odours",
                "Edge cleaning along skirting boards and walls",
                "Post-cleaning inspection to ensure full coverage",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Why Get Carpets Steam Cleaned for Bond Cleaning?
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Many Brisbane property managers and landlords specifically require
              professional carpet steam cleaning as part of the bond clean. If
              you have pets or if your tenancy agreement includes a carpet
              cleaning clause, you must have the carpets professionally steam
              cleaned — not just vacuumed. Showing a receipt from a professional
              carpet cleaner like Tru Bond Cleaning Brisbane satisfies this
              requirement and protects your bond.
            </p>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-6">
              Our carpet cleaning equipment is commercial-grade, delivering
              higher water temperature and stronger extraction than rental
              machines from hardware stores. This means better results, faster
              drying times, and a deeper clean.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Common Carpet Stains We Remove
            </h3>
            <BulletList
              items={[
                "Red wine and coffee stains",
                "Pet urine and faecal stains",
                "Mud and soil",
                "Food grease",
                "General foot traffic grime",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Carpet Steam Cleaning Prices (Brisbane)
            </h3>
            <PriceTable
              rows={[
                { label: "Per room", price: "From $50" },
                {
                  label: "Full house bundle (with bond clean)",
                  price: "Bundle pricing available",
                },
                { label: "Pre-treatment of heavy stains", price: "Included" },
              ]}
            />
            <p className="text-brand-muted font-body text-sm">
              We recommend booking carpet steam cleaning as part of your full
              bond cleaning package. We offer discounted bundle pricing when you
              book both services together.
            </p>

            <ServiceCTA />
          </div>
        </div>
      </section>

      {/* =================== SERVICE 3: OVEN & KITCHEN =================== */}
      <section
        id="oven-kitchen-cleaning"
        className="py-16 md:py-20 bg-white scroll-mt-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Oven & Kitchen Cleaning Brisbane
            </h2>

            <SectionImage
              src="/assets/generated/oven-kitchen-cleaning.dim_800x500.jpg"
              alt="Tru Bond Cleaning Brisbane professional oven and kitchen cleaning service"
              caption="Tru Bond Cleaning Brisbane — Deep Oven & Kitchen Cleaning"
            />

            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              The kitchen is often the hardest room to clean during a bond
              clean. Ovens build up years of baked-on grease and carbon deposits
              that don't come off with regular spray-and-wipe products. At{" "}
              <strong className="text-brand-navy">
                Tru Bond Cleaning Brisbane
              </strong>
              , we specialise in deep kitchen and oven cleaning that leaves
              every surface spotless.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              What We Clean in the Kitchen
            </h3>
            <BulletList
              items={[
                "**Oven and stovetop**: We dismantle oven racks, trays, and burners, soak them in professional degreasers, and scrub every surface inside the oven cavity. We clean the door glass, the grill, and the element area.",
                "**Rangehood and filters**: We remove and degrease rangehood filters, wipe down the exterior, and clean the fan cover. This is one of the most overlooked areas that property managers check.",
                "**Cupboards and drawers**: We wipe all cupboard doors inside and out, clean the hinges, and remove any food residue or sticky marks.",
                "**Benchtops and splashback**: We scrub benchtops with non-abrasive cleaners and polish the splashback tiles or glass.",
                "**Sink and taps**: We descale and polish the sink, taps, and mixer, removing calcium deposits and water marks.",
                "**Dishwasher**: We clean the door seal, interior walls, and filter.",
                "**Microwave**: Interior and exterior cleaned and deodorised.",
                "**Floor**: Swept, mopped, and dried.",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Why Professional Kitchen Cleaning Matters for Your Bond
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              The kitchen is the{" "}
              <strong className="text-brand-navy">
                number one reason bonds get withheld in Queensland
              </strong>
              . Property managers check ovens, rangehoods, and stovetops very
              closely during exit inspections. A dirty oven is one of the most
              common reasons for bond deductions. Our team uses
              professional-grade degreasers that cut through even the toughest
              baked-on grease — the kind of product you can't buy in a
              supermarket.
            </p>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-6">
              We've cleaned kitchens in thousands of Brisbane rental properties,
              from small apartment kitchens to large open-plan family kitchen
              spaces. We know exactly what Brisbane real estate agents look for,
              and we don't leave until the kitchen passes inspection.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Common Problems We Fix
            </h3>
            <BulletList
              items={[
                "Burnt-on grease in the oven",
                "Yellow grease buildup on rangehood filters",
                "Sticky cupboard doors",
                "Calcium scale on sink taps",
                "Mould on rubber seals",
                "Greasy splashbacks",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Oven & Kitchen Cleaning Prices (Brisbane)
            </h3>
            <PriceTable
              rows={[
                { label: "Standalone oven deep clean", price: "From $80" },
                {
                  label: "Full kitchen clean (as part of bond clean)",
                  price: "Included",
                },
                {
                  label: "Add-on kitchen deep clean (existing tenancy)",
                  price: "From $150",
                },
              ]}
            />

            <ServiceCTA />
          </div>
        </div>
      </section>

      {/* =================== SERVICE 4: BATHROOM =================== */}
      <section
        id="bathroom-cleaning"
        className="py-16 md:py-20 section-light scroll-mt-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Bathroom & Toilet Cleaning Brisbane
            </h2>

            <SectionImage
              src="/assets/generated/bathroom-cleaning.dim_800x500.jpg"
              alt="Tru Bond Cleaning Brisbane professional bathroom and toilet cleaning service"
              caption="Tru Bond Cleaning Brisbane — Spotless Bathroom & Toilet Cleaning"
            />

            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Bathrooms and toilets are inspected very closely during bond exits
              in Queensland. At{" "}
              <strong className="text-brand-navy">
                Tru Bond Cleaning Brisbane
              </strong>
              , we deliver a thorough bathroom clean that removes soap scum,
              mould, limescale, and grime — leaving your bathroom sparkling
              white and ready for inspection.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              What We Clean in the Bathroom
            </h3>
            <BulletList
              items={[
                "**Shower and bath**: Scrub tiles and grout, remove soap scum from glass screens, descale showerhead, clean taps and mixer, polish chrome fixtures",
                "**Toilet**: Clean inside the bowl using professional disinfectant, wipe the seat, lid, cistern, base, and behind the toilet",
                "**Vanity and basin**: Wipe the basin, clean taps, polish mirror, wipe down storage shelves and cabinets",
                "**Tiles and grout**: Scrub tiles and use grout cleaner to remove mould and discolouration",
                "**Exhaust fan**: Remove and clean the cover",
                "**Towel rails and toilet roll holders**: Polish and remove any rust or calcium marks",
                "**Floor**: Sweep and mop, clean corners and edges",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Common Bathroom Problems We Fix
            </h3>
            <BulletList
              items={[
                "Pink and black mould in grout and silicone",
                "Soap scum on glass shower screens",
                "Limescale on taps and showerheads",
                "Water marks on mirrors and tiles",
                "Yellowing toilet bowls",
                "Dust and grime on exhaust fan covers",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Why Bathrooms Are Critical for Bond Cleaning
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Brisbane property managers pay close attention to bathrooms. Mould
              in grout and limescale on taps are two of the most common reasons
              bond deductions are made. Our team uses commercial-grade mould
              removers, tile cleaners, and descaling products that penetrate and
              dissolve these problems completely.
            </p>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-6">
              We also clean around difficult areas that many DIY cleaners miss —
              the back of the toilet, behind the toilet seat hinges, and the
              sealant lines around the bath or shower base. These are exactly
              the spots that experienced property managers check. For homes with
              multiple bathrooms, we clean all bathrooms to the same high
              standard.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Bathroom Cleaning Prices (Brisbane)
            </h3>
            <PriceTable
              rows={[
                {
                  label: "Included as part of full bond clean",
                  price: "Included",
                },
                {
                  label: "Standalone bathroom deep clean",
                  price: "From $100 per bathroom",
                },
                { label: "Grout and mould treatment", price: "Included" },
              ]}
            />
            <p className="text-brand-muted font-body text-sm">
              If your bathrooms have significant mould or heavy limescale
              buildup, let us know when you book and we'll ensure we bring the
              right products and allow the extra time needed.
            </p>

            <ServiceCTA />
          </div>
        </div>
      </section>

      {/* =================== SERVICE 5: WINDOWS =================== */}
      <section
        id="window-cleaning"
        className="py-16 md:py-20 bg-white scroll-mt-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Window Cleaning Brisbane
            </h2>

            <SectionImage
              src="/assets/generated/window-cleaning.dim_800x500.jpg"
              alt="Tru Bond Cleaning Brisbane professional window cleaning service"
              caption="Tru Bond Cleaning Brisbane — Streak-Free Window Cleaning"
            />

            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Clean windows make a huge difference to the overall presentation
              of your property. At{" "}
              <strong className="text-brand-navy">
                Tru Bond Cleaning Brisbane
              </strong>
              , we clean windows inside and out, leaving the glass streak-free
              and sparkling clear for your final inspection.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              What Our Window Cleaning Service Covers
            </h3>
            <BulletList
              items={[
                "**Interior glass**: All window panes cleaned using professional glass cleaner and squeegee or microfibre techniques",
                "**Exterior glass**: Ground-floor and accessible windows cleaned from outside",
                "**Window tracks and sills**: Dirt, dead insects, and grime removed from all tracks and sills",
                "**Window frames**: Wiped and cleaned",
                "**Sliding door glass**: Both sides of sliding doors cleaned",
                "**Fly screens**: Removed, rinsed, dried, and replaced (where applicable)",
                "**Mirrors**: All interior mirrors cleaned streak-free",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Why Window Cleaning Matters for Bond Inspections
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Brisbane gets a lot of sun, and dirty windows show up clearly in
              bright light. Property managers notice streaks, dust, and grime on
              windows immediately. Interior window cleaning is included in most
              bond clean checklists — but many renters forget about window
              tracks, fly screens, and window sills, which are often covered in
              years of accumulated dirt and insect debris.
            </p>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-6">
              Our professional window cleaning team uses commercial squeegees,
              scrubbers, and streak-free solutions to deliver a flawless result.
              We don't use cheap paper towels that leave lint behind — we use
              professional-grade microfibre cloths and rubber squeegees for a
              perfect streak-free finish. For properties with upper-storey
              windows, we can discuss safe access options during your quote.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Common Window Issues We Fix
            </h3>
            <BulletList
              items={[
                "Streaky glass from DIY cleaning attempts",
                "Dirt and dust in window tracks",
                "Dead insects in window sills and frames",
                "Grime and calcium deposits on glass",
                "Dirty fly screens",
                "Dusty venetian blinds or roller blinds",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Window Cleaning Prices (Brisbane)
            </h3>
            <PriceTable
              rows={[
                {
                  label: "Interior windows (with bond clean)",
                  price: "Included",
                },
                {
                  label: "Exterior windows (standard house, ground floor)",
                  price: "From $80",
                },
                {
                  label: "Full window clean (inside + outside)",
                  price: "From $120",
                },
                { label: "Fly screen cleaning", price: "From $30 additional" },
                {
                  label: "Venetian blind cleaning",
                  price: "From $15 per blind",
                },
              ]}
            />

            <ServiceCTA />
          </div>
        </div>
      </section>

      {/* =================== SERVICE 6: WALL SPOT =================== */}
      <section
        id="wall-spot-cleaning"
        className="py-16 md:py-20 section-light scroll-mt-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Wall Spot Cleaning Brisbane
            </h2>

            <SectionImage
              src="/assets/generated/wall-spot-cleaning.dim_800x500.jpg"
              alt="Tru Bond Cleaning Brisbane professional wall spot cleaning service"
              caption="Tru Bond Cleaning Brisbane — Careful Wall Spot Cleaning"
            />

            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Walls pick up marks, scuffs, fingerprints, and stains over time —
              especially in hallways, near light switches, and in children's
              rooms. At{" "}
              <strong className="text-brand-navy">
                Tru Bond Cleaning Brisbane
              </strong>
              , we carefully clean wall marks without damaging the paint, so
              your walls look fresh and clean for the final inspection.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              What is Wall Spot Cleaning?
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Wall spot cleaning involves identifying and removing individual
              marks, scuffs, fingerprints, crayon marks, and light stains from
              painted interior walls. It's different from a full wall repaint —
              instead, we treat specific problem areas to restore the wall to a
              clean, presentable condition.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              What We Look for and Clean
            </h3>
            <BulletList
              items={[
                "Scuff marks from furniture and moving boxes",
                "Fingerprints and handprints (especially near light switches and doorframes)",
                "Crayon and pencil marks (children's rooms)",
                "Grease marks in hallways and kitchen areas",
                "Ball marks in living rooms",
                "Blu-tack and adhesive tape residue",
                "Dust and cobwebs along wall-ceiling joins",
              ]}
            />

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              How We Clean Walls Without Damaging Paint
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-3">
              We use a process of gentle cleaning to avoid stripping paint or
              leaving shiny patches. We start with the least abrasive method and
              increase only if needed:
            </p>
            <ol className="space-y-2 mb-4">
              {[
                {
                  num: 1,
                  step: "Dry microfibre cloth to remove loose dust and marks",
                },
                { num: 2, step: "Damp microfibre cloth with clean water" },
                { num: 3, step: "Mild sugar soap solution for stubborn marks" },
                {
                  num: 4,
                  step: "Mr. Clean Magic Eraser for tough scuffs (tested on inconspicuous area first)",
                },
              ].map(({ num, step }) => (
                <li key={num} className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-navy text-brand-gold text-xs font-label font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {num}
                  </span>
                  <span className="text-brand-muted font-body text-sm leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Why Wall Cleaning Matters for Bond Inspections
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-4">
              Many renters overlook walls during their DIY clean and are
              surprised when property managers note wall marks on the exit
              inspection report. Marks on walls — even small ones — can result
              in bond deductions for repainting costs. In Queensland, landlords
              can only deduct for painting if the damage exceeds fair wear and
              tear. However, marks that you can remove with proper cleaning
              techniques shouldn't result in a deduction at all. Our wall spot
              cleaning service prevents unnecessary bond deductions for issues
              that are easily fixed.
            </p>

            <h3 className="font-display font-bold text-brand-navy text-xl mt-8 mb-3">
              Wall Spot Cleaning Prices (Brisbane)
            </h3>
            <PriceTable
              rows={[
                {
                  label: "Included as part of full bond clean (standard rooms)",
                  price: "Included",
                },
                {
                  label: "Standalone wall spot cleaning (single level home)",
                  price: "From $80",
                },
                {
                  label: "Heavy marking (crayon, scuffs throughout)",
                  price: "Quoted individually",
                },
                {
                  label: "Full wall wash (entire walls)",
                  price: "Quoted individually",
                },
              ]}
            />
            <p className="text-brand-muted font-body text-sm">
              If you have heavy wall marking throughout the property — for
              example, a home with young children — let us know in advance so we
              can allocate extra time and bring the right products.
            </p>

            <ServiceCTA />
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-brand-navy" aria-label="Call to action">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/70 text-lg font-body max-w-xl mx-auto mb-8">
            Book your bond clean today. We service all Brisbane suburbs, 7 days
            a week, with a 100% bond back guarantee.
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
