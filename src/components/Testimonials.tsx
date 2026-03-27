import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Thank you so much for making my wedding so beautiful.  The arrangements and bouquets turned out even better than I could have imagined, and truly brought everything together that day.  You went above and beyond with helping Shane and I feel at ease with transportation and all of the logistics, which helped make our day as stress-free as it could be!  We are so grateful for your help, responsiveness, and of course beautiful flowers!  Thank you again!",
    name: "Laura and Shane",
  },
  {
    quote: "The flowers that Erin did for our wedding were amazing! She made the whole experience of picking flowers very simple and stress-free.  With very little effort I gave her the details of what I wanted and she came through with exactly what I wanted and more! The colors perfectly matched our wedding.  Our guests and everyone who sees our pictures always comment on how beautiful they were.  Thanks Erin for making our day extra special!",
    name: "Alison",
  },
  {
    quote: "Erin captured the timeless and elegant feeling that I was hoping for and tied everything together with her gorgeous design.  Bouquets, boutonnieres, pew arrangements, breathtaking heightened centerpieces, an arrangement for our seating cards, flowers for our cake and even a wreath for our antique getaway car...Erin thought of every single detail and created the most beautiful atmosphere that set the tone for our wedding.  And now, even years later, people are still talking about our flowers!",
    name: "Kelly",
  },
  {
    quote: "I just wanted you to know that the flowers were amazing!! Thank you so much. Everyone asked \"who\" supplied the centerpieces.",
    name: "Marcy",
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
          className="font-display text-4xl md:text-5xl font-medium mb-16 md:mb-5"
        >
          Kind Words
        </motion.h2>
        <div className="flex justify-center">
          <p className="font-body text-lg md:text-xl leading-relaxed text-foreground ">
            It's very important to me that my wedding couples love what I give to them.  It means so much to me to read their kind words.  I'd love to hear what you thought of the flowers on your special day, so drop me a note!
          </p>
        </div>
        <div className = "flex justify-end">
          <p className="font-display text-4xl md:text-2xl font-medium mb-16 md:mb-8 italic">
            -Erin Ehrlich
          </p>
        </div>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
