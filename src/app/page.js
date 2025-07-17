import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import ConsultationPricingComponent from "@/components/ConsultationPricing"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Testimonial />
      <ConsultationPricingComponent />
      <ContactForm />  
      <Footer />
    </>
  );
}
