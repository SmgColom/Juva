import Head from "next/head";
import Hero from "../components/layout/Hero/Hero.jsx";
import ServicesList from "../components/services/ServicesList.jsx";
import ImageList from "../components/images/ImageList.jsx";
import TestimonyList from "../components/testimonies/TestimonyList.jsx";
import CalculatorSection from "../components/calculator/CalculatorSection.jsx";
import ContactSection from "../components/ContactSection/ContactSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Qr from "../components/QRSection/Qr.jsx";


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <title>
          Professional Cleaning Services in Melbourne | Juva Cleaning
        </title>

        {/* 🔥 CANONICAL (CLAVE PARA SEO) */}
        <link rel="canonical" href="https://juvacleaning.com.au" />

        <meta
          name="google-site-verification"
          content="z3oVAvtIjinawOqVfh3w1GUEVhsEu9lmBLr857Vm1ac"
        />

        <meta
          name="description"
          content="Juva Cleaning offers trusted, affordable home cleaning services in Melbourne. Regular, deep and end of lease cleaning tailored for seniors and busy households."
        />

        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />

        {/* 🔥 OPEN GRAPH */}
        <meta
          property="og:title"
          content="Professional Cleaning Services in Melbourne | Juva Cleaning"
        />
        <meta
          property="og:description"
          content="Reliable home cleaning services in Melbourne. Book regular, deep or end of lease cleaning with trusted professionals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AU" />

        {/* 🔥 URL CORRECTA */}
        <meta property="og:url" content="https://juvacleaning.com.au" />

        {/* (opcional pero recomendado) */}
        <meta property="og:image" content="https://juvacleaning.com.au/og-image.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🔥 JSON-LD (esto sube tu SEO local) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Juva Cleaning",
              url: "https://juvacleaning.com.au",
              image: "https://juvacleaning.com.au/og-image.jpg",
              description:
                "Professional home cleaning services in Melbourne including regular, deep and end of lease cleaning.",
              areaServed: {
                "@type": "Place",
                name: "Melbourne",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Melbourne",
                addressRegion: "VIC",
                addressCountry: "AU",
              },
            }),
          }}
        />
      </Head>

      <Hero />
      <ServicesList />
      <TestimonyList />
      <ImageList />
       <CalculatorSection />
      <ContactSection />
      <Qr />
      <Footer />
    </>
  );
}



