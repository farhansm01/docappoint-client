"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!");
    router.push("/");
  };

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

        {/* Auth — Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {session?.user ? (
            <div className="flex items-center gap-3">
              <img
                src={
                  session.user.image?.replace("s96-c", "s200-c") ||
                  "/default-avatar.png"
                }
                alt={session.user.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
              />
              <button
                onClick={handleLogout}
                className="text-white bg-blue-600 font-bold text-sm px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
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
            </>
          )}
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

          <div className="mt-4">
            {session?.user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={
                      session.user.image?.replace("s96-c", "s200-c") ||
                      "/default-avatar.png"
                    }
                    alt={session.user.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
                  />
                  <span className="text-gray-700 font-semibold text-sm">
                    {session.user.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
