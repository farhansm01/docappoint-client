"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Appointments", href: "/appointments" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md shadow-blue-100"
          : "bg-white border-b border-blue-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="DocAppoint"
            width={44}
            height={44}
            className="object-contain"
            priority
          />
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-gray-900">Doc</span>
            <span className="text-blue-600">Appoint</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-blue-600 font-bold text-sm px-5 py-2 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-blue-600 text-white font-bold text-sm px-5 py-2 rounded-lg hover:bg-blue-700 shadow-md shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            Register
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-blue-600 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-blue-600 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-blue-600 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 pb-5 pt-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-700 hover:text-blue-600 font-semibold text-base border-b border-gray-100 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link
              href="/login"
              className="flex-1 text-center text-blue-600 font-bold text-sm py-2.5 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="flex-1 text-center bg-blue-600 text-white font-bold text-sm py-2.5 rounded-lg hover:bg-blue-700 transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
