"use client";
import MyBookings from "@/components/MyBookings";
import MyProfile from "@/components/MyProfile";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("bookings");

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back, {session.user.name}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`pb-3 px-4 font-semibold text-sm transition-all duration-200 border-b-2 ${
              activeTab === "bookings"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            My Bookings
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-3 px-4 font-semibold text-sm transition-all duration-200 border-b-2 ${
              activeTab === "profile"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            My Profile
          </button>
        </div>

        {/* Content */}
        {activeTab === "bookings" ? (
          <MyBookings userEmail={session.user.email} />
        ) : (
          <MyProfile user={session.user} />
        )}
      </div>
    </div>
  );
}
