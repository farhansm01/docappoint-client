"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

export default function MyProfile({ user }) {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      image: user.image,
    },
  });

  const handleUpdate = async (data) => {
    setLoading(true);
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Failed to update profile");
      return;
    }

    setCurrentUser((prev) => ({ ...prev, name: data.name, image: data.image }));
    toast.success("Profile updated successfully!");
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-blue-100/40 max-w-md">
        {/* Avatar */}
        <div className="flex items-center gap-5 mb-6">
          <img
            src={currentUser.image || "/default-avatar.png"}
            alt={currentUser.name}
            referrerPolicy="no-referrer"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
          />
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">
              {currentUser.name}
            </h2>
            <p className="text-slate-400 text-sm">{currentUser.email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { label: "Full Name", value: currentUser.name },
            { label: "Email Address", value: currentUser.email },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gradient-to-br from-[#f0f7ff] to-[#e8f5f0] rounded-2xl px-4 py-3 border border-slate-100"
            >
              <p className="text-slate-400 text-xs font-medium mb-0.5">
                {item.label}
              </p>
              <p className="text-slate-800 text-sm font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm py-3 rounded-2xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
        >
          Update Profile
        </button>
      </div>

      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/40 border border-slate-100 w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-300 hover:text-slate-500 transition-colors"
            >
              <FaTimes />
            </button>

            <h2 className="text-lg font-extrabold text-slate-800 mb-5">
              Update Profile
            </h2>

            <form
              onSubmit={handleSubmit(handleUpdate)}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full border-2 border-slate-200 focus:border-blue-300 focus:bg-blue-50/30 rounded-2xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none transition-all duration-200"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 mb-1 block">
                  Photo URL
                </label>
                <input
                  {...register("image", { required: "Photo URL is required" })}
                  type="url"
                  className="w-full border-2 border-slate-200 focus:border-blue-300 focus:bg-blue-50/30 rounded-2xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none transition-all duration-200"
                />
                {errors.image && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm py-3 rounded-2xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:translate-y-0"
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
