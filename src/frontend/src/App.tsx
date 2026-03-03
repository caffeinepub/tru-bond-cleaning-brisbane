import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";

// =====================================================
// JSON-LD: LocalBusiness Schema (global)
// =====================================================
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Brisbane",
  url: "https://trubondcleaningbrisbane.com",
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: "Brisbane, QLD, Australia",
  description:
    "Professional bond cleaning and end of lease cleaning services in Brisbane with a 100% bond back guarantee.",
  priceRange: "$$",
  openingHours: "Mo-Su 07:00-19:00",
};

// Root layout component
function RootLayout() {
  // Inject LocalBusiness schema globally
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "local-business-schema";
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById("local-business-schema");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

// =====================================================
// Route Definitions
// =====================================================
const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
