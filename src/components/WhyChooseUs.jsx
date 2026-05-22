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
    icon: <FaUserMd className="text-2xl text-blue-600" />,
    title: "Verified Doctors",
    desc: "Every doctor on our platform is thoroughly verified with valid credentials and licenses.",
  },
  {
    icon: <FaCalendarCheck className="text-2xl text-blue-600" />,
    title: "Easy Booking",
    desc: "Book your appointment in under 2 minutes with our streamlined scheduling system.",
  },
  {
    icon: <FaLock className="text-2xl text-blue-600" />,
    title: "Secure & Private",
    desc: "Your medical data and personal information are fully encrypted and protected.",
  },
  {
    icon: <FaClock className="text-2xl text-blue-600" />,
    title: "Real-Time Availability",
    desc: "See live doctor availability and pick a time slot that works for you.",
  },
  {
    icon: <FaStar className="text-2xl text-blue-600" />,
    title: "Top Rated Specialists",
    desc: "Access only the highest-rated doctors across 20+ medical specialties.",
  },
  {
    icon: <FaHeadset className="text-2xl text-blue-600" />,
    title: "24/7 Support",
    desc: "Our support team is always available to help you with any questions or concerns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Why DocAppoint
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Patients Trust Us
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We are committed to making healthcare accessible, transparent, and
            stress-free for everyone.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
