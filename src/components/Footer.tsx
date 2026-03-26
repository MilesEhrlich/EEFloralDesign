const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-20 md:py-28 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
              Let's Create<br />
              <span className="italic font-normal">Something Beautiful</span>
            </h2>
            <p className="font-body text-primary-foreground/70 max-w-sm leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about your event, 
              project, or simply your love for flowers.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-4 font-body text-primary-foreground/80">
              <p>hello@erinehrlichfloral.com</p>
              <p>(555) 234-5678</p>
              <p>142 Garden Lane, Suite 3<br />Portland, OR 97201</p>
            </div>
            <div className="flex gap-8 mt-10 font-body text-sm tracking-widest uppercase text-primary-foreground/50">
              <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-primary-foreground/15 font-body text-sm text-primary-foreground/40">
          © 2025 Erin Ehrlich Floral Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
