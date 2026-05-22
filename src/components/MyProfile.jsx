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
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm max-w-md">
        {/* Avatar */}
        <div className="flex items-center gap-5 mb-6">
          <img
            src={currentUser.image || "/default-avatar.png"}
            alt={currentUser.name}
            referrerPolicy="no-referrer"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {currentUser.name}
            </h2>
            <p className="text-gray-500 text-sm">{currentUser.email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { label: "Full Name", value: currentUser.name },
            { label: "Email Address", value: currentUser.email },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
            >
              <p className="text-gray-400 text-xs font-medium mb-0.5">
                {item.label}
              </p>
              <p className="text-gray-900 text-sm font-semibold">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-blue-600 text-white font-bold text-sm py-3 rounded-xl hover:bg-blue-700 transition-all duration-200"
        >
          Update Profile
        </button>
      </div>

      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>

            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Update Profile
            </h2>

            <form
              onSubmit={handleSubmit(handleUpdate)}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Photo URL
                </label>
                <input
                  {...register("image", { required: "Photo URL is required" })}
                  type="url"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
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
                className="w-full bg-blue-600 text-white font-bold text-sm py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 disabled:opacity-60"
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
