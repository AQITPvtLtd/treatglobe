import Banner from "@/components/homepage/Banner";
import HealthRisk from "@/components/homepage/HealthRisk";
import Hospitals from "@/components/homepage/Hospitals";
import MissionVision from "@/components/homepage/MissionVision";
import Numbers from "@/components/homepage/Numbers";
import Treatments from "@/components/homepage/Treatments";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
export default function Home() {
  return (
    <div>
      <Banner />
      <MissionVision />
      <WhyChooseUs />
      <Treatments />
      <Hospitals />
      <Numbers />
    </div>
  );
}
