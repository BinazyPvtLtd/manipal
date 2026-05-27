import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ onEnquireClick }) => {
  return (
    <nav className="page-header sticky top-0 z-30 w-full bg-white/95 shadow-sm backdrop-blur">
      <div className="page-container flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        <div className="flex min-w-0 items-center">
          <img
            src={logo}
            alt="Online Manipal"
            className="h-8 w-auto object-contain sm:h-12 lg:h-14"
          />
        </div>

        <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-4">
          <a
            href="tel:+919205780885"
            className="rounded-full bg-orange-400 px-2.5 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-orange-500 sm:px-5 sm:text-base lg:px-7">
            +91 9205780885
          </a>

          <button
            type="button"
            onClick={onEnquireClick}
            className="inline-flex rounded-full bg-orange-400 px-2.5 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-orange-500 sm:px-5 sm:text-sm lg:px-7 lg:text-base">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
