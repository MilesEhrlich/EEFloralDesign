import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28" />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
