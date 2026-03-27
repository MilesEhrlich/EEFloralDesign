import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Buffer strip between hero and contact section */}
      <div className="py-20 md:py-5 px-6 md:px-12 bg-background">
        <div className="container mx-auto">

        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
