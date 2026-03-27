import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Erin transformed our wedding into something out of a dream. Every arrangement was breathtaking.",
    name: "Sarah & James",
    event: "Wedding",
  },
  {
    quote: "The floral installations for our brand launch were absolutely stunning. Guests couldn't stop talking about them.",
    name: "Olivia M.",
    event: "Corporate Event",
  },
  {
    quote: "Erin has an incredible eye for detail. She understood our vision perfectly and exceeded every expectation.",
    name: "Rachel & David",
    event: "Wedding",
  },
  {
    quote: "Working with Erin was effortless. She brought warmth and elegance to our intimate dinner party.",
    name: "Catherine L.",
    event: "Private Event",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-medium mb-16 md:mb-20"
        >
          Kind Words
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-10 md:p-14"
            >
              <p className="font-body text-lg md:text-xl leading-relaxed text-foreground mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <span className="font-display text-base">{t.name}</span>
                <span className="font-body text-sm text-muted-foreground ml-3">— {t.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
