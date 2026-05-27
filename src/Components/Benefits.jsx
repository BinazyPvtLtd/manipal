import React from "react";
import img1 from "../assets/card12.jpg";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Degrees from top ranked Manipal universities",
    desc: "Earn UGC-recognized and AICTE-approved online degrees that are equivalent to traditional on-campus programs.",
  },
  {
    title: "100% placement assistance",
    desc: "Enhance your employability by gaining job-ready skills and preparing for interviews to excel in placement drives.",
  },
  {
    title: "Manipal alumni status",
    desc: "Join a global network of over 150,000 Manipal alumni.",
  },
  {
    title: "Easy Financing Options",
    desc: "Experience greater affordability with flexible financing and zero-cost EMI options.",
  },
  {
    title: "Scholarships up to 30%",
    desc: "Take advantage of scholarship opportunities across merit, defense, Divyaang, alumni, and other categories.",
  },
  {
    title: "Weekly webinars with industry leaders",
    desc: "Keep up with key industry trends through our weekly webinars led by industry experts.",
  },
  {
    title: "Exclusive Coursera access",
    desc: "Enjoy free access to over 10,000 courses and professional certifications from leading global universities.",
  },
  {
    title: "Campus immersion",
    desc: "Join exclusive on-campus meetups with your batchmates and faculty.",
  },
];

const Benefits = () => {
  return (
    <div>
      <section className="w-full  mt-12 ">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2">
          <div className="px-5 py-10 text-white bg-blue-950 sm:px-8 lg:px-8 lg:py-10">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2
                      size={20}
                      className="fill-white text-blue-950"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-snug">
                      {item.title}
                    </h3>

                    <p className="compact-copy mt-1.5 text-white/85">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-72 lg:min-h-130">
            <img
              src={img1}
              alt="Online Manipal student"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
