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
      { title: "Just Smile Dental Care & Maxillofacial Clinic — Best Dental Clinic in Surat" },
      {
        name: "description",
        content:
          "Just Smile Dental Care & Maxillofacial Clinic in Dindoli, Surat. Painless dental treatments, implants, smile makeover, root canal & braces by Dr. Nikunj Patel. Book your appointment today.",
      },
      { property: "og:title", content: "Just Smile Dental Care & Maxillofacial Clinic — Surat" },
      {
        property: "og:description",
        content: "Painless dental treatments, implants, smile makeover & more in Dindoli, Surat.",
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
