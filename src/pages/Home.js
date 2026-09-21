import React from "react";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import Collections from "../components/Collections";
import Services from "../components/Services";
import Categories from "../components/Categories/Categories";
import FeaturedWeddings from "../components/FeaturedWeddings";
import PortfolioGallery from "../components/PortfolioGallery";
import ProcessSection from "../components/ProcessSection";
import StatsSection from "../components/StatsSection";
import ManifestoSection from "../components/ManifestoSection";
import SignatureStatement from "../components/SignatureStatement";
import Testimonial from "../components/Testimonial";
import InstagramGallery from "../components/InstagramGallery";
import FinalCTA from "../components/FinalCTA";
// import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <Collections limit={4} showExplore={true} />
      <SignatureStatement
        image="/images/misc/statement-2-entrance.webp"
        alt="Grand floral-dressed venue entrance"
        lines={["It's not just a venue.", "It's the beginning of your story."]}
      />
      <Services limit={4} explore={true} />
      <Categories limit={8} />
      <FeaturedWeddings limit={3} />
      <PortfolioGallery />
      <ProcessSection />
      <StatsSection />
      <ManifestoSection />
      <SignatureStatement />
      <Testimonial />
      <InstagramGallery />
      <FinalCTA />
      {/* <ContactSection /> */}
    </>
  );
}
