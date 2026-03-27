import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28" />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
