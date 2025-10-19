"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Lightbulb } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarStyleMinimal
            logoSrc="/brand/logo.svg"
            brandName="Webild"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Build Better Websites"
            description="Create stunning digital experiences with our technology"
            imageSrc="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Get Started", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover our mission and values"
            bulletPoints={[
              { title: "Innovation", description: "Pushing the boundaries of technology", icon: Lightbulb },
              { title: "Quality", description: "Excellence in every detail" }
            ]}
            imageSrc="https://images.pexels.com/photos/34325550/pexels-photo-34325550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            title="Trusted by Industry Leaders"
            description="Join thousands who rely on our platform"
            logos={[
              "https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/4560039/pexels-photo-4560039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/17894356/pexels-photo-17894356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            ]}
          />
        </div>
      </div>
      <div id="testimonials" data-section="testimonials" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Customers Say"
            description="Real feedback from our happy clients"
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "CEO", company: "TechCorp", rating: 5, imageSrc: "/public/images/placeholder.webp" },
              { id: "2", name: "Michael Chen", role: "CTO", company: "InnovateLab", rating: 5, imageSrc: "/public/images/placeholder.webp" },
              { id: "3", name: "Emily Rodriguez", role: "Marketing Director", company: "GrowthCo", rating: 5, imageSrc: "/public/images/placeholder.webp" },
              { id: "4", name: "David Kim", role: "Product Manager", company: "StartupXYZ", rating: 5, imageSrc: "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe for weekly updates and exclusive content."
            imageSrc="https://images.pexels.com/photos/34325550/pexels-photo-34325550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            mediaPosition="right"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [ { label: "About", href: "about" }, { label: "Contact", href: "contact" } ] },
              { title: "Support", items: [ { label: "Help Center", href: "#" }, { label: "Privacy Policy", href: "#" } ] }
            ]}
            copyrightText="© 2025 | Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
