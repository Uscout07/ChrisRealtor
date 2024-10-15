import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function Career() {
  const data = [
    {
        title: "2009",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8" id="career">
              Started my journey in real estate as a junior agent at Heritage Reality.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Focused on learning the fundamentals of property sales, client relations, and local market dynamics.
            </p>
          </div>
        ),
      },
      {
        title: "2012",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Promoted to a full-time agent position due to successful sales performance.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Sold 20 properties within three years, gaining recognition for excellent client service.
            </p>
          </div>
        ),
      },
      {
        title: "2015",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Established a reputation for closing deals in high-demand areas.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Reached a career milestone of 50 property sales and developed long-term relationships with repeat clients and referrals.
            </p>
          </div>
        ),
      },
      {
        title: "2017",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Sold an additional 30 properties, crossing the 80-sales mark.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Known for navigating complex transactions, including relocations and first-time homebuyers.
            </p>
          </div>
        ),
      },
      {
        title: "2019",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Became a senior agent and began mentoring new agents in the company.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Achieved a total of 100 properties sold and recognized for expertise in both residential and commercial property sales.
            </p>
          </div>
        ),
      },
      {
        title: "2022",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Sold 40 more properties, bringing the total to 140+ sales.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Honored with internal awards for consistently exceeding sales targets, specializing in high-value properties and providing personalized guidance to clients.
            </p>
          </div>
        ),
      },
      {
        title: "2023 - Present",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Reached a milestone of 150 properties sold over a 15-year career.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg mb-8">
              Currently recognized as one of the top-performing agents at Heritage Reality, focusing on delivering exceptional results for clients while working in a team environment.
            </p>
          </div>
      ),
    },
  ];
  return (
    <div className='bg-[#fffdfa] overflow-x-auto'>
     <div data-aos="zoom-in" className="scrollable-section">
    <div className="h-[450px] max-md:pt-20 max-lg:h-80 max-md:h-40 md:pt-60 lg:pt-80 px-10 w-full bg-red-950" style={{
      borderTopLeftRadius: '50% 100%',
      borderTopRightRadius: '50% 100%',

    }}><div className="max-w-7xl mx-auto pb-20 px-4 md:px-8 lg:px-10">
    <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
      My Realestate Journey
    </h2>
    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
      I&apos;ve been working on  for the past 2 years. Here&apos;s
      a timeline of my journey.
    </p>
  </div></div>
   
    <div className="w-full">
      <Timeline data={data} />
    </div>
    <div className="h-[450px] max-md:pt-20 max-lg:h-80 max-md:h-40 md:pt-60 lg:pt-80 px-10 w-full bg-red-950" style={{
      borderBottomLeftRadius: '50% 100%',
      borderBottomRightRadius: '50% 100%',

    }}></div>
    </div>
    </div>
  );
}
