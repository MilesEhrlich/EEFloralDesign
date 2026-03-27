import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  contact?: string;
}

const ContactPage = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email" || e.target.name === "phone") {
      setErrors((prev) => ({ ...prev, contact: undefined }));
    } else {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const inputClass =
    "w-full border border-border rounded-sm px-4 py-3 font-body text-foreground bg-background placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors";

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-28 pb-24 md:pb-36 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:sticky md:top-36"
            >
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-4">
                Reach out
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight leading-[0.95] mb-8">
                Contact<br />
                <span className=" font-normal">Us</span>
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-sm">
                I'd love to hear about your event, vision, or any questions you have.
                Reach out directly or fill in the form and I'll get back to you soon.
              </p>
              <div className="space-y-4 font-body text-foreground">
                <a
                  href="mailto:Erin@eefloraldesign.com"
                  className="flex items-center gap-3 hover:text-muted-foreground transition-colors"
                >
                  <span className="text-muted-foreground text-sm uppercase tracking-widest">Email</span>
                  Erin@eefloraldesign.com
                </a>
                <a
                  href="tel:5183690554"
                  className="flex items-center gap-3 hover:text-muted-foreground transition-colors"
                >
                  <span className="text-muted-foreground text-sm uppercase tracking-widest">Phone</span>
                  (518) 369-0554
                </a>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {submitted ? (
                <div className="py-20 font-body text-xl text-foreground">
                  Thank you! I'll be in touch soon. 🌸
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        value={form.firstName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-rose-500 mt-1 font-body">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        value={form.lastName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-rose-500 mt-1 font-body">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.contact && (
                      <p className="text-xs text-rose-500 mt-1 font-body">{errors.contact}</p>
                    )}
                    {!errors.contact && (
                      <p className="text-xs text-muted-foreground mt-1 font-body">
                        * At least one of email or phone is required
                      </p>
                    )}
                  </div>

                  {/* Event date + type */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="eventDate"
                      placeholder="Event Date"
                      value={form.eventDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      className={`${inputClass} ${!form.eventType ? "text-muted-foreground" : ""}`}
                    >
                      <option value="" disabled>Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Elopement">Elopement</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Private Event">Private Event</option>
                      <option value="Everyday Arrangement">Everyday Arrangement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Tell me about your vision (optional)"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />

                  <button
                    type="submit"
                    className="w-full py-3 font-body text-sm tracking-widest uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-sm"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
