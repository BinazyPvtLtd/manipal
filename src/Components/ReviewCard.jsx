import React from "react";

const ReviewCard = ({ image, desc }) => {
  return (
    <div className="rounded-sm border border-gray-200 bg-white p-3 ">
      <img
        src={image}
        alt="review"
        className="h-52 w-full  object-cover sm:h-60"
      />

      <p className="compact-copy pt-4 text-gray-700">
        {desc}
      </p>
    </div>
  );
};

export default ReviewCard;
