import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import TopDoctors from "@/components/TopDoctors";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Banner/>
      <TopDoctors />
      <WhyChooseUs/>
      <FAQ />
    </div>
  );
}
