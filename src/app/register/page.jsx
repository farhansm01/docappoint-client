"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaImage,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    setLoading(true);
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.photoURL,
      callbackURL: "/",
    });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    if (res) {
      toast.success("Account created successfully!");
      router.push("/login");
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f5f0] flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-100/40 w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-slate-800 mb-1">
            Register
          </h1>
          <p className="text-slate-400 text-sm">
            Create your DocAppoint account
          </p>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 text-slate-700 font-semibold text-sm py-3 rounded-2xl transition-all duration-200 mb-6"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-slate-100" />
          <span className="text-slate-300 text-xs font-medium">
            or continue with email
          </span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <fieldset
            className={`border-2 rounded-2xl px-4 pt-2 pb-3 transition-all duration-200 ${errors.name ? "border-red-200 bg-red-50/30" : "border-slate-200 focus-within:border-blue-300 focus-within:bg-blue-50/30"}`}
          >
            <legend className="text-xs font-bold text-slate-500 px-1">
              Full Name
            </legend>
            <div className="relative">
              <FaUser className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-6 py-1 text-sm text-slate-700 placeholder-slate-300 focus:outline-none bg-transparent"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </fieldset>

          {/* Email */}
          <fieldset
            className={`border-2 rounded-2xl px-4 pt-2 pb-3 transition-all duration-200 ${errors.email ? "border-red-200 bg-red-50/30" : "border-slate-200 focus-within:border-blue-300 focus-within:bg-blue-50/30"}`}
          >
            <legend className="text-xs font-bold text-slate-500 px-1">
              Email
            </legend>
            <div className="relative">
              <FaEnvelope className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full pl-6 py-1 text-sm text-slate-700 placeholder-slate-300 focus:outline-none bg-transparent"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Photo URL */}
          <fieldset
            className={`border-2 rounded-2xl px-4 pt-2 pb-3 transition-all duration-200 ${errors.photoURL ? "border-red-200 bg-red-50/30" : "border-slate-200 focus-within:border-blue-300 focus-within:bg-blue-50/30"}`}
          >
            <legend className="text-xs font-bold text-slate-500 px-1">
              Photo URL
            </legend>
            <div className="relative">
              <FaImage className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
              <input
                {...register("photoURL", { required: "Photo URL is required" })}
                type="url"
                placeholder="Enter your photo URL"
                className="w-full pl-6 py-1 text-sm text-slate-700 placeholder-slate-300 focus:outline-none bg-transparent"
              />
            </div>
            {errors.photoURL && (
              <p className="text-red-500 text-xs mt-1">
                {errors.photoURL.message}
              </p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset
            className={`border-2 rounded-2xl px-4 pt-2 pb-3 transition-all duration-200 ${errors.password ? "border-red-200 bg-red-50/30" : "border-slate-200 focus-within:border-blue-300 focus-within:bg-blue-50/30"}`}
          >
            <legend className="text-xs font-bold text-slate-500 px-1">
              Password
            </legend>
            <div className="relative">
              <FaLock className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  validate: {
                    hasUppercase: (v) =>
                      /[A-Z]/.test(v) ||
                      "Must contain at least 1 uppercase letter",
                    hasLowercase: (v) =>
                      /[a-z]/.test(v) ||
                      "Must contain at least 1 lowercase letter",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-6 pr-8 py-1 text-sm text-slate-700 placeholder-slate-300 focus:outline-none bg-transparent"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300 cursor-pointer hover:text-slate-500 transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:translate-y-0 mt-1"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
