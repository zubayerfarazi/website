import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-200 px-4 py-4 transition-all duration-300 ease-in-out">
        <div className="container flex mx-auto justify-between items-center">
          <Link
            to={"/"}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Fernaz Narin, Ph.D
          </Link>

          <div className="space-x-8 text-lg font-semibold hidden md:flex font-serif">
            <button className="text-black hover:text-sky-600 transition duration-300 ease-in-out">
              Home
            </button>
            <button className="text-black hover:text-sky-600 transition duration-300 ease-in-out">
              About
            </button>
            <button className="text-black hover:text-sky-600 transition duration-300 ease-in-out">
              Publications
            </button>
            <button className="text-black hover:text-sky-600 transition duration-300 ease-in-out">
              Books
            </button>
            <button className="text-black hover:text-sky-600 transition duration-300 ease-in-out">
              Fellowships
            </button>
          </div>

          <div className="space-x-6 text-2xl">
            <button
              onClick={toggleOpen}
              className="md:hidden text-black hover:text-sky-600 transition duration-300 ease-in-out"
            >
              <FaBars />
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? "flex flex-col items-center border-t-2 py-4 space-y-4 bg-white shadow-lg z-50 backdrop-filter backdrop-blur-lg bg-opacity-40 border-gray-300 text-black transition-all duration-300 ease-in-out"
              : "hidden"
          } md:hidden`}
        >
          <button className="text-lg font-semibold py-2 px-4 hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out">
            Home
          </button>
          <button className="text-lg font-semibold py-2 px-4 hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out">
            About
          </button>
          <button className="text-lg font-semibold py-2 px-4 hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out">
            Publications
          </button>
          <button className="text-lg font-semibold py-2 px-4 hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out">
            Books
          </button>
          <button className="text-lg font-semibold py-2 px-4 hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out">
            Fellowships
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
