import { FileText, TrendingUp, Award, Clock } from "lucide-react";

export default function CandidatesPage() {
  const candidateBenefits = [
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Resume Building",
      description:
        "Get expert help crafting a resume that stands out to employers.",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Career Growth",
      description:
        "Access opportunities that match your skills and career aspirations.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Skill Development",
      description:
        "Resources and training to enhance your professional skills.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Quick Placement",
      description:
        "Fast-track your job search with our extensive employer network.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Career Partner
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Find your dream job with personalized support and access to top
              employers.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Upload Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Help Candidates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {candidateBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-green-600">{benefit.icon}</div>
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
