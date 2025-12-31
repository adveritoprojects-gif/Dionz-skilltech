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
  Globe,
  Home,
  Building,
  Heart,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import Image from "next/image";

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
      image: "/images/trust.jpg",
      color: "bg-blue-50",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Precision Matching",
      description:
        "Our meticulous approach ensures the perfect alignment between talent and opportunities for long-term success.",
      image: "/images/matching.jpg",
      color: "bg-indigo-50",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Sustainable Growth",
      description:
        "We focus on building careers and businesses that thrive, not just filling immediate vacancies.",
      image: "/images/growth.jpg",
      color: "bg-green-50",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Personalized Support",
      description:
        "Every client and candidate receives individualized attention and tailored solutions.",
      image: "/images/support.jpg",
      color: "bg-purple-50",
    },
  ];

  const services = [
    {
      title: "International Recruitment",
      description: "Global placements for skilled professionals worldwide",
      icon: <Globe className="h-8 w-8" />,
      image: "/images/international.jpg",
      color: "bg-blue-100",
    },
    {
      title: "Domestic Staffing",
      description: "Reliable manpower solutions for Indian businesses",
      icon: <Home className="h-8 w-8" />,
      image: "/images/domestic.jpg",
      color: "bg-indigo-100",
    },
    {
      title: "Corporate Solutions",
      description: "Complete workforce management for enterprises",
      icon: <Building className="h-8 w-8" />,
      image: "/images/corporate.jpg",
      color: "bg-green-100",
    },
    {
      title: "Training & Development",
      description: "Skill enhancement and career guidance programs",
      icon: <Heart className="h-8 w-8" />,
      image: "/images/training.jpg",
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* Hero Section with Background Image */}
      <section
        ref={sectionRefs.hero}
        className="relative pt-32 pb-20 px-6 min-h-screen flex items-center"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="DIONZ Manpower Agency"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={heroControls}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center bg-white/90 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  Trusted Manpower Agency Since 2018
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
              >
                Your Trusted Partner in{" "}
                <span className="text-blue-300">Global Recruitment</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-200 mb-10 max-w-2xl bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                At DIONZ Manpower Agency, we specialize in connecting skilled
                professionals with global opportunities. From construction
                workers to corporate executives, we bridge talent with
                opportunity across international borders.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/recruit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  Apply for Jobs
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <a
                  href="https://wa.me/919633150030"
                  target="_blank"
                  className="bg-white/90 hover:bg-white text-blue-700 border-2 border-white/30 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp Chat
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                  <div className="text-2xl font-bold text-white mb-1">
                    2,500+
                  </div>
                  <div className="text-sm text-gray-200">
                    Successful Placements
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                  <div className="text-2xl font-bold text-white mb-1">300+</div>
                  <div className="text-sm text-gray-200">Companies Served</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm text-gray-200">Countries</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                  <div className="text-2xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-200">Satisfaction Rate</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/30 p-8">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-blue-100 rounded-2xl mb-4">
                    <Briefcase className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Quick Application
                  </h3>
                  <p className="text-gray-600">Start your journey in minutes</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="/recruit"
                    className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-gray-800">
                        International Jobs
                      </div>
                      <div className="text-sm text-gray-600">
                        Israel, UAE, Qatar
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:translate-x-2 transition-transform" />
                  </a>

                  <a
                    href="/services"
                    className="flex items-center p-4 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                      <Building className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-gray-800">
                        Corporate Staffing
                      </div>
                      <div className="text-sm text-gray-600">
                        Permanent & Contract
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:translate-x-2 transition-transform" />
                  </a>

                  <a
                    href="https://wa.me/919633150030"
                    target="_blank"
                    className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-gray-800">
                        Instant Support
                      </div>
                      <div className="text-sm text-gray-600">WhatsApp Chat</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91 96331 50030</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-2">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>dionzinfo@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={sectionRefs.whyChooseUs} className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={whyChooseUsControls}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center bg-blue-50 text-blue-700 px-5 py-2 rounded-full mb-4"
            >
              <Star className="h-4 w-4 mr-2" />
              <span className="font-medium">Why Choose DIONZ</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Excellence in{" "}
              <span className="text-blue-600">Every Connection</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We stand apart because of our commitment to trust, quality, and
              transparency. We carefully understand the needs of employers and
              job seekers to provide the perfect match.
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
                className={`${feature.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Success Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-blue-600 rounded-3xl p-10 text-white shadow-2xl"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold mb-4">
                  Building Long-Term Success Stories
                </h3>
                <p className="text-blue-100 text-lg">
                  With affordable services, timely staffing solutions, and
                  personalized support, we make the recruitment process smooth
                  and reliable. Our focus is not just on filling vacancies but
                  on building long-term success for both clients and candidates.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold">500+ Families</div>
                      <div className="text-sm text-blue-200">
                        Supported since 2018
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold">15+ Countries</div>
                      <div className="text-sm text-blue-200">
                        Global placements
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <a
                  href="/about"
                  className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center group"
                >
                  Our Story
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={sectionRefs.services} className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={servicesControls}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Our <span className="text-blue-600">Comprehensive Services</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Tailored manpower solutions designed to meet diverse industry
              needs
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
                className={`${service.color} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100`}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/services"
                  className="text-blue-600 font-medium flex items-center group/link"
                >
                  Learn more
                  <ChevronRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Service Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="relative h-48 rounded-xl overflow-hidden bg-blue-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="h-16 w-16 text-blue-600" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <div className="text-white font-semibold">
                  International Recruitment
                </div>
              </div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden bg-indigo-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Building className="h-16 w-16 text-indigo-600" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <div className="text-white font-semibold">
                  Corporate Staffing
                </div>
              </div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden bg-green-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Home className="h-16 w-16 text-green-600" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <div className="text-white font-semibold">
                  Domestic Solutions
                </div>
              </div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden bg-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="h-16 w-16 text-purple-600" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <div className="text-white font-semibold">
                  Training Programs
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Whether you're seeking international opportunities or looking for
              reliable manpower solutions, DIONZ is your trusted partner for
              success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/recruit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                Apply for Jobs
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="/services"
                className="bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-300 px-10 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                Employer Solutions
                <Briefcase className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-gray-800 font-semibold">WhatsApp</div>
                <div className="text-blue-600">+91 96331 50030</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-gray-800 font-semibold">Location</div>
                <div className="text-blue-600">Kollam, Kerala</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-gray-800 font-semibold">Email</div>
                <div className="text-blue-600">dionzinfo@gmail.com</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
