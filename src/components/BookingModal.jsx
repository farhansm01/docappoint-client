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

    const token = await authClient.getToken();

    const res = await fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(appointment),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Appointment booked successfully!");
      onClose();
    } else {
      toast.error("Failed to book appointment. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900">Book Appointment</h2>
          <p className="text-gray-400 text-xs mt-0.5">with {doctor.name}</p>
        </div>

        <form
          onSubmit={handleSubmit(handleBooking)}
          className="flex flex-col gap-3"
        >
          {/* Email + Doctor Name - side by side */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                User Email
              </label>
              <input
                type="email"
                value={session?.user?.email || ""}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-500 bg-gray-50 focus:outline-none cursor-not-allowed"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Doctor Name
              </label>
              <input
                type="text"
                value={doctor.name}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-500 bg-gray-50 focus:outline-none cursor-not-allowed"
              />
            </div>
          </div>

          {/* Patient Name */}
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">
              Patient Name <span className="text-red-400">*</span>
            </label>
            <input
              {...register("patientName", { required: "Required" })}
              type="text"
              placeholder="Full name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
            />
            {errors.patientName && (
              <p className="text-red-500 text-xs mt-0.5">
                {errors.patientName.message}
              </p>
            )}
          </div>

          {/* Gender + Phone - side by side */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Gender <span className="text-red-400">*</span>
              </label>
              <select
                {...register("gender", { required: "Required" })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all bg-white"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-0.5">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                {...register("phone", { required: "Required" })}
                type="tel"
                placeholder="01XXXXXXXXX"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-0.5">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Date + Time - side by side */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Date <span className="text-red-400">*</span>
              </label>
              <input
                {...register("appointmentDate", { required: "Required" })}
                type="date"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
              />
              {errors.appointmentDate && (
                <p className="text-red-500 text-xs mt-0.5">
                  {errors.appointmentDate.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Time <span className="text-red-400">*</span>
              </label>
              <input
                {...register("appointmentTime", { required: "Required" })}
                type="time"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
              />
              {errors.appointmentTime && (
                <p className="text-red-500 text-xs mt-0.5">
                  {errors.appointmentTime.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold text-sm py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 disabled:opacity-60 mt-1"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
