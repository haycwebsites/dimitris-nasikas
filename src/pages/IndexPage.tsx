// HAYC Pipeline: This file is overwritten during
// project creation with the client's home page
// HTML converted to JSX.
// Source: index.html body content from HTML template.

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import BiographySection from '../sections/BiographySection';
import HospitalSection from '../sections/HospitalSection';
import ConsultationSection from '../sections/ConsultationSection';
import ContactSection from '../sections/ContactSection';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BiographySection />
        <HospitalSection />
        <ConsultationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
