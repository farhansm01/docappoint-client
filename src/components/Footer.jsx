import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100 border-t border-gray-100">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md shadow-blue-200 shrink-0">
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

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Your trusted platform for seamless doctor appointment booking.
            Healthcare made simple, secure, and accessible for everyone.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {[
              {
                label: "Facebook",
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
                href="#"
                aria-label={s.label}
                className="w-9 h-9 bg-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 text-slate-400 hover:text-white rounded-xl flex items-center justify-center border border-gray-200 hover:border-transparent shadow-sm transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-slate-700 font-bold text-sm uppercase tracking-wider mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
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
                  className="text-slate-400 hover:text-blue-600 text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors duration-200" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h4 className="text-slate-700 font-bold text-sm uppercase tracking-wider mb-5">
            Specialties
          </h4>
          <ul className="space-y-3">
            {[
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Pediatrics",
              "Dermatology",
              "Psychiatry",
            ].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-slate-400 text-sm font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-slate-700 font-bold text-sm uppercase tracking-wider mb-5">
            Contact Us
          </h4>
          <ul className="space-y-3.5">
            {[
              { icon: "📍", text: "Dhanmondi, Dhaka, Bangladesh" },
              { icon: "📞", text: "+880 1700-000000" },
              { icon: "✉️", text: "support@docappoint.com" },
              { icon: "🕐", text: "Mon–Sat: 9AM – 8PM" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 text-base shrink-0">{item.icon}</span>
                <span className="text-slate-400 font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sky-200 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} DocAppoint. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
