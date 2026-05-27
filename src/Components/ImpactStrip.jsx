import React from "react";

const impactText =
  '"As per UGC" online degrees are equivalent to on-campus degrees - "97%" of online students and graduates would recommend online education to others - "93%" of students say their Online Manipal degree has a positive ROI - "81%" of students find online is better than or equal to on-campus learning - "75000+" learners have been empowered through Online Manipal - Learners are from 60+ countries and 1,500+ towns and cities';

export default function ImpactStrip() {
  return (
    <section className="w-full overflow-hidden bg-blue-950 py-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:gap-4">
        <h2 className="shrink-0 text-base font-semibold text-white sm:whitespace-nowrap sm:text-xl md:text-2xl">
          Online Manipal Impact
        </h2>

        <div className="relative min-w-0 flex-1 overflow-hidden border-t border-white/30 pt-2 sm:border-l sm:border-t-0 sm:py-1 sm:pl-0">
          <div className="impact-strip flex w-max items-center text-sm font-medium text-white sm:pl-8 sm:text-lg">
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
