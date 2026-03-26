import { motion } from "framer-motion";
import heroImage from "@/assets/hero-floral.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant floral arrangement with peonies, roses, and eucalyptus"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] mb-6">
            Erin Ehrlich
            <br />
            <span className="italic font-normal">Floral Design</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-foreground/80 max-w-md leading-relaxed">
            Bespoke floral design for life's most meaningful moments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
