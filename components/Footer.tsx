import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold text-white">DIONZ</span>
            </div>
            <p className="mb-6">
              Connecting talent with opportunity to create sustainable futures
              for individuals and businesses.
            </p>
          </div>

          {["Employers", "Candidates", "Services", "Company"].map((column) => (
            <div key={column}>
              <h4 className="text-white font-bold text-lg mb-6">{column}</h4>
              <ul className="space-y-3">
                {["Link One", "Link Two", "Link Three", "Link Four"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} DIONZ Manpower Agency. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
