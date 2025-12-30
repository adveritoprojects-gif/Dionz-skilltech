import { Target, Eye, Handshake, Users as UsersIcon } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-10 w-10" />,
      title: "Our Mission",
      description:
        "To bridge the gap between exceptional talent and forward-thinking organizations for mutual growth.",
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Our Vision",
      description:
        "To be the most trusted partner in transforming careers and building sustainable businesses.",
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Our Values",
      description:
        "Integrity, excellence, innovation, and partnership guide everything we do.",
    },
    {
      icon: <UsersIcon className="h-10 w-10" />,
      title: "Our Team",
      description:
        "Industry experts with decades of experience in talent acquisition and HR solutions.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                DIONZ
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              With over 15 years of experience, we've been connecting talent
              with opportunity, creating lasting impact for both individuals and
              organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, DIONZ Manpower Agency began with a simple
                vision: to transform how businesses find talent and how
                professionals find meaningful work.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small local agency has grown into a trusted
                partner for hundreds of companies and thousands of professionals
                across industries.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have facilitated over 2,500 successful
                placements and continue to innovate in talent acquisition.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-700 mb-2">
                  15+
                </div>
                <div className="text-gray-600 mb-6">Years of Excellence</div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">
                      2,500+
                    </div>
                    <div className="text-sm text-gray-600">Placements</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">
                      300+
                    </div>
                    <div className="text-sm text-gray-600">Companies</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">Industries</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">
                      98%
                    </div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-purple-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
