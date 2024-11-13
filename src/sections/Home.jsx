import logo from "../assets/logo.png";

import { useState } from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/3.jpeg";
import img3 from "../assets/4.jpeg";
import img4 from "../assets/6.jpeg";
import img5 from "../assets/7.jpeg";
import img6 from "../assets/8.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="flex justify-between items-center py-4">
          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex  justify-center py-4">
            <img src={logo} alt="La Bettola Logo" className="h-32" />
          </div>

          <nav className="hidden md:flex space-x-6 justify-center items-center">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              About Us
            </a>
            <a
              href="#menu"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Menu
            </a>
            <a
              href="https://wa.me/+6593979837"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <nav className="flex flex-col space-y-4 mt-2">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              About Us
            </a>
            <a
              href="#menu"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Menu
            </a>
            <a
              href="https://wa.me/+6593979837"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <div className="" id="home">
      <div className="w-full max-w-screen-lg mx-auto px-4 text-center">
        <Navbar />
        {/* Heading and Subheading */}
        <h1 className="text-3xl font-semibold text-brand-heading mt-6 font-heading">
          Taste Italy in Every Bite
        </h1>
        <p className="text-brand-text mt-2 max-w-[65%] font-sans mx-auto">
          Experience authentic Italian flavors with every pizza slice and grill
          delight at La Bettola. Join us for unforgettable meals at Joo Chiat
          now.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-brand-button transition text-white py-2 px-4 rounded font-medium hover:bg-brand-hover">
            <a href="https://wa.me/+6593979837" target="_blank">
              Contact Us Now
            </a>
          </button>
        </div>

        {/* Image Gallery */}
        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 h-64">
          <img
            src={img1}
            alt="Italian Dish 1"
            className="rounded-bl-xl rounded-br-xl h-full object-cover w-full"
          />
          <img
            src={img2}
            alt="Italian Dish 2"
            className="rounded-bl-xl rounded-br-xl h-full object-cover w-full"
          />
          <img
            src={img3}
            alt="Italian Dish 3"
            className="rounded-bl-xl rounded-br-xl h-full object-cover w-full"
          />
          <img
            src={img4}
            alt="Italian Dish 4"
            className="rounded-bl-xl rounded-br-xl h-full object-cover w-full"
          />
          <img
            src={img5}
            alt="Italian Dish 5"
            className="rounded-bl-xl rounded-br-xl h-full object-cover w-full"
          />
          <img
            src={img6}
            alt="Italian Dish 6"
            className="rounded-bl-xl rounded-br-xl h-full object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}
