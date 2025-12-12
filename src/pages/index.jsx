// src/pages/index.jsx
import Hero from "../components/layout/Hero/Hero.jsx";
import ServicesList from "../components/services/ServicesList.jsx";
import TestimonyList from "../components/testimonies/TestimonyList.jsx"
import ContactSection from "../components/ContactSection/ContactSection.jsx";
import Footer from "../components/Footer/Footer.jsx"; 

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesList />
      <TestimonyList />
      <ContactSection />
      <Footer />
    </>
  );
}


