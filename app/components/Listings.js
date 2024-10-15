"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import Link from "next/link";

export function Listings() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-[#fffdfa]" id="listings">
      <div data-aos="fade-up" data-aos-delay='200'>
      <h2 className=" mx-auto ml-20 text-xl md:text-5xl inline h-20 font-bold bg-gradient-to-r from-black to-neutral-500 bg-clip-text text-transparent font-sans">
        Explore My Listings
      </h2> 
      <Carousel items={cards} />
      </div>
    </div>
  );
}

const ListingContent = ({ description, imageSrc }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl pb-8 font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description}
        </span>
      </p>
      <Link href="/under_construction" className="text-indigo-700">Know More...</Link>
    </div>
  );
};

const data = [
  {
    category: "Apartment",
    title: "Luxury Apartment in Downtown",
    src: "https://images.pexels.com/photos/6890242/pexels-photo-6890242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <ListingContent description="Spacious 3 BHK apartment with modern amenities." />,
  },
  {
    category: "Villa",
    title: "Beachside Villa",
    src: "https://images.pexels.com/photos/7902904/pexels-photo-7902904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <ListingContent description="Beautiful villa with a sea view and private pool." />,
  },
  {
    category: "Commercial",
    title: "Office Space in Business District",
    src: "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <ListingContent description="Prime office space with all facilities." />,
  },
  {
    category: "House",
    title: "Cozy Family House",
    src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <ListingContent description="Comfortable house in a quiet neighborhood." />,
  },
  {
    category: "Land",
    title: "Plot for Sale",
    src: "https://images.pexels.com/photos/10294222/pexels-photo-10294222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <ListingContent description="Large plot available for residential or commercial use." />,
  },
  {
    category: "Rental",
    title: "Affordable Rental Apartment",
    src: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <ListingContent description="2 BHK apartment available for rent." />,
  },
];
