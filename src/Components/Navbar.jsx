import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="page-header sticky top-0 z-30 w-full bg-white/95 shadow-sm backdrop-blur">
      <div className="page-container flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center">
          <img
            src={logo}
            alt="Online Manipal"
            className="h-10 w-auto object-contain sm:h-12 lg:h-14"
          />
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href="tel:+919690900925"
            className="rounded-full bg-orange-400 px-3 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-500 sm:px-5 sm:text-base lg:px-7">
            +91 96909 00925
          </a>

          <a
            href="/"
            className="hidden rounded-full bg-orange-400 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-500 md:inline-flex lg:px-7 lg:text-base">
            ENQUIRE NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
