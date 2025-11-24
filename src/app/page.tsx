"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles } from "lucide-react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LuxeHavenPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Luxe Haven"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Amenities", id: "features" },
            { name: "Rooms", id: "rooms" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Welcome to Luxe Haven"
          description="Experience unforgettable luxury with world-class amenities, personalized service, and breathtaking views. Your perfect getaway awaits."
          tag="Premium Hotel Experience"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017013553-sce71d7j.jpg",
              imageAlt: "Elegant hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017014275-vali4nuf.jpg",
              imageAlt: "Luxurious bedroom suite"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017015183-mkn869bn.jpg",
              imageAlt: "Resort swimming pool"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017015710-ia4j147f.jpg",
              imageAlt: "Hotel spa facility"
            }
          ]}
          stackedVariant="card"
          imagePosition="right"
          buttons={[
            { text: "Book Now", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Discover the essence of hospitality. At Luxe Haven, we blend timeless elegance with contemporary comfort to create unforgettable moments for every guest."
          buttons={[
            { text: "View Amenities", href: "features" },
            { text: "Book Your Stay", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="World-Class Amenities"
          description="Every detail is crafted to enhance your stay with premium services and facilities"
          tag="Premium Services"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          features={[
            {
              id: "01",
              title: "Fitness Center",
              description: "State-of-the-art gym with personal training services and wellness programs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017016240-aoukwj9y.jpg",
              imageAlt: "Hotel fitness center"
            },
            {
              id: "02",
              title: "Luxury Spa",
              description: "Full-service spa featuring massages, treatments, and relaxation therapies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017016948-bw52v2ir.jpg",
              imageAlt: "Hotel spa facility"
            },
            {
              id: "03",
              title: "Fine Dining",
              description: "Michelin-inspired restaurant with international cuisine and sommelier service",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017017447-ieak9p72.jpg",
              imageAlt: "Hotel restaurant"
            },
            {
              id: "04",
              title: "Business Center",
              description: "High-speed WiFi, meeting rooms, and professional concierge support available 24/7",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017018083-jat5jynq.jpg",
              imageAlt: "Hotel business center"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Room Types"
          description="Choose from our curated selection of elegantly appointed rooms and suites"
          tag="Accommodation Options"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              brand: "Luxe Haven",
              name: "Standard Room",
              price: "$180/night",
              rating: 4,
              reviewCount: "3.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017022782-gn22ml7s.jpg",
              imageAlt: "Standard hotel room"
            },
            {
              id: "2",
              brand: "Luxe Haven",
              name: "Deluxe Suite",
              price: "$320/night",
              rating: 5,
              reviewCount: "5.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017021548-dc4r1e12.jpg",
              imageAlt: "Deluxe hotel suite"
            },
            {
              id: "3",
              brand: "Luxe Haven",
              name: "Presidential Suite",
              price: "$650/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017022177-j9qp9gtv.jpg",
              imageAlt: "Premium presidential suite"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Guest Reviews"
          description="Hear from our valued guests about their experiences at Luxe Haven"
          tag="Guest Testimonials"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, Travel Corp",
              company: "International Travel",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017018625-vxp7hk7x.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Entrepreneur",
              company: "Tech Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017019318-5fn679go.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "Global Marketing",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017019979-ajvp68qq.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Executive Manager",
              company: "Business Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764017020703-5t665i29.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about booking, amenities, and services at Luxe Haven"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 48 hours before arrival for a full refund. Cancellations within 48 hours may incur a one-night charge."
            },
            {
              id: "2",
              title: "Are pets allowed?",
              content: "Yes, we welcome pets with a non-refundable fee of $50 per stay. Pets must be kept in rooms and not left unattended."
            },
            {
              id: "3",
              title: "Is breakfast included?",
              content: "Continental breakfast is complimentary for suite guests. Standard room guests can add breakfast for $25 per person per day."
            },
            {
              id: "4",
              title: "Do you offer airport transfers?",
              content: "Yes, we provide airport transfers for $45 each way. Please arrange this through our concierge at least 24 hours before arrival."
            },
            {
              id: "5",
              title: "What parking options are available?",
              content: "We offer complimentary valet parking for all guests. Self-parking is also available in our secure underground garage at no charge."
            },
            {
              id: "6",
              title: "Are there group rates?",
              content: "Yes, we offer special rates for groups of 10 or more. Please contact our group sales team for a customized quote."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Plan Your Stay"
          description="Book your room or contact us with any questions. Our team is here to ensure your perfect hotel experience."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "checkIn", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkOut", type: "date", placeholder: "Check-out Date", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Book Now"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Luxe Haven"
          copyrightText="© 2025 Luxe Haven Hotels. All rights reserved."
          columns={[
            {
              title: "Rooms",
              items: [
                { label: "Standard Rooms", href: "rooms" },
                { label: "Deluxe Suites", href: "rooms" },
                { label: "Presidential Suite", href: "rooms" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Dining", href: "features" },
                { label: "Spa & Wellness", href: "features" },
                { label: "Business Center", href: "features" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}