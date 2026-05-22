import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 overflow-hidden">
      <div className="absolute w-80 h-80 bg-white/5 rounded-full -top-20 right-52 pointer-events-none" />
      <div className="absolute w-52 h-52 bg-white/5 rounded-full -bottom-16 left-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-12">
        {/* Left */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/25 text-blue-100 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live · Trusted Healthcare Platform
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-5">
            Find the Right Doctor.
            <br />
            <span className="text-blue-200">Book in Minutes.</span>
          </h1>

          <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Browse verified specialists, check real-time availability, and
            schedule appointments — without the wait.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold text-sm px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Book Appointment
            </Link>
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              Explore Doctors
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-7 justify-center md:justify-start">
            {[
              { icon: "✓", text: "Verified Doctors" },
              { icon: "⚡", text: "Instant Booking" },
              { icon: "🔒", text: "Secure & Private" },
            ].map((p) => (
              <span
                key={p.text}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-blue-100 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                <span>{p.icon}</span>
                {p.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hidden md:flex flex-1 justify-center md:justify-end w-full">
          <div className="w-full max-w-sm flex flex-col gap-3">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">
              Upcoming Appointments
            </p>

            {[
              {
                name: "Dr. Ayesha Rahman",
                spec: "Cardiologist",
                time: "Today, 09:00 AM",
                color: "bg-blue-100 text-blue-700",
                emoji: "💙",
              },
              {
                name: "Dr. Imran Hossain",
                spec: "Neurologist",
                time: "Tomorrow, 11:30 AM",
                color: "bg-purple-100 text-purple-700",
                emoji: "🧠",
              },
              {
                name: "Dr. Nadia Islam",
                spec: "Dermatologist",
                time: "Thu, 04:00 PM",
                color: "bg-pink-100 text-pink-700",
                emoji: "🌿",
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg shrink-0">
                  {doc.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {doc.name}
                  </p>
                  <p className="text-blue-200 text-xs">{doc.spec}</p>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-1 rounded-full shrink-0 ${doc.color}`}
                >
                  {doc.time}
                </span>
              </div>
            ))}

            <div className="bg-white/15 border border-white/25 rounded-2xl px-4 py-3 flex items-center justify-between mt-1">
              <div>
                <p className="text-white font-semibold text-sm">500+ Doctors</p>
                <p className="text-blue-200 text-xs">Across 20+ specialties</p>
              </div>
              <div className="flex -space-x-2">
                {["💊", "🩺", "🔬"].map((e, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-sm"
                  >
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
