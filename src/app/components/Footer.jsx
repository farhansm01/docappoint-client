import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.png"
              alt="DocAppoint"
              width={38}
              height={38}
              className="object-contain brightness-0 invert"
            />
            <span className="text-xl font-extrabold text-white">
              Doc<span className="text-blue-400">Appoint</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Your trusted platform for seamless doctor appointment booking.
            Healthcare made simple.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              {
                label: "Facebook",
                href: "#",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                ),
              },
              {
                label: "X",
                href: "#",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "#",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                href: "#",
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", href: "/" },
              { label: "All Appointments", href: "/appointments" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "Login", href: "/login" },
              { label: "Register", href: "/register" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Specialties
          </h4>
          <ul className="space-y-2.5">
            {[
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Pediatrics",
              "Dermatology",
              "Psychiatry",
            ].map((s) => (
              <li key={s}>
                <span className="text-gray-400 text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3">
            {[
              { icon: "📍", text: "Dhanmondi, Dhaka, Bangladesh" },
              { icon: "📞", text: "+880 1700-000000" },
              { icon: "✉️", text: "support@docappoint.com" },
              { icon: "🕐", text: "Mon–Sat: 9AM – 8PM" },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-2.5 text-sm text-gray-400"
              >
                <span className="mt-0.5">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DocAppoint. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
