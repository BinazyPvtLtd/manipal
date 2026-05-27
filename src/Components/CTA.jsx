import React from "react";

const CTA = ({ onApplyClick }) => {
  return (
    <section className="page-section">
      <div className="page-container rounded-lg bg-blue-950 px-4 py-10 text-center text-white sm:px-6 sm:py-12">
        <h2 className="content-subtitle mx-auto max-w-4xl leading-relaxed">
          Start your journey today with Manipal Online University and take the
          next step towards a successful career!
        </h2>

        <button
          type="button"
          onClick={onApplyClick}
          className="mt-6 rounded-md bg-orange-400 px-5 py-3 font-medium text-white shadow-md transition-colors duration-300 hover:bg-orange-500 sm:px-6">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
