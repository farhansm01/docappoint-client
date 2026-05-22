"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import ConfirmModal from "./ConfirmModal";
import UpdateBookingModal from "./UpdateBookingModal";

export default function MyBookings({ userEmail }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const fetchBookings = async () => {
    const res = await fetch(
      `http://localhost:5000/appointments?email=${userEmail}`,
    );
    const data = await res.json();
    setBookings(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, [userEmail]);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/appointments/${deleteId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setBookings((prev) => prev.filter((b) => b._id !== deleteId));
      toast.success("Appointment deleted successfully!");
    } else {
      toast.error("Failed to delete appointment.");
    }
    setDeleteId(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-base">No bookings found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-gray-900 font-bold text-base">
                  {booking.doctorName}
                </h3>
                <p className="text-blue-600 text-xs font-medium mt-0.5">
                  {booking.patientName}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedBooking(booking)}
                  className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-all"
                >
                  <FaEdit className="text-xs" />
                </button>
                <button
                  onClick={() => setDeleteId(booking._id)}
                  className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-100 transition-all"
                >
                  <FaTrash className="text-xs" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { label: "Email", value: booking.userEmail },
                { label: "Gender", value: booking.gender },
                { label: "Phone", value: booking.phone },
                { label: "Date", value: booking.appointmentDate },
                { label: "Time", value: booking.appointmentTime },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="text-gray-400 w-16 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedBooking && (
        <UpdateBookingModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onUpdate={(updated) => {
            setBookings((prev) =>
              prev.map((b) => (b._id === updated._id ? updated : b)),
            );
            setSelectedBooking(null);
          }}
        />
      )}

      {deleteId && (
        <ConfirmModal
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </>
  );
}
