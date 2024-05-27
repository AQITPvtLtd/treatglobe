import Banner from "@/components/homepage/Banner";
import HealthRisk from "@/components/homepage/HealthRisk";
import Hospitals from "@/components/homepage/Hospitals";
import MissionVision from "@/components/homepage/MissionVision";
import Treatments from "@/components/homepage/Treatments";
import WhyChoose from "@/components/homepage/WhyChoose";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
export default function Home() {
  return (
    <div>
      <Banner />
      <MissionVision />
      <WhyChooseUs />
      <Treatments />
      {/* <Hospitals /> */}
    </div>
  );
}
