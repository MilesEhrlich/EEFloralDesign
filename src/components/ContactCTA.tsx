import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactCTA = () => (
  <section className="bg-primary text-primary-foreground py-20 md:py-28 px-6 md:px-12">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
          Let's Create<br />
          <span className="italic font-normal">Something Beautiful</span>
        </h2>
        <p className="font-body text-primary-foreground/70 max-w-2xl leading-relaxed mb-10">
          Ready to bring your vision to life? I'd love to hear about your event,
          project, or simply your love for flowers.
        </p>
        <Link
          to="/contact"
          className="inline-block font-body text-sm tracking-widest uppercase border-b border-primary-foreground/40 hover:border-primary-foreground pb-1 transition-colors"
        >
          Request a Consultation
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
