import Head from "next/head";

import Hero from "../components/layout/Hero/Hero.jsx";
import ServicesList from "../components/services/ServicesList.jsx";
import TestimonyList from "../components/testimonies/TestimonyList.jsx";
import ContactSection from "../components/ContactSection/ContactSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <Head>
        
        <title>
          Professional Cleaning Services in Melbourne | Juva Cleaning
        </title>

        {/* Meta description */}
        <meta
          name="description"
          content="Juva Cleaning offers trusted, affordable home cleaning services in Melbourne. Regular, deep and end of lease cleaning tailored for seniors and busy households."
        />

        {/* Local SEO */}
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />

        {/* Open Graph */}
        <meta property="og:title" content="Professional Cleaning Services in Melbourne | Juva Cleaning" />
        <meta
          property="og:description"
          content="Reliable home cleaning services in Melbourne. Book regular, deep or end of lease cleaning with trusted professionals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AU" />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <ServicesList />
      <TestimonyList />
      <ContactSection />
      <Footer />
    </>
  );
}



