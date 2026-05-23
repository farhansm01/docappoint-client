import BookingButton from "@/components/BookingButton";
import {
  FaClock,
  FaDollarSign,
  FaHospital,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

async function getDoctor(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`,
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error("Failed to fetch doctor");
  return res.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const doctor = await getDoctor(id);
  return {
    title: doctor.name,
    description: `Book an appointment with ${doctor.name}, ${doctor.specialty} at ${doctor.hospital}, ${doctor.location}.`,
  };
}

export default async function DoctorDetailsPage({ params }) {
  const { id } = await params;
  const doctor = await getDoctor(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f5f0]">
      <div className="max-w-4xl mx-auto px-6 py-14">
        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-100/40 overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-72 shrink-0 relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 md:h-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent md:bg-gradient-to-r" />

              {/* Rating over image */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-slate-800 font-bold text-sm px-3 py-1.5 rounded-full shadow-md">
                <FaStar className="text-yellow-400 text-xs" />
                {doctor.rating}
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 p-7 md:p-8">
              {/* Header */}
              <div className="mb-1">
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  {doctor.specialty}
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-1">
                  {doctor.name}
                </h1>
              </div>

              <div className="border-t border-slate-100 my-5" />

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {doctor.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {[
                  {
                    icon: <FaHospital />,
                    label: "Hospital",
                    value: doctor.hospital,
                    color: "text-blue-500 bg-blue-50",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    label: "Location",
                    value: doctor.location,
                    color: "text-teal-500 bg-teal-50",
                  },
                  {
                    icon: <FaClock />,
                    label: "Experience",
                    value: doctor.experience,
                    color: "text-violet-500 bg-violet-50",
                  },
                  {
                    icon: <FaDollarSign />,
                    label: "Consultation Fee",
                    value: `৳${doctor.fee}`,
                    color: "text-emerald-500 bg-emerald-50",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-slate-50 rounded-2xl p-3.5 border border-slate-100"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shrink-0 ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-[11px] font-medium">
                        {item.label}
                      </p>
                      <p className="text-slate-800 text-sm font-bold">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <BookingButton doctor={doctor} />
            </div>
          </div>
        </div>

        {/* Availability Card */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-blue-100/30 p-6">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
              <FaClock className="text-blue-500 text-sm" />
            </div>
            <h2 className="text-slate-800 font-extrabold text-base">
              Available Time Slots
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {doctor.availability?.map((slot, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 text-blue-700 font-semibold text-sm px-4 py-2 rounded-xl"
              >
                <FaClock className="text-teal-400 text-xs" />
                {slot}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
