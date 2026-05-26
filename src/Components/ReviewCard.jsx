import React from "react";

const ReviewCard = ({ image, desc }) => {
  return (
    <div className="rounded-sm border border-gray-200 bg-white p-3 ">
      <img
        src={image}
        alt="review"
        className="h-52 w-full  object-cover sm:h-60"
      />

      <p className="pt-4 text-sm leading-6 text-gray-700 sm:text-base">
        {desc}
      </p>
    </div>
  );
};

export default ReviewCard;
