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
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-52 object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
        />
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

        {/* Rating badge */}
        <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md">
          <FaStar className="text-yellow-400 text-[10px]" />
          {doctor.rating}
        </span>

        {/* Specialty badge */}
        <span className="absolute bottom-3 left-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
          {doctor.specialty}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-slate-800 font-extrabold text-lg mb-1">
          {doctor.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {doctor.description}
        </p>

        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <FaMapMarkerAlt className="text-teal-500 shrink-0 text-xs" />
            <span>{doctor.location}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <FaClock className="text-blue-400 shrink-0 text-xs" />
            <span>{doctor.experience} experience</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div>
            <p className="text-slate-400 text-xs font-medium">Consultation</p>
            <p className="text-slate-800 font-extrabold text-lg">
              ৳{doctor.fee}
            </p>
          </div>
          <button
            onClick={handleViewDetails}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-teal-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
