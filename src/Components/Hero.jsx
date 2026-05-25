import React, { useState } from "react";
import heroimg from "../assets/heroimg.jpg";
import Contactus from "./Contactus";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="page-section relative w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroimg})`,
      }}>
      <div className="absolute inset-0 bg-black/45 lg:bg-black/30"></div>

      <div className="page-container relative z-10 grid min-h-auto items-center gap-7 md:gap-9 lg:min-h-155 lg:grid-cols-[1fr_0.9fr] xl:min-h-170">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Admission Open For Online Degrees From Top Manipal University
          </h1>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 inline-flex rounded-full bg-orange-400 px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-orange-500 sm:mt-7 sm:px-10 sm:text-xl">
            GET STARTED
          </button>
        </div>

        <Contactus />
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setShowModal(false)}>
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-800">
              <IoClose size={20} />
            </button>
            <Contactus />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
