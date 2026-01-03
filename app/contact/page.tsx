"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "0474 2782 6529",
      subtitle: "Mon–Fri, 8:00 AM – 6:00 PM",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "dionzinfo@gmail.com",
      subtitle: "We reply within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Address",
      details: "Door No 109, Chakirikadayil Tower, Pallimukku",
      subtitle: "Kollam, Kerala, India",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "Monday – Friday",
      subtitle: "8:00 AM – 6:00 PM IST",
    },
  ];

  return (
    <div className="pt-24 bg-white">
      {/* ================= HERO ================= */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Have questions or need assistance? Our team is here to help you.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* -------- CONTACT INFO -------- */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {info.title}
                    </h3>
                    <p className="text-gray-700">{info.details}</p>
                    <p className="text-sm text-gray-500">{info.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* -------- MAP -------- */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Our Location</h3>

              <div className="rounded-xl overflow-hidden shadow-md border">
                <iframe
                  title="Dionz Skilltech Location"
                  src="https://www.google.com/maps?q=8.8758125,76.6255951&z=17&output=embed"
                  className="w-full h-64 md:h-72 lg:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://www.google.com/maps/place/8%C2%B052'32.9%22N+76%C2%B037'32.1%22E"
                target="_blank"
                className="inline-flex items-center justify-center mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* -------- CONTACT FORM -------- */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="flex items-center mb-8">
              <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 90000 00000"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="employer">Employer Services</option>
                    <option value="candidate">Candidate Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
