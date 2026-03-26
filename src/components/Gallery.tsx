import { useState } from "react";
import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Bridal bouquet with garden roses", w: 800, h: 1000, label: "Bridal" },
  { src: gallery2, alt: "Wedding table centerpiece", w: 800, h: 800, label: "Events" },
  { src: gallery3, alt: "Minimalist vase arrangement", w: 800, h: 1000, label: "Everyday" },
  { src: gallery4, alt: "Hanging floral installation", w: 800, h: 800, label: "Installations" },
  { src: gallery5, alt: "Wild gathered seasonal bouquet", w: 800, h: 1000, label: "Seasonal" },
  { src: gallery6, alt: "Ceremony floral archway", w: 800, h: 800, label: "Ceremony" },
];

const INITIAL_COUNT = 4;

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);

  return (
    <section id="portfolio" className="py-24 md:py-36 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">Our Work</h2>
          <p className="text-muted-foreground font-body text-lg max-w-lg">
            A collection of arrangements crafted with seasonal blooms and intentional design.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {visible.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={img.w}
                height={img.h}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-end p-6">
                <span className="font-display text-lg text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && images.length > INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1"
            >
              View More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
