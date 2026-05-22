export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center">
        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-500 text-2xl">🗑️</span>
        </div>
        <h2 className="text-gray-900 font-bold text-lg mb-2">
          Delete Appointment
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Are you sure you want to delete this appointment? This action cannot
          be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 border border-gray-200 text-gray-700 font-semibold text-sm py-2.5 rounded-xl hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-red-600 transition-all"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
