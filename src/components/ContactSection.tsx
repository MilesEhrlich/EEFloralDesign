import { useState } from "react";
import contactImg from "@/assets/Contact.webp";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  contact?: string;
}

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim() && !form.phone.trim())
      newErrors.contact = "Please provide at least an email or phone number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email" || e.target.name === "phone") {
      setErrors((prev) => ({ ...prev, contact: undefined }));
    } else {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return (
    <section
      className="relative py-12 md:py-16 px-6 md:px-12 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${contactImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <p className="font-body text-xs tracking-widest uppercase text-white/60 mb-3">
          Let's work together
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight leading-[0.95] mb-4">
          Request a <span className="italic font-normal">Consultation</span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center  gap-3 sm:gap-2 font-body text-sm text-white/75 mb-6">
          <a href="tel:5183690554" className="hover:text-white transition-colors">
            (518) 369-0554
          </a>
          <span className="hidden sm:block text-white/30">|</span>
          <a href="mailto:Erin@eefloraldesign.com" className="hover:text-white transition-colors">
            Erin@eefloraldesign.com
          </a>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="w-full bg-white/15 backdrop-blur-md rounded-sm border border-white/20 p-10 text-white font-body text-xl">
            Thank you! I'll be in touch soon. 🌸
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
          className="w-full bg-white/15 backdrop-blur-md rounded-sm border border-white/20 p-6 text-left"
          >
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/25 rounded-sm px-4 py-3 font-body text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors"
                />
                {errors.firstName && (
                  <p className="font-body text-xs text-rose-300 mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/25 rounded-sm px-4 py-3 font-body text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors"
                />
                {errors.lastName && (
                  <p className="font-body text-xs text-rose-300 mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/25 rounded-sm px-4 py-2.5 font-body text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/25 rounded-sm px-4 py-2.5 font-body text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>
            {errors.contact && (
              <p className="font-body text-xs text-rose-300 mb-3">{errors.contact}</p>
            )}

            <button
              type="submit"
              className="w-full mt-4 py-2.5 font-body text-sm tracking-widest uppercase bg-white text-foreground hover:bg-white/90 transition-colors rounded-sm"
            >
              Send Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
