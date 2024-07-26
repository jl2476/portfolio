/**
 * Navbar Component
 * 
 * A responsive navigation bar that includes a logo, navigation links, and a mobile menu toggle.
 * 
 * Uses React hooks for managing state and side effects:
 * - `active`: Tracks the currently active section.
 * - `toggle`: Manages the mobile menu open/close state.
 * - `scrolled`: Indicates if the user has scrolled past 100px.
 * 
 * Side Effects:
 * - Adds/removes a scroll event listener to update `scrolled` state.
 * - Uses Intersection Observer to update `active` state based on visible sections.
 * 
 * Renders:
 * - A logo/link to the homepage.
 * - Navigation links for desktop view.
 * - Mobile menu toggle and dropdown menu for small screens.
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  // State to track the currently active section
  const [active, setActive] = useState("home");
  
  // State to toggle the mobile menu
  const [toggle, setToggle] = useState(false);
  
  // State to track if the user has scrolled past 100px
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to handle active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none"
    >
      <div className='w-full flex justify-between items-start mx-auto'>
        {/* Logo/Branding */}
        <Link
          to='/'
          className='flex items-start'
          onClick={() => {
            setActive("home");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex'>
            {/* Logo or Branding Text */}
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='list-none hidden sm:flex flex-col gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"></div>
              )}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle and Dropdown */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
