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
          <p className="font-display italic text-secondary-foreground/60 text-lg mb-4">Est. 2016</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
            My Story
          </h2>
          <p className="font-body text-xl md:text-2xl text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6 text-center">
            Classic. Lush. Romantic.
          </p>
          <p className="font-body text-lg md:text-xl text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6 text-justify">
            These were the first three words that sprung to my mind when I launched my floral design business.  And I suppose it’s no surprise, considering my life.
            <br />
            <br />
            I’ve been in love with flowers and plants for nearly as long as I can recall.  I remember being in my early teens, growing flowers and herbs in little pots on my windowsill.  I fell in love with floral design through a magazine, of all places, but once I realized that flowers could be an actual career...well, I knew what I was going to do.
            <br />
            <br />
            I went to college and studied floriculture.   Floral design, botany, horticulture, all of it.  And I loved every minute. I can still remember the wonderful feeling of waking up and going to the greenhouses...I felt like I was home.
            <br />
            <br />
            I got my first job working in a flower shop while I was still in college, and I was hooked.   Eventually, I became the head designer for a florist here in the Capital District and later ended up where I am now: as the owner of my own floral design business.
            <br />
            <br />
            I’ve handled all types of weddings, from big, beautiful  thirty centerpiece weddings to small, romantic elopements.   I’ve worked in nearly every local venue, including the Hall of Springs, Canfield Casino, Franklin Plaza, 60 State Place, and the Museum of Dance.
            <br />
            <br />
            I would love to help you have the wedding of your dreams at a price point that you can achieve.   Please contact me so that we can schedule a free consultation and make your vision a reality.
          </p>
          <div className = "flex justify-center">
          <p className="font-display text-4xl md:text-2xl font-medium mb-16 md:mb-8 italic">
            -Erin Ehrlich
          </p>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
