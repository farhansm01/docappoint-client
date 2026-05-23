"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BookingModal from "./BookingModal";

export default function BookingButton({ doctor }) {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!session?.user) {
      router.push("/login");
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
      >
        <span className="flex items-center justify-center gap-2">
          Book Appointment <FaArrowRight className="text-xs" />
        </span>
      </button>
      {showModal && (
        <BookingModal doctor={doctor} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
