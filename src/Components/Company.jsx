import React from "react";
import comp1 from "../assets/company1.jpg";
import comp2 from "../assets/company2.jpg";
import comp3 from "../assets/company3.jpg";
import comp4 from "../assets/company4.jpg";
import comp5 from "../assets/company5.jpg";
import comp6 from "../assets/company6.jpg";
import comp7 from "../assets/company7.jpg";
import comp8 from "../assets/company8.jpg";
import comp9 from "../assets/company9.jpg";
import comp10 from "../assets/company10.jpg";

const images = [
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  comp7,
  comp8,
  comp9,
  comp10,
];

const Company = () => {
  const stripImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden  py-8">
      <div className="company-strip flex w-max items-center">
        {stripImages.map((img, index) => (
          <div
            key={index}
            className="mx-4 flex h-20 w-36 shrink-0 items-center justify-center overflow-hidden rounded-md  bg-white px-4  sm:w-44">
            <img
              src={img}
              alt={`Company logo ${(index % images.length) + 1}`}
              className="max-h-14 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;
