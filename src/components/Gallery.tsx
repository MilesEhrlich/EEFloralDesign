import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpeg";
import gallery17 from "@/assets/gallery-17.jpeg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpeg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";
import gallery25 from "@/assets/gallery-25.jpg";
import gallery26 from "@/assets/gallery-26.jpg";
import gallery27 from "@/assets/gallery-27.jpg";
import gallery28 from "@/assets/gallery-28.jpg";
import gallery29 from "@/assets/gallery-29.jpg";
import gallery30 from "@/assets/gallery-30.jpg";
import gallery31 from "@/assets/gallery-31.jpg";
import gallery32 from "@/assets/gallery-32.jpg";
import gallery33 from "@/assets/gallery-33.jpg";
import gallery34 from "@/assets/gallery-34.jpg";
import gallery35 from "@/assets/gallery-35.jpg";
import gallery36 from "@/assets/gallery-36.jpg";
import gallery37 from "@/assets/gallery-37.jpg";
import gallery38 from "@/assets/gallery-38.jpg";
import gallery39 from "@/assets/gallery-39.jpeg";
import gallery40 from "@/assets/gallery-40.jpg";
import gallery41 from "@/assets/gallery-41.jpg";
import gallery42 from "@/assets/gallery-42.jpg";
import gallery43 from "@/assets/gallery-43.jpg";
import gallery44 from "@/assets/gallery-44.jpg";
import gallery45 from "@/assets/gallery-45.jpeg";
import gallery46 from "@/assets/gallery-46.jpg";
import gallery47 from "@/assets/gallery-47.jpg";
import gallery48 from "@/assets/gallery-48.jpg";
import gallery49 from "@/assets/gallery-49.jpg";
import gallery50 from "@/assets/gallery-50.jpg";
import gallery51 from "@/assets/gallery-51.jpeg";
import gallery52 from "@/assets/gallery-52.jpg";
import gallery53 from "@/assets/gallery-53.jpg";
import gallery54 from "@/assets/gallery-54.jpg";
import gallery55 from "@/assets/gallery-55.jpeg";
import gallery56 from "@/assets/gallery-56.jpg";
import gallery57 from "@/assets/gallery-57.jpeg";
import gallery58 from "@/assets/gallery-58.jpeg";

