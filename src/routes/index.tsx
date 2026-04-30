import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutDoctor from "@/components/AboutDoctor";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ClinicGallery from "@/components/ClinicGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentForm from "@/components/AppointmentForm";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dental Clinic — Best Dental Clinic in India" },
      {
        name: "description",
        content:
          "Experience world-class dental care at Dental Clinic. From routine check-ups to complete smile makeovers.",
      },
      { property: "og:title", content: "Dental Clinic — Best Dental Clinic in India" },
      {
        property: "og:description",
        content: "Experience world-class dental care at Dental Clinic.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsBar />
      <AboutDoctor />
      <WhyChooseUs />
      <ServicesSection />
      <BeforeAfterGallery />
      <ClinicGallery />
      <TestimonialsSection />
      <AppointmentForm />
      <FAQSection />
      <MapSection />
      <Footer />
      <FloatingButtons />
    </>
  );
}
