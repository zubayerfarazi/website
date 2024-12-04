import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { SiIeee } from "react-icons/si";

import profileImage from "../images/Prof Feraz.jpeg";

const Home = () => {
  return (
    <div className="w-full bg-white text-black border-b-4">
      <div className="pt-14 md:pt-20 px-6 md:px-16 text-center md:text-left flex flex-col-reverse items-center justify-around md:flex-row space-y-10 md:space-y-0 md:space-x-12">
        {/* Text Section */}
        <div className="leading-10 py-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-gray-800">
            Hello, I'm
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent mt-3">
            Fernaz Narin Nur
          </h1>
          <p className="text-lg text-justify md:text-xl pt-6 tracking-wide text-gray-800 font-serif">
            I am a passionate researcher and educator in the field of Computer
            Science. With a Ph.D. in Computer Science Engineering, I bring a
            wealth of knowledge and experience to my role as a Professor at the
            prestigious Military Institute of Science and Technology (MIST). My
            research interests lie in cutting-edge areas like Directional
            Wireless Sensor Networks, Cloud Computing, and the Internet of
            Things.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-8 pt-8">
            <Link
              to="https://scholar.google.com/citations?user=2D3mKUYAAAAJ&hl=en"
              target="_blank"
              className="text-4xl md:text-5xl text-gray-800 hover:text-gray-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaGoogleScholar />
            </Link>
            <Link
              to="https://ieeexplore.ieee.org/author/37085474025"
              target="_blank"
              className="text-4xl md:text-5xl text-gray-800 hover:text-gray-600 transition-all duration-300 transform hover:scale-110"
            >
              <SiIeee />
            </Link>
            <Link
              to=""
              target="_blank"
              className="text-4xl md:text-5xl text-gray-800 hover:text-gray-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </Link>

            <Link
              to=""
              target="_blank"
              className="text-4xl md:text-5xl text-gray-800 hover:text-gray-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full shadow-xl w-56 md:w-72 lg:w-80 transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Home;
