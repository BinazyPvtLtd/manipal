import React from "react";

const impactText =
  '"As per UGC" online degrees are equivalent to on-campus degrees - "97%" of online students and graduates would recommend online education to others - "93%" of students say their Online Manipal degree has a positive ROI - "81%" of students find online is better than or equal to on-campus learning - "75000+" learners have been empowered through Online Manipal - Learners are from 60+ countries and 1,500+ towns and cities';

export default function ImpactStrip() {
  return (
    <section className="w-full overflow-hidden bg-blue-950  py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4">
        <h2 className="shrink-0 whitespace-nowrap text-lg font-semibold text-white sm:text-xl md:text-2xl">
          Online Manipal Impact
        </h2>

        <div className="relative min-w-0 flex-1 overflow-hidden border-l border-white/30 py-1">
          <div className="impact-strip flex w-max items-center pl-8 text-base font-medium text-white sm:text-lg">
            <span className="whitespace-nowrap pr-12">{impactText}</span>
            <span className="whitespace-nowrap pr-12" aria-hidden="true">
              {impactText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
