import React from "react";
import img1 from "../assets/review1.jpg";
import img2 from "../assets/review2.jpg";
import img3 from "../assets/review3.jpg";
import img4 from "../assets/review4.jpg";
import ReviewCard from "../Components/ReviewCard";

const ReviewData = [
  {
    id: 1,
    image: img1,
    desc: "I currently work in the pharmaceutical sector, but I wanted to expand my skill set. That’s why I chose to pursue an MBA in Pharmaceutical Management. I believe this online Manipal MBA degree will deepen my domain knowledge and enhance essential skills like leadership, communication, and teamwork.",
  },

  {
    id: 2,
    image: img2,
    desc: "After spending six years in monkhood, I returned to a materialistic life with the desire to build my own career. Upon entering the workforce, I realized I was missing out on opportunities due to my lack of a degree. I decided to pursue an online manipal MBA from Manipal University Jaipur, which has been beneficial for my current job role.",
  },

  {
    id: 3,
    image: img3,
    desc: "I enrolled in this online MBA degree program at Manipal to advance my skills in data science. The support from mentors has been crucial to my progress, and the interactive classes have made learning enjoyable.",
  },

  {
    id: 4,
    image: img4,
    desc: "This program has been essential in providing me with knowledge of programming languages like Python and SQL, giving me valuable skills for my upcoming job search.",
  },
];

const Review = () => {
  return (
    <section className="page-section px-4 sm:px-6 lg:px-8">
      <div className="page-container mx-auto">
        
        {/* Heading */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Student <span className="italic">speak</span> on Online Manipal
          </h1>

          <p className="mt-4 text-base text-gray-600 sm:text-lg lg:text-sm">
            Hear from our Online Manipal students about their experiences and
            success stories with Online Manipal programs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ReviewData.map((item) => (
            <ReviewCard
              key={item.id}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;