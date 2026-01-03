  // app/components/RecruitJobs.tsx
  "use client";

  import { motion } from "framer-motion";
  import {
    Hammer,
    ChefHat,
    Users,
    Briefcase,
    DollarSign,
    Calendar,
    Globe,
    Phone,
  } from "lucide-react";

  const jobOpenings = [
    {
      id: "construction",
      title: "CONSTRUCTION VISA FOR ISRAEL",
      category: "Construction",
      icon: <Hammer className="w-8 h-8" />,
      gradient: "from-blue-600 to-blue-800",
      requirements: [
        "CARPENTERS/WOOD WORKING WORKERS",
        "PLASTERS",
        "IRON BENDER'S",
      ],
      details: {
        salary: "1.5L + OVERTIME",
        ageLimit: "25 to 44 years",
        visaValidity: "63 MONTHS",
        accommodation: "ACCOMMODATION AND TRANSPORTATION AS PER LABOR LAW",
        contact: "0474 2782 6529",
      },
      highlight: true,
    },
    {
      id: "butchers",
      title: "Butchers & Butcher Helper",
      category: "Hospitality",
      icon: <ChefHat className="w-8 h-8" />,
      gradient: "from-orange-600 to-orange-800",
      requirements: [
        "Without experience also can Apply",
        "Able to Speak English",
      ],
      details: {
        salary: "1.6L + Overtime",
        ageLimit: "23 to 40 years",
        interview: "November 16, 17 & 18",
        contact: "0474 2782 6529",
        documents: "CV, Passport & Working video required",
      },
      highlight: true,
    },
    {
      id: "general",
      title: "General Skilled Workers",
      category: "Various",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-600 to-green-800",
      requirements: ["Electricians", "Plumbers", "Welders", "Painters"],
      details: {
        salary: "1.4L - 1.8L + Benefits",
        ageLimit: "24 to 45 years",
        visaValidity: "60 MONTHS",
        contact: "0474 2782 6529",
      },
      highlight: false,
    },
  ];

  interface RecruitJobsProps {
    onSelectJob: (jobId: string) => void;
  }

  export default function RecruitJobs({ onSelectJob }: RecruitJobsProps) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current <span className="text-blue-600">Job Openings</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Premium international opportunities with competitive packages and
              comprehensive benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => onSelectJob(job.id)}
                className="cursor-pointer"
              >
                <div
                  className={`relative bg-gradient-to-br ${
                    job.gradient
                  } rounded-3xl overflow-hidden border-4 ${
                    job.highlight ? "border-yellow-400" : "border-transparent"
                  } transition-all duration-300 hover:shadow-2xl`}
                >
                  {job.highlight && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full animate-pulse">
                        URGENT HIRING
                      </div>
                    </div>
                  )}

                  <div className="p-8 text-white">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          {job.icon}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-white/80">
                            {job.category}
                          </span>
                          <h3 className="text-xl font-bold mt-1">{job.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        WE REQUIRE:
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3" />
                            <span className="text-white/90">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Job Details */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-yellow-300" />
                          <span className="font-semibold">Salary:</span>
                        </div>
                        <span className="font-bold">{job.details.salary}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5 text-yellow-300" />
                          <span className="font-semibold">Age Limit:</span>
                        </div>
                        <span>{job.details.ageLimit}</span>
                      </div>

                      {job.details.visaValidity && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Globe className="w-5 h-5 text-yellow-300" />
                            <span className="font-semibold">Visa:</span>
                          </div>
                          <span>{job.details.visaValidity}</span>
                        </div>
                      )}

                      {job.details.interview && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5 text-yellow-300" />
                            <span className="font-semibold">Interview:</span>
                          </div>
                          <span>{job.details.interview}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-5 h-5 text-yellow-300" />
                          <span className="font-semibold">Contact:</span>
                        </div>
                        <span className="text-sm">{job.details.contact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="px-8 pb-8">
                    <button className="w-full py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Briefcase className="w-5 h-5" />
                      <span>Apply for this Position</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Walk-in Interview Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-6 text-center">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-left mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    🚀 WALK-IN INTERVIEWS OPEN
                  </h3>
                  <p className="text-gray-800 font-semibold">
                    November 16, 17 & 18 | DIONZ Skilltech Agency, Kollam
                  </p>
                </div>
                <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all">
                  Book Your Slot
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
