import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGoogleScholar } from "react-icons/fa6";
import { SiIeee } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-200 shadow-lg z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 border-t-4 border-gray-200 px-8 py-8 text-black text-center text-lg">
      <div className="flex justify-center items-center gap-12 md:gap-16 pt-8 pb-6">
        <Link
          to="https://scholar.google.com/citations?user=2D3mKUYAAAAJ&hl=en"
          target="_blank"
          className="text-black text-4xl md:text-5xl hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <FaGoogleScholar />
        </Link>
        <Link
          to="https://ieeexplore.ieee.org/author/37085474025"
          target="_blank"
          className="text-black text-4xl md:text-5xl hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <SiIeee />
        </Link>
        <Link
          to=""
          target="_blank"
          className="text-black text-4xl md:text-5xl hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <FaLinkedin />
        </Link>

        <Link
          to=""
          target="_blank"
          className="text-black text-4xl md:text-5xl hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <FaTwitter />
        </Link>
      </div>

      {/* Additional footer text or email */}
      <div className="pt-6 text-gray-600 text-lg">
        <p>
          Feel free to reach out to me via any of the platforms above. Let's
          connect!
        </p>
      </div>

      <p className="font-semibold text-gray-700 mt-4">
        2024 © ZRF | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
