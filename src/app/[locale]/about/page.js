import MissionVision from "@/components/homepage/MissionVision";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="lg:mt-[150px] -mt-[550px]">
      <MissionVision />
      <WhyChooseUs />
    </div>
  );
};

export default page;
