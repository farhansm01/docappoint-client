import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f5f0]">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-100/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-50/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-8">
        {/* ── LEFT ── */}
        <div className="flex-1 text-center md:text-left z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm text-teal-600 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
            Trusted Healthcare Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[52px] font-extrabold text-slate-800 leading-[1.1] tracking-tight mb-5">
            Your Health,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Our Priority.
            </span>
            <br />
            Book a Doctor
            <br />
            in Minutes.
          </h1>

          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Browse verified specialists, check real-time availability, and
            schedule appointments — easily and securely from home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Appointment
            </Link>
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center text-slate-700 font-bold text-sm px-7 py-3.5 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Explore Doctors
            </Link>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-10">
            {[
              {
                icon: "✓",
                text: "Verified Doctors",
                bg: "bg-emerald-50 border-emerald-200 text-emerald-700",
              },
              {
                icon: "⚡",
                text: "Instant Booking",
                bg: "bg-blue-50 border-blue-200 text-blue-700",
              },
              {
                icon: "🔒",
                text: "Secure & Private",
                bg: "bg-violet-50 border-violet-200 text-violet-700",
              },
            ].map((p) => (
              <span
                key={p.text}
                className={`inline-flex items-center gap-1.5 border text-xs font-semibold px-3.5 py-1.5 rounded-full ${p.bg}`}
              >
                {p.icon} {p.text}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-10">
            {[
              { value: "500+", label: "Doctors" },
              { value: "20+", label: "Specialties" },
              { value: "50k+", label: "Patients" },
              { value: "4.9★", label: "Avg Rating" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-2xl font-extrabold text-slate-800 leading-none">
                  {s.value}
                </p>
                <p className="text-slate-400 text-xs mt-1 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="relative flex-1 flex justify-center items-center z-10 w-full md:w-auto">
          {/* Main doctor image */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-200/60 border-4 border-white">
            <img
              src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
              alt="Doctor"
              className="w-full h-full object-cover object-top"
            />
            {/* subtle inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
          </div>

          {/* Floating card — top left */}
          <div className="absolute -top-4 left-0 sm:-left-6 bg-white rounded-2xl shadow-lg shadow-slate-200/80 border border-slate-100 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">
              🩺
            </div>
            <div>
              <p className="text-slate-800 font-bold text-sm leading-none">
                500+
              </p>
              <p className="text-slate-400 text-xs mt-0.5">Verified Doctors</p>
            </div>
          </div>

          {/* Floating card — bottom left */}
          <div className="absolute -bottom-4 left-0 sm:-left-6 bg-white rounded-2xl shadow-lg shadow-slate-200/80 border border-slate-100 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-xl shrink-0">
              📅
            </div>
            <div>
              <p className="text-slate-800 font-bold text-sm leading-none">
                Easy Booking
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                In under 2 minutes
              </p>
            </div>
          </div>

          {/* Floating card — right */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 bg-white rounded-2xl shadow-lg shadow-slate-200/80 border border-slate-100 px-4 py-3">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">
                  ★
                </span>
              ))}
            </div>
            <p className="text-slate-800 font-bold text-sm">4.9 Rating</p>
            <p className="text-slate-400 text-xs mt-0.5">50k+ patients</p>
          </div>

          {/* Decorative ring behind image */}
          <div className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[460px] rounded-[2.5rem] border-2 border-dashed border-blue-200/60 -z-10" />
        </div>
      </div>
    </section>
  );
}
