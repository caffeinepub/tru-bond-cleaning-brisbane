# Tru Bond Cleaning Brisbane

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full multi-page SEO-optimised website for "Tru Bond Cleaning Brisbane"
- Pages: Home, Services, About Us, Contact
- Backend: contact form submission handler (stores enquiries)
- Frontend: React + TypeScript with React Router for multi-page navigation

### Modify
N/A

### Remove
N/A

## Implementation Plan

### Backend
- `ContactEnquiry` type: id, name, email, phone, address, serviceRequired, message, timestamp
- `submitEnquiry(enquiry)` -> returns Ok or Err
- `getEnquiries()` -> returns list (admin use)

### Frontend Pages

**Home Page (`/`)**
- SEO: title "Bond Cleaning Brisbane | Tru Bond Cleaning Brisbane", meta description
- Hero section: headline "Brisbane's Most Trusted Bond Cleaning Service", subheadline, CTA buttons (Get a Free Quote → /contact, WhatsApp link to https://wa.me/610488841883)
- Intro paragraph about Tru Bond Cleaning Brisbane
- Why Choose Us: 6 bullet points (100% bond back guarantee, experienced cleaners, eco-friendly products, flexible scheduling, fully insured, Brisbane locals)
- Services overview: 6 cards linking to /services with anchor (#service-name)
- Testimonials: 3–5 Brisbane customer reviews
- FAQ section: 10 questions with detailed Australian English answers
- Schema markup: LocalBusiness, FAQPage, Service

**Services Page (`/services`)**
- SEO title and meta description per service
- 6 service sections, each ~400 words:
  1. Bond Cleaning / End of Lease Cleaning Brisbane
  2. Carpet Steam Cleaning Brisbane
  3. Oven & Kitchen Cleaning Brisbane
  4. Bathroom & Toilet Cleaning Brisbane
  5. Window Cleaning Brisbane
  6. Wall Spot Cleaning Brisbane
- CTA after each service section
- Schema: Service schema per section

**About Us Page (`/about`)**
- SEO title/meta
- Company story, mission, values
- Team introduction
- Why we're Brisbane's best bond cleaners
- Certifications/guarantees
- CTA

**Contact Page (`/contact`)**
- SEO title/meta
- Quote/contact form: Name, Email, Phone, Address, Service Required (dropdown), Message
- Form submits to backend `submitEnquiry` (internally routes to humptydumptybondcleaning@gmail.com — NOT displayed)
- WhatsApp button: https://wa.me/610488841883 (0488 841 883)
- Business hours, service areas
- Schema: ContactPage

### Design
- Colour scheme: deep blue (#1a2e5a) and white with gold/yellow (#f5a623) accents
- Sticky navigation header with logo and nav links
- Mobile-responsive layout (Tailwind CSS)
- Footer: WhatsApp contact only (no email), nav links, copyright
- All images: descriptive alt text including "Tru Bond Cleaning Brisbane"
- Generated images for hero, services, about, team sections
- data-ocid markers on all interactive elements

### Images to Generate
1. Hero: professional bond cleaners in a bright Brisbane home
2. Services overview: cleaning team with equipment
3. Carpet steam cleaning: steam cleaner on carpet
4. Oven/kitchen cleaning: sparkling clean kitchen
5. Bathroom cleaning: spotless bathroom
6. Window cleaning: cleaner on windows with Brisbane skyline
7. About Us: friendly team photo
8. Contact: cleaner with clipboard
