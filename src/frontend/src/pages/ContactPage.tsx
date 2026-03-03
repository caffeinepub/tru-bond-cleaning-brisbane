import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { ServiceRequired } from "../backend.d";
import { useActor } from "../hooks/useActor";
import { useSEO } from "../hooks/useSEO";

const serviceOptions: { value: ServiceRequired; label: string }[] = [
  {
    value: ServiceRequired.bondCleaning,
    label: "Bond Cleaning / End of Lease Cleaning",
  },
  {
    value: ServiceRequired.carpetSteamCleaning,
    label: "Carpet Steam Cleaning",
  },
  {
    value: ServiceRequired.ovenKitchenCleaning,
    label: "Oven & Kitchen Cleaning",
  },
  {
    value: ServiceRequired.bathroomToiletCleaning,
    label: "Bathroom & Toilet Cleaning",
  },
  { value: ServiceRequired.windowCleaning, label: "Window Cleaning" },
  { value: ServiceRequired.wallSpotCleaning, label: "Wall Spot Cleaning" },
  { value: ServiceRequired.generalEnquiry, label: "General Enquiry" },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceRequired: ServiceRequired | "";
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  serviceRequired: "",
  message: "",
};

export function ContactPage() {
  useSEO({
    title:
      "Contact Tru Bond Cleaning Brisbane | Get a Free Bond Cleaning Quote",
    description:
      "Contact Tru Bond Cleaning Brisbane for a free bond cleaning quote. Call or WhatsApp 0488 841 883. We service all Brisbane suburbs 7 days a week.",
    canonical: "https://trubondcleaningbrisbane.com/contact",
  });

  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleServiceChange(value: string) {
    setForm((prev) => ({
      ...prev,
      serviceRequired: value as ServiceRequired,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.serviceRequired) {
      setErrorMessage("Please select a service.");
      setStatus("error");
      return;
    }

    if (!actor) {
      setErrorMessage(
        "Service unavailable. Please try again or contact us via WhatsApp on 0488 841 883.",
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await actor.submitEnquiry(
        form.name,
        form.email,
        form.phone,
        form.address,
        form.serviceRequired as ServiceRequired,
        form.message,
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMessage(
        "Something went wrong. Please try again or contact us via WhatsApp on 0488 841 883.",
      );
      setStatus("error");
    }
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="bg-brand-navy pt-28 pb-16 md:pt-32 md:pb-20"
        aria-label="Contact page hero"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            Get a Free <span className="text-brand-gold">Bond Cleaning</span>{" "}
            Quote
          </h1>
          <p className="text-white/75 text-xl font-body max-w-2xl mx-auto">
            Fill in the form below or WhatsApp us directly on 0488 841 883 for a
            fast, free quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-12 md:py-16 section-light"
        aria-label="Contact form and info"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form Column */}
            <div className="lg:col-span-2">
              {/* WhatsApp Button */}
              <div className="mb-6">
                <a
                  href="https://wa.me/610488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp_button"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-label font-bold text-lg px-6 py-4 rounded-xl transition-colors w-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  <SiWhatsapp size={26} />
                  Chat on WhatsApp — 0488 841 883
                </a>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-brand-mid-gray" />
                <span className="text-brand-muted font-label text-sm font-semibold">
                  or fill in the form below
                </span>
                <div className="flex-1 h-px bg-brand-mid-gray" />
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-card border border-brand-mid-gray p-6 md:p-8">
                <h2 className="font-display font-bold text-brand-navy text-2xl mb-6">
                  Request a Free Quote
                </h2>

                {/* Success State */}
                {status === "success" && (
                  <div
                    data-ocid="contact.form.success_state"
                    className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-xl p-5 mb-6"
                    role="alert"
                  >
                    <CheckCircle
                      size={22}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-label font-bold text-green-800 text-base mb-1">
                        Thanks! Your quote request has been received.
                      </p>
                      <p className="text-green-700 text-sm font-body leading-relaxed">
                        We'll be in touch within 2 hours. For a faster response,
                        WhatsApp us on{" "}
                        <a
                          href="https://wa.me/610488841883"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline"
                        >
                          0488 841 883
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {status === "error" && (
                  <div
                    data-ocid="contact.form.error_state"
                    className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-5 mb-6"
                    role="alert"
                  >
                    <AlertCircle
                      size={22}
                      className="text-red-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-label font-bold text-red-800 text-base mb-1">
                        Something went wrong
                      </p>
                      <p className="text-red-700 text-sm font-body">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="font-label font-semibold text-brand-navy text-sm"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Johnson"
                        data-ocid="contact.form.name.input"
                        className="border-brand-mid-gray focus:border-brand-navy focus:ring-brand-navy font-body text-sm"
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="font-label font-semibold text-brand-navy text-sm"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        data-ocid="contact.form.email.input"
                        className="border-brand-mid-gray focus:border-brand-navy font-body text-sm"
                        autoComplete="email"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="font-label font-semibold text-brand-navy text-sm"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0412 345 678"
                        data-ocid="contact.form.phone.input"
                        className="border-brand-mid-gray focus:border-brand-navy font-body text-sm"
                        autoComplete="tel"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="service"
                        className="font-label font-semibold text-brand-navy text-sm"
                      >
                        Service Required <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={form.serviceRequired}
                        onValueChange={handleServiceChange}
                        required
                      >
                        <SelectTrigger
                          id="service"
                          data-ocid="contact.form.service.select"
                          className="border-brand-mid-gray font-body text-sm"
                        >
                          <SelectValue placeholder="Select a service…" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value}
                              className="font-body text-sm"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Address */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label
                        htmlFor="address"
                        className="font-label font-semibold text-brand-navy text-sm"
                      >
                        Property Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        required
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Property address to be cleaned"
                        data-ocid="contact.form.address.input"
                        className="border-brand-mid-gray focus:border-brand-navy font-body text-sm"
                        autoComplete="street-address"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label
                        htmlFor="message"
                        className="font-label font-semibold text-brand-navy text-sm"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your property — number of bedrooms, bathrooms, condition, preferred date..."
                        data-ocid="contact.form.message.textarea"
                        className="border-brand-mid-gray focus:border-brand-navy font-body text-sm resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      data-ocid="contact.form.submit_button"
                      className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-label font-bold text-base py-6 rounded-xl transition-colors"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2
                            size={18}
                            className="mr-2 animate-spin"
                            data-ocid="contact.form.loading_state"
                          />
                          Sending your request…
                        </>
                      ) : (
                        <>
                          Send My Quote Request
                          <ArrowRight size={18} className="ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-brand-muted text-xs font-body text-center mt-3">
                      We typically respond within 2 hours during business hours
                      (7am–7pm, 7 days a week).
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-1 space-y-5">
              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/assets/generated/contact-cleaner.dim_800x500.jpg"
                  alt="Tru Bond Cleaning Brisbane cleaner ready to provide a free bond cleaning quote"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Business Info */}
              <div className="bg-white rounded-2xl shadow-card border border-brand-mid-gray p-6">
                <h2 className="font-display font-bold text-brand-navy text-xl mb-5">
                  Business Information
                </h2>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-brand-light-gray flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-label font-bold text-brand-navy text-sm">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="tel:0488841883"
                        className="text-brand-muted text-sm font-body hover:text-brand-navy transition-colors"
                      >
                        0488 841 883
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-brand-light-gray flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-label font-bold text-brand-navy text-sm">
                        Operating Hours
                      </p>
                      <p className="text-brand-muted text-sm font-body">
                        7 days a week
                      </p>
                      <p className="text-brand-muted text-sm font-body">
                        7:00 am – 7:00 pm
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-brand-light-gray flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-label font-bold text-brand-navy text-sm">
                        Service Area
                      </p>
                      <p className="text-brand-muted text-sm font-body">
                        All Brisbane suburbs
                      </p>
                      <p className="text-brand-muted text-sm font-body">
                        Up to 40km from CBD
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-brand-light-gray flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-label font-bold text-brand-navy text-sm">
                        Response Time
                      </p>
                      <p className="text-brand-muted text-sm font-body">
                        Within 2 hours
                      </p>
                      <p className="text-brand-muted text-sm font-body">
                        during business hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center mb-4">
                  <Shield size={20} className="text-brand-gold" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  100% Bond Back Guarantee
                </h3>
                <p className="text-white/70 text-sm font-body leading-relaxed">
                  If your property manager isn't satisfied with our clean within
                  72 hours, we'll come back and re-clean for free. No questions
                  asked.
                </p>
              </div>

              {/* Why Choose */}
              <div className="bg-brand-light-gray rounded-2xl p-6 border border-brand-mid-gray">
                <h3 className="font-display font-bold text-brand-navy text-base mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "REIQ checklist followed on every clean",
                    "Fully insured team",
                    "Eco-friendly products",
                    "7 days a week availability",
                    "Free re-clean guarantee",
                    "Brisbane locals",
                  ].map((point) => (
                    <li key={point} className="flex gap-2.5 items-center">
                      <CheckCircle
                        size={15}
                        className="text-brand-gold shrink-0"
                      />
                      <span className="text-brand-muted text-sm font-body">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
