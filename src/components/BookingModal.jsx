"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

export default function BookingModal({ doctor, onClose }) {
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBooking = async (data) => {
    setLoading(true);
    const appointment = {
      userEmail: session?.user?.email,
      doctorName: doctor.name,
      patientName: data.patientName,
      gender: data.gender,
      phone: data.phone,
      appointmentDate: data.appointmentDate,
      appointmentTime: data.appointmentTime,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment),
      },
    );

    setLoading(false);

    if (res.ok) {
      toast.success("Appointment booked successfully!");
      onClose();
    } else {
      toast.error("Failed to book appointment. Try again.");
    }
  };

  const inputClass =
    "w-full border-2 border-slate-200 focus:border-blue-300 focus:bg-blue-50/30 rounded-xl px-3 py-2 text-sm text-slate-700 placeholder-slate-300 focus:outline-none transition-all duration-200 bg-transparent";
  const labelClass = "text-xs font-bold text-slate-500 mb-1 block";
  const errorClass = "text-red-500 text-xs mt-0.5";

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/40 border border-slate-100 w-full max-w-md p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-300 hover:text-slate-500 transition-colors"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="mb-5">
          <h2 className="text-lg font-extrabold text-slate-800">
            Book Appointment
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">with {doctor.name}</p>
        </div>

        <form
          onSubmit={handleSubmit(handleBooking)}
          className="flex flex-col gap-3"
        >
          {/* Email + Doctor Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>User Email</label>
              <input
                type="email"
                value={session?.user?.email || ""}
                readOnly
                className="w-full border-2 border-slate-100 rounded-xl px-3 py-2 text-xs text-slate-400 bg-slate-50 focus:outline-none cursor-not-allowed"
              />
            </div>
            <div>
              <label className={labelClass}>Doctor Name</label>
              <input
                type="text"
                value={doctor.name}
                readOnly
                className="w-full border-2 border-slate-100 rounded-xl px-3 py-2 text-xs text-slate-400 bg-slate-50 focus:outline-none cursor-not-allowed"
              />
            </div>
          </div>

          {/* Patient Name */}
          <div>
            <label className={labelClass}>
              Patient Name <span className="text-red-400">*</span>
            </label>
            <input
              {...register("patientName", { required: "Required" })}
              type="text"
              placeholder="Full name"
              className={inputClass}
            />
            {errors.patientName && (
              <p className={errorClass}>{errors.patientName.message}</p>
            )}
          </div>

          {/* Gender + Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>
                Gender <span className="text-red-400">*</span>
              </label>
              <select
                {...register("gender", { required: "Required" })}
                className={inputClass}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className={errorClass}>{errors.gender.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                {...register("phone", { required: "Required" })}
                type="tel"
                placeholder="01XXXXXXXXX"
                className={inputClass}
              />
              {errors.phone && (
                <p className={errorClass}>{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>
                Date <span className="text-red-400">*</span>
              </label>
              <input
                {...register("appointmentDate", { required: "Required" })}
                type="date"
                className={inputClass}
              />
              {errors.appointmentDate && (
                <p className={errorClass}>{errors.appointmentDate.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>
                Time <span className="text-red-400">*</span>
              </label>
              <input
                {...register("appointmentTime", { required: "Required" })}
                type="time"
                className={inputClass}
              />
              {errors.appointmentTime && (
                <p className={errorClass}>{errors.appointmentTime.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm py-3 rounded-2xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:translate-y-0 mt-1"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
