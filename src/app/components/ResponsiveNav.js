"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navLinks = (
    <>
      {[
        ["Profile", "#profile"],
        ["Education", "#education"],
        ["Skills", "#skills"],
        ["Projects", "#projects"],
        ["Trainings", "#trainings"],
      ].map(([name, href]) => (
        <Link
          key={name}
          href={href}
          className="hover:underline text-sm md:text-base"
          onClick={closeSidebar}
        >
          {name}
        </Link>
      ))}
    </>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 transition-all duration-300 
          ${scrolled ? "bg-blue-600/80 shadow backdrop-blur" : "bg-blue-600/95"} text-white p-4`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Nikhil's Dashboard</h1>
          <div className="flex space-x-6 items-center">{navLinks}</div>
        </div>
      </nav>

      {/* Main content padding */}
      <div className="md:pt-20">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow">
          <h1 className="text-xl font-bold tracking-wide">Nikhil's Dashboard</h1>
          <button
            onClick={toggleSidebar}
            className="p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 z-40 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeSidebar}
          ></div>

          {/* Sidebar */}
          <aside className="relative w-64 h-full bg-blue-700 text-white shadow-lg">
            <div className="flex justify-between items-center p-4 border-b border-blue-600">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button
                onClick={closeSidebar}
                className="p-2"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-4">{navLinks}</div>
          </aside>
        </div>
      </div>
    </>
  );
}
