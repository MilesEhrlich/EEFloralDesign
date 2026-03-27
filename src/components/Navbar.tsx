import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Kind Words", href: "/testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 ${
        scrolled ? "py-4 bg-background/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center leading-none">
          <span className="font-display text-2xl md:text-3xl tracking-[0.01em] font-bold tracking-tighter">EE</span>
          <span className="font-body text-[10px] tracking-[0.00em] uppercase text-muted-foreground mt-0.5">Floral Design</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) =>
            l.href.startsWith("#") ? (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className={`font-body text-sm tracking-widest uppercase transition-colors ${
                  location.pathname === l.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-body text-sm tracking-widest uppercase"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto py-8 flex flex-col gap-6">
              {links.map((l) =>
                l.href.startsWith("#") ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
