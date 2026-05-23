import DoctorCard from "./DoctorCard";

async function getTopDoctors() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/top`, {
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
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            Top Rated
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Meet Our Best Doctors
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
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
