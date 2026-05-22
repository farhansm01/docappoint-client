import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DocAppoint — Doctor Appointment Booking",
    template: "%s | DocAppoint",
  },
  description:
    "Book appointments with top-rated doctors easily. Browse specialists, check availability, and manage your bookings on DocAppoint.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