const images = [
  { src: gallery1, alt: "Bridal bouquet with garden roses", w: 800, h: 1000, credit: "Chelsea Ahl Photography" },
  { src: gallery2, alt: "Wedding table centerpiece", w: 800, h: 800 },
  { src: gallery3, alt: "Minimalist vase arrangement", w: 800, h: 1000 },
  { src: gallery4, alt: "Hanging floral installation", w: 800, h: 800 },
  { src: gallery5, alt: "Wild gathered seasonal bouquet", w: 800, h: 1000 },
  { src: gallery6, alt: "Ceremony floral archway", w: 800, h: 800 },
  { src: gallery7, alt: "Elegant floral design", w: 800, h: 1000 },
  { src: gallery8, alt: "Beautiful bouquet", w: 800, h: 800 },
  { src: gallery9, alt: "Event floral styling", w: 800, h: 1000 },
  { src: gallery10, alt: "Everyday floral arrangement", w: 800, h: 800, credit: "Chelsea Ahl Photography" },
  { src: gallery11, alt: "Special installation", w: 800, h: 1000, credit: "Olivia Nadel Photography" },
  { src: gallery13, alt: "Seasonal flowers", w: 800, h: 800 },
  { src: gallery14, alt: "Ceremony setup", w: 800, h: 1000 },
  { src: gallery15, alt: "Creative floral art", w: 800, h: 800, credit: "Nicole Nero Studio" },
  { src: gallery16, alt: "Garden roses", w: 800, h: 1000 },
  { src: gallery17, alt: "Spring bouquet", w: 800, h: 800 },
  { src: gallery18, alt: "Custom floral piece", w: 800, h: 1000, credit: "YTK Photography" },
  { src: gallery19, alt: "Romantic floral arrangement", w: 800, h: 800, credit: "Chelsea Ahl Photography" },
  { src: gallery20, alt: "Elegant centerpiece", w: 800, h: 1000 },
  { src: gallery21, alt: "Lush bouquet design", w: 800, h: 800 },
  { src: gallery22, alt: "Reception table flowers", w: 800, h: 1000 },
  { src: gallery23, alt: "Seasonal floral design", w: 800, h: 800 },
  { src: gallery24, alt: "Petite arrangement", w: 800, h: 1000 },
  { src: gallery25, alt: "Statement floral piece", w: 800, h: 800 },
  { src: gallery26, alt: "Natural garden style bouquet", w: 800, h: 1000 },
  { src: gallery27, alt: "Whimsical floral styling", w: 800, h: 800 },
  { src: gallery28, alt: "Soft pastel arrangement", w: 800, h: 1000 },
  { src: gallery29, alt: "Textured floral composition", w: 800, h: 800 },
  { src: gallery30, alt: "Bold floral display", w: 800, h: 1000 },
  { src: gallery31, alt: "Intimate gathering flowers", w: 800, h: 800 },
  { src: gallery32, alt: "Bridal party bouquets", w: 800, h: 1000 },
  { src: gallery33, alt: "Ceremony accent piece", w: 800, h: 800 },
  { src: gallery34, alt: "Delicate floral details", w: 800, h: 1000 },
  { src: gallery35, alt: "Cascading arrangement", w: 800, h: 800 },
  { src: gallery36, alt: "Modern floral design", w: 800, h: 1000 },
  { src: gallery37, alt: "Classic roses arrangement", w: 800, h: 800 },
  { src: gallery38, alt: "Organic floral styling", w: 800, h: 1000 },
  { src: gallery39, alt: "Harvest season bouquet", w: 800, h: 800, credit: "Chelsea Ahl Photography" },
  { src: gallery40, alt: "Aisle floral decoration", w: 800, h: 1000 },
  { src: gallery41, alt: "Mixed bloom arrangement", w: 800, h: 800 },
  { src: gallery42, alt: "Greenery-forward design", w: 800, h: 1000 },
  { src: gallery43, alt: "Sculptural floral art", w: 800, h: 800 },
  { src: gallery44, alt: "Cottage style bouquet", w: 800, h: 1000 },
  { src: gallery45, alt: "Tableside floral accent", w: 800, h: 800, credit: "Chelsea Ahl Photography" },
  { src: gallery46, alt: "Warm toned arrangement", w: 800, h: 1000 },
  { src: gallery47, alt: "Fresh floral installation", w: 800, h: 800 },
  { src: gallery48, alt: "Ethereal bloom display", w: 800, h: 1000 },
  { src: gallery49, alt: "Curated floral boquet", w: 800, h: 800, credit: "Joe Vogel Photography" },
  { src: gallery50, alt: "Floral arrangement", w: 800, h: 1000, credit: "Joe Vogel Photography" },
  { src: gallery51, alt: "Floral arrangement", w: 800, h: 800, credit: "Chelsea Ahl Photography" },
  { src: gallery52, alt: "Floral arrangement", w: 800, h: 1000 },
  { src: gallery53, alt: "Floral arrangement", w: 800, h: 800 },
  { src: gallery54, alt: "Floral arrangement", w: 800, h: 1000 },
  { src: gallery55, alt: "Floral arrangement", w: 800, h: 800 },
  { src: gallery56, alt: "Floral arrangement", w: 800, h: 1000 },
  { src: gallery57, alt: "Floral arrangement", w: 800, h: 800 },
  { src: gallery58, alt: "Floral arrangement", w: 800, h: 1000 },
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
}: {
  img: typeof images[0];
  index: number;
}) => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(() => setLoaded(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative overflow-hidden rounded-sm mb-4 md:mb-6 bg-muted"
      style={{ aspectRatio: `${img.w} / ${img.h}` }}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        width={img.w}
        height={img.h}
        onLoad={onLoad}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      {img.credit && (
        <span
          className="absolute bottom-2 right-2 font-body text-[10px] text-white/80 tracking-wide pointer-events-none"
          style={{ WebkitTextStroke: "0.3px rgba(0,0,0,0.4)" }}
        >
          {img.credit}
        </span>
      )}
    </motion.div>
  );
};

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
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">Foral Archive</h2>
          <p className="text-muted-foreground font-body text-lg max-w-lg">
            {/*A collection of arrangements crafted with seasonal blooms and intentional design.*/}
          </p>
        </motion.div>

        {/* 3-column masonry (lg+) */}
        <div className="hidden lg:flex gap-6">
          {cols3.map((col, ci) => (
            <div key={ci} className="flex-1 flex flex-col">
              {col.map(({ img, index }) => (
                <GalleryImage key={index} img={img} index={index} />
              ))}
            </div>
          ))}
        </div>

        {/* 2-column masonry (sm–md) */}
        <div className="hidden sm:flex lg:hidden gap-4">
          {cols2.map((col, ci) => (
            <div key={ci} className="flex-1 flex flex-col">
              {col.map(({ img, index }) => (
                <GalleryImage key={index} img={img} index={index} />
              ))}
            </div>
          ))}
        </div>

        {/* 1-column (mobile) */}
        <div className="flex sm:hidden flex-col gap-4">
          {visible.map((img, index) => (
            <GalleryImage key={index} img={img} index={index} />
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
