import { motion } from "framer-motion";

const services = [
  { title: "Weddings", desc: "Full floral design for your ceremony, reception, and everything in between." },
  { title: "Events", desc: "Corporate gatherings, dinner parties, and celebrations of every scale." },
  { title: "Everyday", desc: "Weekly subscriptions and one-time arrangements delivered to your door." },
  { title: "Installations", desc: "Statement pieces for storefronts, hotels, and editorial shoots." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-medium mb-16 md:mb-20"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-10 md:p-14 group cursor-pointer hover:bg-card transition-colors duration-500"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:italic transition-all duration-300">
                {s.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
