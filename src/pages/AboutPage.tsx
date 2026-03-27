import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28" />
      <About />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
