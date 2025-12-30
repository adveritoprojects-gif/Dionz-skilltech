"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {
  ChevronRight,
  MessageCircle,
  CheckCircle,
  Users,
  Briefcase,
  Target,
  Shield,
  Sparkles,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";

export default function DionzHomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = {
    hero: useRef(null),
    whyChooseUs: useRef(null),
    services: useRef(null),
    cta: useRef(null),
  };

  const heroControls = useAnimation();
  const whyChooseUsControls = useAnimation();
  const servicesControls = useAnimation();

  const heroInView = useInView(sectionRefs.hero, { once: true });
  const whyChooseUsInView = useInView(sectionRefs.whyChooseUs, { once: true });
  const servicesInView = useInView(sectionRefs.services, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (whyChooseUsInView) whyChooseUsControls.start("visible");
    if (servicesInView) servicesControls.start("visible");
  }, [
    heroInView,
    whyChooseUsInView,
    servicesInView,
    heroControls,
    whyChooseUsControls,
    servicesControls,
  ]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Trust & Transparency",
      description:
        "We operate with complete transparency in our processes and maintain the highest level of trust with both clients and candidates.",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Precision Matching",
      description:
        "Our meticulous approach ensures the perfect alignment between talent and opportunities for long-term success.",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Sustainable Growth",
      description:
        "We focus on building careers and businesses that thrive, not just filling immediate vacancies.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Personalized Support",
      description:
        "Every client and candidate receives individualized attention and tailored solutions.",
    },
  ];

  const services = [
    {
      title: "Executive Search",
      description: "Finding top-tier leadership talent for strategic roles",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Permanent Staffing",
      description: "Long-term placement solutions for businesses of all sizes",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Contract Staffing",
      description: "Flexible workforce solutions for project-based needs",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Talent Consulting",
      description: "Strategic HR advisory and workforce planning services",
      icon: <Star className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={heroControls}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  Connecting Talent Since 2010
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                <span className="bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  CONNECTING TALENT,
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-transparent">
                  CREATING FUTURES
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-10 max-w-2xl"
              >
                At DIONZ Manpower Agency, we believe in connecting the right
                talent with the right opportunities, empowering individuals to
                build successful careers while helping businesses achieve
                sustainable growth.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Explore Opportunities <ArrowRight className="ml-3 h-5 w-5" />
                </button>
                <button className="bg-white text-blue-700 border-2 border-blue-200 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex items-center justify-center">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp Chat
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center space-x-8"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-12 w-12 rounded-full border-4 border-white bg-gradient-to-r from-blue-400 to-indigo-500"
                    ></div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    2,500+ Successful Placements
                  </p>
                  <p className="text-gray-500 text-sm">
                    Trusted by 300+ companies
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-block p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl mb-6">
                      <Briefcase className="h-16 w-16 text-blue-700 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Find Your Perfect Match
                    </h3>
                    <p className="text-gray-600">
                      Premium talent recruitment for exceptional businesses
                    </p>
                  </div>
                </div>

                {/* Animated floating elements */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full animate-bounce"></div>
                <div className="absolute bottom-16 right-10 w-16 h-16 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full animate-bounce delay-300"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={sectionRefs.whyChooseUs}
        className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30"
      >
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={whyChooseUsControls}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-5 py-2 rounded-full mb-4"
            >
              <Star className="h-4 w-4 mr-2" />
              <span className="font-medium">Why Choose Us</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Excellence in{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                Every Connection
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              At DIONZ Manpower Agency, we stand apart because of our commitment
              to trust, quality, and transparency. We carefully understand the
              needs of employers and job seekers to provide the perfect match.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-blue-700">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold mb-4">
                  Building Long-Term Success
                </h3>
                <p className="text-blue-100 text-lg">
                  With affordable services, timely staffing solutions, and
                  personalized support, we make the recruitment process smooth
                  and reliable. Our focus is not just on filling vacancies but
                  on building long-term success for both clients and candidates.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
                  Start Your Journey <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={sectionRefs.services} className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={servicesControls}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                Premium Services
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Tailored staffing solutions designed to meet the unique needs of
              your business
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-14 h-14 rounded-xl flex items-center justify-center">
                    <div className="text-white">{service.icon}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium flex items-center"
                >
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Connect with DIONZ today and discover how our premium staffing
              solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Employer Solutions <Briefcase className="ml-3 h-5 w-5" />
              </button>
              <button className="bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Job Seeker Portal <Users className="ml-3 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
