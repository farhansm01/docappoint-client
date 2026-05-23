"use client";
import { authClient } from "@/lib/auth-client";
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
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/60"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md shadow-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="12" y1="14" x2="12" y2="18" />
              <line x1="10" y1="16" x2="14" y2="16" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-slate-800">Doc</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Appoint
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-500 hover:text-blue-600 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth — Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {session?.user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl px-3 py-1.5">
                <img
                  src={
                    session.user.image?.replace("s96-c", "s200-c") ||
                    "/default-avatar.png"
                  }
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <span className="text-slate-700 font-semibold text-sm">
                  {session.user.name?.split(" ")[0]}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-slate-700 hover:text-blue-600 font-bold text-sm px-5 py-2.5 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-600 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-600 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-600 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 pb-6 pt-3 shadow-lg shadow-slate-200/60">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-semibold text-sm rounded-xl transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-4">
            {session?.user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={
                      session.user.image?.replace("s96-c", "s200-c") ||
                      "/default-avatar.png"
                    }
                    alt={session.user.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border-2 border-blue-100"
                  />
                  <span className="text-slate-700 font-semibold text-sm">
                    {session.user.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm px-4 py-2 rounded-2xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="flex-1 text-center text-slate-700 font-bold text-sm py-2.5 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex-1 text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-sm py-2.5 rounded-xl transition-all"
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
