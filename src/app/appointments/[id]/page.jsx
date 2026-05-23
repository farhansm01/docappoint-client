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
    {
      cache: "no-store",
    },
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-64 shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-56 md:h-full object-cover object-[center_20%]"
              />
            </div>

            {/* Details */}
            <div className="flex-1 p-7">
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {doctor.name}
                  </h1>
                  <p className="text-blue-600 font-semibold text-sm mt-0.5">
                    {doctor.specialty}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 text-yellow-600 font-bold text-sm px-3 py-1.5 rounded-full shrink-0">
                  <FaStar className="text-yellow-400 text-xs" />
                  {doctor.rating}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-4" />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {doctor.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  {
                    icon: <FaHospital />,
                    label: "Hospital",
                    value: doctor.hospital,
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    label: "Location",
                    value: doctor.location,
                  },
                  {
                    icon: <FaClock />,
                    label: "Experience",
                    value: doctor.experience,
                  },
                  {
                    icon: <FaDollarSign />,
                    label: "Consultation Fee",
                    value: `৳${doctor.fee}`,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-blue-500 text-xs">{item.icon}</span>
                      <p className="text-gray-400 text-[11px] font-medium">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-gray-900 text-xs font-semibold">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Book Button */}
              <BookingButton doctor={doctor} />
            </div>
          </div>
        </div>

        {/* Availability Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <FaClock className="text-blue-500" />
            <h2 className="text-gray-900 font-bold text-base">
              Available Time Slots
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {doctor.availability?.map((slot, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-semibold text-sm px-4 py-2 rounded-xl border border-blue-100"
              >
                <FaClock className="text-blue-400 text-xs" />
                {slot}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
