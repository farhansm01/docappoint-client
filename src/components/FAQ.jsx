"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Simply browse our list of doctors, click on View Details, and hit the Book Appointment button. Fill in your details and confirm — done in under 2 minutes.",
  },
  {
    q: "Do I need to create an account to book?",
    a: "Yes, you need to be logged in to book an appointment. This ensures your booking history and details are saved securely under your profile.",
  },
  {
    q: "Can I cancel or reschedule my appointment?",
    a: "Yes. Go to your Dashboard under My Bookings, and you can update or delete any existing appointment at any time.",
  },
  {
    q: "Are the doctors on this platform verified?",
    a: "Absolutely. Every doctor listed on DocAppoint goes through a strict verification process including credential checks and license validation.",
  },
  {
    q: "Is my personal information secure?",
    a: "Yes. We use industry-standard encryption to protect all your personal and medical data. We never share your information with third parties.",
  },
  {
    q: "What specialties are available?",
    a: "We currently offer 20+ specialties including Cardiology, Neurology, Dermatology, Orthopedics, Pediatrics, Psychiatry, and more.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Have questions? We have answers. If you need more help, reach out to
            our support team.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                openIndex === i
                  ? "border-blue-200 shadow-md shadow-blue-100/60"
                  : "border-slate-100 hover:border-blue-100"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50/80 transition-colors duration-200"
              >
                <span className="text-slate-700 font-semibold text-sm pr-4">
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 pt-1 bg-gradient-to-br from-blue-50/30 to-teal-50/20">
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
