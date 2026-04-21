import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-white">Jobify</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Discover your dream job and build your future with top companies.
            Your journey starts here 🚀
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer transition">Home</li>
            <li className="hover:text-red-400 cursor-pointer transition">Browse Jobs</li>
            <li className="hover:text-red-400 cursor-pointer transition">Companies</li>
            <li className="hover:text-red-400 cursor-pointer transition">About Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer transition">Help Center</li>
            <li className="hover:text-red-400 cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-red-400 cursor-pointer transition">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <div className="p-2 bg-gray-700 rounded-full hover:bg-red-500 transition cursor-pointer">F</div>
            <div className="p-2 bg-gray-700 rounded-full hover:bg-red-500 transition cursor-pointer">I</div>
            <div className="p-2 bg-gray-700 rounded-full hover:bg-red-500 transition cursor-pointer">L</div>
            <div className="p-2 bg-gray-700 rounded-full hover:bg-red-500 transition cursor-pointer">G</div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Jobify. Made with ❤️ by Faizan
      </div>
    </footer>
  );
};

export default Footer;