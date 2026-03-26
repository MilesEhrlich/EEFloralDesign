import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-card">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-display italic text-secondary-foreground/60 text-lg mb-4">Est. 2018</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
            Rooted in Beauty
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Bloom & Company is a boutique floral studio specializing in weddings, 
            events, and curated everyday arrangements. We believe flowers tell stories — 
            and every petal, stem, and texture is chosen with care and intention.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Based in the heart of the city, we work closely with local growers 
            to bring seasonal, sustainably sourced blooms to every design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
