import React from "react";
import Image from "next/image";
const MissionVision = () => {
  return (
    <div>
      <div className="mt-5 relative">
        <div className="bg-primary pb-20">
          <h1 className=" font-bold text-5xl text-white mx-10 text-center pt-10 font-serif">
            Welcome to Treat Globe
          </h1>
          <div className="grid grid-cols-2 m-10">
            <div className="text-white border-white border rounded-xl p-8 mr-5 mb-10 shadow-secondary shadow-lg">
              <h1 className="text-center text-2xl font-semibold mb-2">
                Our Mission
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident accusantium consectetur aspernatur consequatur commodi
                aliquid, quidem esse culpa ab temporibus numquam corrupti odit
                quas distinctio est nesciunt explicabo reiciendis mollitia?
              </p>
            </div>
            <div className="text-white border-white border rounded-xl p-8 ml-5 mb-10 shadow-secondary shadow-lg">
              <h1 className="text-center text-2xl font-semibold mb-2">
                Our Vision
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident accusantium consectetur aspernatur consequatur commodi
                aliquid, quidem esse culpa ab temporibus numquam corrupti odit
                quas distinctio est nesciunt explicabo reiciendis mollitia?
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 col-start-1 col-span-3 mt-[350px] flex justify-center">
          <Image
            src="/missionVision/missionvision.png"
            height={1000}
            width={10000}
            alt="missionvision"
            className="h-[300px] w-[1200px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
