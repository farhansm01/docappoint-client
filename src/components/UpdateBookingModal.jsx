"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

export default function UpdateBookingModal({ booking, onClose, onUpdate }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      patientName: booking.patientName,
      gender: booking.gender,
      phone: booking.phone,
      appointmentDate: booking.appointmentDate,
      appointmentTime: booking.appointmentTime,
    },
  });

  const handleUpdate = async (data) => {
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${booking._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    setLoading(false);

    if (res.ok) {
      toast.success("Appointment updated successfully!");
      onUpdate({ ...booking, ...data });
    } else {
      toast.error("Failed to update appointment.");
    }
  };

  const inputClass =
    "w-full border-2 border-slate-200 focus:border-blue-300 focus:bg-blue-50/30 rounded-xl px-3 py-2.5 text-sm text-slate-700 placeholder-slate-300 focus:outline-none transition-all duration-200 bg-transparent";
  const labelClass = "text-xs font-bold text-slate-500 mb-1 block";

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/40 border border-slate-100 w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-300 hover:text-slate-500 transition-colors"
        >
          <FaTimes />
        </button>

        <div className="mb-5">
          <h2 className="text-lg font-extrabold text-slate-800">
            Update Appointment
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">{booking.doctorName}</p>
        </div>

        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                value={booking.userEmail}
                readOnly
                className="w-full border-2 border-slate-100 rounded-xl px-3 py-2 text-xs text-slate-400 bg-slate-50 cursor-not-allowed focus:outline-none"
              />
            </div>
            <div>
              <label className={labelClass}>Doctor</label>
              <input
                type="text"
                value={booking.doctorName}
                readOnly
                className="w-full border-2 border-slate-100 rounded-xl px-3 py-2 text-xs text-slate-400 bg-slate-50 cursor-not-allowed focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Patient Name <span className="text-red-400">*</span>
            </label>
            <input
              {...register("patientName", { required: "Required" })}
              type="text"
              className={inputClass}
            />
            {errors.patientName && (
              <p className="text-red-500 text-xs mt-0.5">
                {errors.patientName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>
                Gender <span className="text-red-400">*</span>
              </label>
              <select
                {...register("gender", { required: "Required" })}
                className={inputClass}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                {...register("phone", { required: "Required" })}
                type="tel"
                className={inputClass}
              />
            </div>
          </div>

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
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm py-3 rounded-2xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200 disabled:opacity-60 disabled:translate-y-0"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
