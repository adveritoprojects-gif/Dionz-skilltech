import { Briefcase, Users, Target, Shield } from "lucide-react";

export default function EmployersPage() {
  const employerBenefits = [
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Talent Pool Access",
      description:
        "Access our curated database of pre-vetted professionals across industries.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Dedicated Account Manager",
      description:
        "Personalized support from recruitment experts who understand your business.",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Precision Hiring",
      description:
        "Advanced matching algorithms to find candidates that fit your culture.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Risk-Free Hiring",
      description:
        "Guaranteed replacement policy if your hire doesn't work out.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Employers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Find the right talent to drive your business forward with our
              comprehensive staffing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Employers Choose DIONZ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employerBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
