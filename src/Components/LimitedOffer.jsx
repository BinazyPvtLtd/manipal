import React from "react";

const offers = [
  {
    icon: "🎓",
    title: "MBA",
    discount: "15% Discount",
  },
  {
    icon: "💻",
    title: "MCA",
    discount: "10% Discount",
  },
  {
    icon: "📘",
    title: "MA",
    discount: "10% Discount",
  },
];

export default function LimitedOffer() {
  return (
    <section className="page-section page-section-tight w-full bg-[#f8f3de]">
      <div className="page-container">
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="text-2xl">🔥</span>
          <h2 className="text-2xl font-bold text-orange-300 sm:text-3xl">
            Limited Time Offer!
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white px-4 py-4 sm:px-5">
              <span className="text-2xl">{offer.icon}</span>

              <div className="text-base font-semibold text-[#001b5e] sm:text-lg">
                {offer.title} - {offer.discount}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-[#f28c34] px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#e77d23] sm:px-10 sm:text-base">
            ENROLL NOW & SAVE
          </button>
        </div>
      </div>
    </section>
  );
}
