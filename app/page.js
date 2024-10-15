"use client";  // Ensure this is at the top for Next.js App Directory

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Link from 'next/link';


import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import HeroSection from "./components/HeroSection";
import Aboutme from "./components/Aboutme";
import { Career } from "./components/Career";
import { Listings } from "./components/Listings";
import { ContactForm } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import Footer from './components/Footer';
import logo from "./components/public/logo.png";
import Image from "next/image";
import divide1 from './components/public/layeredwave1.svg';

export default function Home() {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Listings", href: "#listings" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Me", href: "#contact" },
  ];

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 10,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []); // Empty dependency array to run AOS init only once

  return (
    <main className='scroll-smooth overflow-hidden'>
      <Navbar className="z-50 bg-transparent fixed w-screen" isBlurred isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        {/* Mobile Navbar */}
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="md:hidden pr-3 flex flex-row justify-evenly w-full items-center bg-transparent">
          <NavbarBrand>
            <Link className="hover:text-indigo-800 hover:scale-105 active:" href='#'><Image src={logo} alt="logo"/></Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Navbar */}
        <NavbarContent className="hidden md:flex w-screen flex-grow justify-between items-center bg-transparent">
          {/* Brand Section */}
          <NavbarBrand className="flex-grow w-[30%]">
            <Link className="hover:text-indigo-800 hover:scale-105 active:" href='#'><Image src={logo} alt="logo"/></Link>
          </NavbarBrand>

          {/* Center Links */}
          <div className="flex-grow flex justify-evenly items-center bg-transparent w-[40%]">
            {menuItems.slice(1, -1).map((item) => (
              <NavbarItem key={item.name}>
                <Link className="hover:text-indigo-800 hover:scale-105 active:" color="foreground" href={item.href}>
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </div>

          {/* Right-side Login/Signup Section */}
          <NavbarContent justify="end" className="flex-grow flex justify-end w-[30%]">
            <NavbarItem className="hidden lg:flex">
              <Link className="hover:text-indigo-800 hover:scale-105 md:active:scale-95" href='/under_construction'>Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="#contact" variant="flat">
                Contact me
              </Button>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className={`fixed top-0 left-0 w-full h-full z-50 bg-white flex flex-col ${isMenuOpen ? 'flex' : 'hidden'}`}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
              &times;
            </button>
          </div>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.name} className="flex-grow flex items-center justify-center">
              <Link
                className="h-full w-full flex items-center justify-center text-lg"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      
      <HeroSection id="home" data-aos="fade-up" />
      <Image className="w-full object-contain m-0 z-0 bg-[#fffdfa]" src={divide1} alt="divider" />
      <Aboutme id="about" data-aos="fade-right" />
      <Career data-aos="fade-left" />
      <Listings id="listings"/>
      <Testimonials id="testimonials" data-aos="flip-up" />
      <ContactForm id="contact" data-aos="fade-up" />
      <Footer/>
    </main>
  );
}
