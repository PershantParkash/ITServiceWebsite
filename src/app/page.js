import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonial/>
      <ContactForm />
      <Footer />
    </>
  );
}
