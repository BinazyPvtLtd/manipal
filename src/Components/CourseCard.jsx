import React from "react";
import {
  FaGraduationCap,
  FaRegCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

import Card1 from "../assets/card1.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";
import Card4 from "../assets/card4.jpg";
import Card5 from "../assets/card5.jpg";
import Card6 from "../assets/card6.jpg";
import Card7 from "../assets/card7.jpg";
import Card8 from "../assets/card8.jpg";
import Card9 from "../assets/card9.jpg";
import Card10 from "../assets/card10.jpg";
import Card11 from "../assets/card11.jpg";
import Card12 from "../assets/card12.jpg";

const courses = [
  {
    id: 1,
    title: "MBA",
    university: "Manipal University Jaipur",
    degree: "Master of Business Administration",
    duration: "24 Months",
    fee: "INR 1,75,000",
    image: Card1,
  },
  {
    id: 2,
    title: "BCA",
    university: "Manipal University Jaipur",
    degree: "Bachelor of Computer Applications",
    duration: "36 Months",
    fee: "INR 1,35,000",
    image: Card2,
  },
  {
    id: 3,
    title: "MBA",
    university: "Sikkim Manipal University",
    degree: "Master of Business Administration",
    duration: "24 Months",
    fee: "INR 1,10,000",
    image: Card3,
  },
  {
    id: 4,
    title: "PGCP-E&I",
    university: "Manipal Academy of Higher Education",
    degree: "PGCP in Entrepreneurship & Innovation",
    duration: "12 Months",
    fee: "INR 1,10,000",
    image: Card4,
  },
  {
    id: 5,
    title: "MBA",
    university: "Manipal Academy of Higher Education",
    degree: "Master of Business Administration",
    duration: "24 Months",
    fee: "INR 2,80,000",
    image: Card5,
  },
  {
    id: 6,
    title: "BA",
    university: "Sikkim Manipal University",
    degree: "Bachelor of Arts",
    duration: "36 Months",
    fee: "INR 75,000",
    image: Card6,
  },
  {
    id: 7,
    title: "BBA",
    university: "Manipal University Jaipur",
    degree: "Bachelor of Business Administration",
    duration: "36 Months",
    fee: "INR 1,35,000",
    image: Card7,
  },
  {
    id: 8,
    title: "MCA",
    university: "Sikkim Manipal University",
    degree: "Master of Computer Applications",
    duration: "24 Months",
    fee: "INR 98,000",
    image: Card8,
  },
  {
    id: 9,
    title: "BCOM",
    university: "Manipal University Jaipur",
    degree: "Bachelor of Commerce",
    duration: "36 Months",
    fee: "INR 99,000",
    image: Card9,
  },
  {
    id: 10,
    title: "MSC-DS",
    university: "Manipal Academy of Higher Education",
    degree: "M.Sc. in Data Science",
    duration: "24 Months",
    fee: "INR 2,80,000",
    image: Card10,
  },
  {
    id: 11,
    title: "MA-JMC",
    university: "Manipal University Jaipur",
    degree: "MA in Journalism & Mass Communication",
    duration: "24 Months",
    fee: "INR 1,40,000",
    image: Card11,
  },
  {
    id: 12,
    title: "MCOM",
    university: "Manipal University Jaipur",
    degree: "Master of Commerce",
    duration: "24 Months",
    fee: "INR 1,08,000",
    image: Card12,
  },
];

export default function CourseCards({ onReadMoreClick }) {
  return (
    <section className="page-section bg-gray-100">
      <div className="page-container mb-12">
        <h2 className="section-title mb-4">
          Explore Our Online Manipal Degrees & Certifications
        </h2>

        <p className="section-copy max-w-4xl text-gray-700">
          Explore flexible, accredited degrees and certifications with Online
          Manipal University, designed for career growth and professional
          success.
        </p>
      </div>

      <div className="page-container grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg">
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-cover"
            />

            {/* Title Section */}
            <div className="mt-2 flex min-h-12 items-center gap-2 bg-violet-100 px-3 py-2">
              <FaGraduationCap className="text-lg text-gray-800" />

              <h2 className="text-lg font-semibold leading-tight text-blue-950">
                {course.title}
              </h2>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-3">
              <h3 className="min-h-12 text-[15px] font-bold leading-snug text-blue-950">
                {course.university}
              </h3>

              <div className="my-3 border-t border-gray-300"></div>

              <p className="compact-copy mb-4 min-h-10 text-gray-500">
                {course.degree}
              </p>

              {/* Bottom Info */}
              <div className="mt-auto mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[13px] text-black">
                <div className="flex min-w-0 items-center gap-1">
                  <FaRegCalendarAlt />
                  <span>{course.duration}</span>
                </div>

                <div className="flex min-w-0 items-center gap-1">
                  <FaMoneyBillWave />
                  <span>{course.fee}</span>
                </div>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={onReadMoreClick}
                className="w-fit rounded-full bg-orange-400 px-4 py-2 text-xs font-medium text-white transition hover:bg-orange-500">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
