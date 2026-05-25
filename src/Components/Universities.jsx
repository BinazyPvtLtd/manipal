import React from "react";
import img1 from "../assets/uni1.png";
import img2 from "../assets/uni2.png";
import img3 from "../assets/uni3.png";

const universities = [
  {
    name: "Manipal Academy of Higher Education (MAHE)",
    image: img1,
    color: "from-green-600 to-emerald-500",
  },
  {
    name: "Manipal University Jaipur (MUJ)",
    image: img2,
    color: "from-purple-700 to-indigo-500",
  },
  {
    name: "Sikkim Manipal University (SMU)",
    image: img3,
    color: "from-orange-500 to-orange-500",
  },
];

export default function UniversitySection() {
  return (
    <section className="page-section page-section-tight w-full rounded-md border-4 border-[#9b5a5a] bg-gray-100">
      <div className="mb-5 text-center">
        <h2 className="text-lg font-bold leading-snug text-[#001c5a] md:text-xl">
          A proud 70-year tradition of educational excellence, serving over
          70,000 online learners from more than 60 countries.
        </h2>
      </div>

      <div className="page-container grid grid-cols-1 gap-4 md:grid-cols-3">
        {universities.map((uni, index) => (
          <div
            key={index}
            className="bg-white shadow-md transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
            <div className="h-40 w-full overflow-hidden">
              <img
                src={uni.image}
                alt={uni.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div
              className={`bg-linear-to-r ${uni.color} px-4 py-3 text-center`}>
              <h3 className="text-sm font-semibold leading-5 text-white md:text-base">
                {uni.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
