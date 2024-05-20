import Banner from "@/components/homepage/Banner";
import HealthRisk from "@/components/homepage/HealthRisk";
import MissionVision from "@/components/homepage/MissionVision";
import WhyChoose from "@/components/homepage/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <MissionVision />
      <HealthRisk />
      <WhyChoose />
    </div>
  );
}
