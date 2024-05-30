import React from "react";
import Image from "next/image";
const MissionVision = () => {
  return (
    <div>
      <div className="lg:mt-5 mt-[750px] relative">
        <div className="bg-primary pb-20">
          <h1 className=" font-bold text-5xl text-white mx-10 text-center pt-10 font-serif">
            Welcome to Treat Globe
          </h1>
          <div className="lg:grid grid-cols-2 m-10">
            <div className="text-white border-white border rounded-xl p-8 lg:mr-5 mb-10 shadow-secondary shadow-lg">
              <h1 className="text-center text-2xl font-semibold mb-2">
                Our Mission
              </h1>
              <p>
                Our mission is to provide accessible, high-quality medical care
                globally by connecting patients with advanced healthcare
                providers and state-of-the-art facilities. We strive to ensure a
                seamless and supportive medical tourism experience, offering
                personalized care, transparent processes, and exceptional value.
              </p>
            </div>
            <div className="text-white border-white border rounded-xl p-8 lg:ml-5 mb-10 shadow-secondary shadow-lg">
              <h1 className="text-center text-2xl font-semibold mb-2">
                Our Vision
              </h1>
              <p>
                {/* Our vision is to be the leading medical tourism facilitator,
                known for transforming healthcare journeys through innovation
                and compassion. We aim to bridge the gap between patients and
                world-class medical services, enhancing health and well-being
                while promoting global healthcare excellence. */}
                A world where high-quality healthcare is accessible and
                affordable to everyone, regardless of location.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 col-start-1 col-span-3 lg:mt-[400px] mt-[1050px] flex justify-center">
          <Image
            src="/missionVision/missionvision.png"
            height={1000}
            width={10000}
            alt="missionvision"
            className="h-[200px] lg:h-[300px] w-[1200px] rounded-xl object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
