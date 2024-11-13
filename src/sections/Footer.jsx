import img from "../assets/9.jpg";
import logo from "../assets/logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="relative sm:px-4  lg:px-8 pt-8 md:pt-12 ">
      {/* Hero Image with Overlay */}
      <div className="relative z-10" id="contact">
        <img
          src={img}
          alt="Dining Experience"
          className="w-full h-[80vh] object-cover md:rounded-t-[7%]  lg:rounded-t-[15%]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-button bg-opacity-65 flex items-center justify-center md:rounded-t-[7%]   lg:rounded-t-[15%]">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-white font-heading mb-4">
              Discover La <br /> Bettola Pizza & <br />
              Grill!
            </h1>
            <button className="px-6 py-3 mt-4 bg-white text-black font-medium rounded-lg shadow hover:bg-gray-200 transition">
              <a
                href="https://web.whatsapp.com/send?phone=+6593979837"
                target="_blank"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative w-full h-[300px]">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=103.84061157703401%2C1.3236274439495042%2C103.84312212467194%2C1.3254079548726532&amp;layer=mapnik"
          className="w-full h-full"
          title="La Bettola Location"
          allowFullScreen
          loading="lazy"
        ></iframe>
        {/* Location Card */}
        <div className="absolute bottom-6 left-12 bg-[#f3e4d9] rounded-lg p-4 shadow-lg">
          <h3 className="text-lg font-heading text-brand-heading">Location</h3>
          <p className="text-brand-text">
            328 Joo Chiat Rd, #01-04, Singapore 427585
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black py-6 px-2 md:px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src={logo} alt="La Bettola Logo" className="h-12 sm:h-24" />
          <div className="icons text-white text-5xl flex flex-row min-w-32 gap-3">
            <a href="https://facebook.com" target="_blank">
              {" "}
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank">
              {" "}
              <FaInstagramSquare />{" "}
            </a>
            <a href="https://tiktok.com" target="_blank">
              {" "}
              <AiFillTikTok />{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
