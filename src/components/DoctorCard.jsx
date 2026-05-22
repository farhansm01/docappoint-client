"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function DoctorCard({ doctor }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleViewDetails = () => {
    if (session?.user) {
      router.push(`/appointments/${doctor._id}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-52 object-cover object-[center_20%]"
        />
        <span className="absolute top-3 right-3 bg-white text-yellow-500 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
          <FaStar className="text-yellow-400" />
          {doctor.rating}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-gray-900 font-bold text-lg mb-0.5">
          {doctor.name}
        </h3>
        <p className="text-blue-600 font-semibold text-sm mb-3">
          {doctor.specialty}
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {doctor.description}
        </p>

        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaMapMarkerAlt className="text-blue-400 shrink-0" />
            <span>{doctor.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaClock className="text-blue-400 shrink-0" />
            <span>{doctor.experience} experience</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <p className="text-gray-400 text-xs">Consultation</p>
            <p className="text-gray-900 font-bold text-base">৳{doctor.fee}</p>
          </div>
          <button
            onClick={handleViewDetails}
            className="bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
