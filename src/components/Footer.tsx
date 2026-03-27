const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 font-body text-primary-foreground/80">
            <a href="mailto:Erin@eefloraldesign.com" className="hover:text-primary-foreground transition-colors">
              Erin@eefloraldesign.com
            </a>
            <a href="tel:5183690554" className="hover:text-primary-foreground transition-colors">
              (518) 369-0554
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-8 font-body text-sm tracking-widest uppercase text-primary-foreground/50">
            <a href="https://www.instagram.com/eefloraldesign/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/p/Erin-Ehrlich-Floral-Design-LLC-100063519762241/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/15 pt-6 font-body text-sm text-primary-foreground/40">
          © 2025 Erin Ehrlich Floral Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

