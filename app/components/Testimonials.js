"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div
      className="h-[30rem] flex flex-col antialiased bg-white dark:bg-blue-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden" id="testimonials">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "John's expertise and professionalism helped us find the perfect home in no time. He was incredibly knowledgeable about the market and negotiated a great deal for us.",
    name: "Sarah Miller",
    title: "Homebuyer",
  },
  {
    quote:
      "Working with John was a game-changer for my real estate investments. His market insights and strategic approach were crucial to my success. I highly recommend him.",
    name: "Michael Thompson",
    title: "Real Estate Investor",
  },
  {
    quote:
      "John made the process of selling our home seamless and stress-free. He provided excellent advice, kept us informed, and got us a great price.",
    name: "Lisa Roberts",
    title: "Home Seller",
  },
  {
    quote:
      "John's commitment to finding us the right property was evident from day one. He listened to our needs and found the ideal space for our growing business.",
    name: "David Johnson",
    title: "Commercial Buyer",
  },
  {
    quote:
      "As a first-time homebuyer, I had a lot of questions, and John was there every step of the way with clear answers and support. I couldn't have asked for a better experience.",
    name: "Emily Davis",
    title: "First-Time Buyer",
  },
];
