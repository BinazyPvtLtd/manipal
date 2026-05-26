import React from "react";

const courseSections = [
  {
    title: "Explore Our Institutions",
    items: [
      "Manipal Academy of Higher Education",
      "Manipal University Jaipur",
      "Sikkim Manipal University",
    ],
  },
  {
    title: "Management",
    items: [
      "Bachelor of Business Administration (BBA)",
      "Online MBA Courses",
      "Master of Business Administration (MBA for working professionals)",
      "Master of Business Administration (MBA)",
      "Master of Business Administration (MBA with Dual Specialization)",
      "PGCP in Entrepreneurship & Innovation (PGCP E&I)",
    ],
  },
  {
    title: "Information Technology",
    items: [
      "Master of Computer Applications (MCA) from Manipal Academy of Higher Education",
      "Master of Computer Applications (MCA) from Sikkim Manipal University",
      "Master of Computer Applications (MCA) from Manipal University Jaipur",
      "Bachelor of Computer Applications (BCA) from Manipal University Jaipur",
    ],
  },
  {
    title: "Commerce",
    items: [
      "Master of Commerce (MCOM) from Sikkim Manipal University",
      "Master of Commerce (MCOM) from Manipal University Jaipur",
      "Bachelor of Commerce (BCOM) from Sikkim Manipal University",
      "Bachelor of Commerce (BCOM) from Manipal University Jaipur",
    ],
  },
  {
    title: "Arts",
    items: [
      "Master of Arts in English (MA-English)",
      "Master of Arts in Sociology (MA-Sociology)",
      "Master of Arts in Political Science (MA-Political Science)",
      "Bachelor of Arts (BA)",
    ],
  },
  {
    title: "Data Science",
    items: ["MSc in Data Science (MSC-DS)"],
  },
  {
    title: "Business Analytics",
    items: [
      "MSc in Business Analytics (MSC-BA)",
      "PGCP in Business Analytics (PGCP-BA)",
    ],
  },
  {
    title: "Media and Journalism",
    items: ["Master of Arts in Journalism & Mass Communication (MA JMC)"],
  },
  {
    title: "Supply Chain",
    items: ["PGCP in Logistics and Supply Chain (PGCP LSC)"],
  },
];

const AllCourses = () => {
  return (
    <>
      <section className="page-section bg-blue-950">
        <div className="page-container">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Explore all courses
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Browse online degrees and certifications across management,
              technology, commerce, arts, analytics, media, and supply chain.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courseSections.map((section) => (
              <div key={section.title} className="rounded-lg p-6 text-white/90">
                <h3 className="mb-4 text-2xl font-semibold text-orange-500">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="list-none hover:text-orange-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-950 px-4   py-5 text-center text-xl text-white/80">
        Copyright &copy; 2024. All rights reserved Manipal Online
      </div>
      <div></div>
    </>
  );
};

export default AllCourses;
