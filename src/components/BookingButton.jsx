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
        className="w-full bg-blue-600 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 transition-all duration-200"
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
