import {
  FaCalendarCheck,
  FaClock,
  FaHeadset,
  FaLock,
  FaStar,
  FaUserMd,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd className="text-xl text-blue-600" />,
    bg: "bg-blue-50",
    title: "Verified Doctors",
    desc: "Every doctor on our platform is thoroughly verified with valid credentials and licenses.",
  },
  {
    icon: <FaCalendarCheck className="text-xl text-teal-600" />,
    bg: "bg-teal-50",
    title: "Easy Booking",
    desc: "Book your appointment in under 2 minutes with our streamlined scheduling system.",
  },
  {
    icon: <FaLock className="text-xl text-violet-600" />,
    bg: "bg-violet-50",
    title: "Secure & Private",
    desc: "Your medical data and personal information are fully encrypted and protected.",
  },
  {
    icon: <FaClock className="text-xl text-sky-600" />,
    bg: "bg-sky-50",
    title: "Real-Time Availability",
    desc: "See live doctor availability and pick a time slot that works for you.",
  },
  {
    icon: <FaStar className="text-xl text-yellow-500" />,
    bg: "bg-yellow-50",
    title: "Top Rated Specialists",
    desc: "Access only the highest-rated doctors across 20+ medical specialties.",
  },
  {
    icon: <FaHeadset className="text-xl text-emerald-600" />,
    bg: "bg-emerald-50",
    title: "24/7 Support",
    desc: "Our support team is always available to help you with any questions or concerns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f5f0]">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-teal-100/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm text-teal-600 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            Why DocAppoint
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Why Patients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Trust Us
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            We are committed to making healthcare accessible, transparent, and
            stress-free for everyone.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {f.icon}
              </div>
              <h3 className="text-slate-800 font-extrabold text-base mb-2">
                {f.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
