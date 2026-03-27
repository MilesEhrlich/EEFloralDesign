import { useState } from "react";
import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.webp";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.webp";
import gallery17 from "@/assets/gallery-17.webp";
import gallery18 from "@/assets/gallery-18.png";

const images = [
  { src: gallery1, alt: "Bridal bouquet with garden roses", w: 800, h: 1000 },
  { src: gallery2, alt: "Wedding table centerpiece", w: 800, h: 800 },
  { src: gallery3, alt: "Minimalist vase arrangement", w: 800, h: 1000 },
  { src: gallery4, alt: "Hanging floral installation", w: 800, h: 800 },
  { src: gallery5, alt: "Wild gathered seasonal bouquet", w: 800, h: 1000 },
  { src: gallery6, alt: "Ceremony floral archway", w: 800, h: 800 },
  { src: gallery7, alt: "Elegant floral design", w: 800, h: 1000 },
  { src: gallery8, alt: "Beautiful bouquet", w: 800, h: 800 },
  { src: gallery9, alt: "Event floral styling", w: 800, h: 1000 },
  { src: gallery10, alt: "Everyday floral arrangement", w: 800, h: 800 },
  { src: gallery11, alt: "Special installation", w: 800, h: 1000 },
  { src: gallery13, alt: "Seasonal flowers", w: 800, h: 800 },
  { src: gallery14, alt: "Ceremony setup", w: 800, h: 1000 },
  { src: gallery15, alt: "Creative floral art", w: 800, h: 800 },
  { src: gallery16, alt: "Garden roses", w: 800, h: 1000 },
  { src: gallery17, alt: "Spring bouquet", w: 800, h: 800 },
  { src: gallery18, alt: "Custom floral piece", w: 800, h: 1000 },
];

const INITIAL_COUNT = 6;

// Distribute images across N columns — stable order so existing images never move
function buildColumns(imgs: typeof images, numCols: number) {
  const cols: { img: typeof images[0]; index: number }[][] = Array.from({ length: numCols }, () => []);
  imgs.forEach((img, i) => cols[i % numCols].push({ img, index: i }));
  return cols;
}

const GalleryImage = ({
  img,
  index,
  isNew,
}: {
  img: typeof images[0];
  index: number;
  isNew: boolean;
}) => (
  <motion.div
    key={index}
    initial={isNew ? { opacity: 0, y: 32 } : { opacity: 1, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: isNew ? (index % 3) * 0.1 : 0,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    className="relative overflow-hidden rounded-sm mb-4 md:mb-6"
  >
    <img
      src={img.src}
      alt={img.alt}
      loading="lazy"
      width={img.w}
      height={img.h}
      className="w-full h-auto object-cover"
    />
  </motion.div>
);

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);

  const cols3 = buildColumns(visible, 3);
  const cols2 = buildColumns(visible, 2);

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
            {/*A collection of arrangements crafted with seasonal blooms and intentional design.*/}
          </p>
        </motion.div>

        {/* 3-column masonry (lg+) */}
        <div className="hidden lg:flex gap-6">
          {cols3.map((col, ci) => (
            <div key={ci} className="flex-1 flex flex-col">
              {col.map(({ img, index }) => (
                <GalleryImage key={index} img={img} index={index} isNew={index >= INITIAL_COUNT} />
              ))}
            </div>
          ))}
        </div>

        {/* 2-column masonry (sm–md) */}
        <div className="hidden sm:flex lg:hidden gap-4">
          {cols2.map((col, ci) => (
            <div key={ci} className="flex-1 flex flex-col">
              {col.map(({ img, index }) => (
                <GalleryImage key={index} img={img} index={index} isNew={index >= INITIAL_COUNT} />
              ))}
            </div>
          ))}
        </div>

        {/* 1-column (mobile) */}
        <div className="flex sm:hidden flex-col gap-4">
          {visible.map((img, index) => (
            <GalleryImage key={index} img={img} index={index} isNew={index >= INITIAL_COUNT} />
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
