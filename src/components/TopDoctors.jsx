import DoctorCard from "./DoctorCard";

async function getTopDoctors() {
  const res = await fetch("http://localhost:5000/doctors/top", {
    cache: "no-store",
  });
  return res.json();
}

export default async function TopDoctors() {
  const doctors = await getTopDoctors();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Top Rated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Best Doctors
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Handpicked specialists with the highest patient ratings and proven
            expertise across multiple disciplines.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
