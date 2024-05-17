import React from "react";
import { GiBrokenBone } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa";
import { GiStomach } from "react-icons/gi";

const data = [
  {
    id: 1,
    icon: <GiBrokenBone />,
    title: "Bone",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores enim fugiat delectus consequuntur consequatur provident hic, quam iusto suscipit veritatis.",
  },
  {
    id: 2,
    icon: <FaHeadSideVirus />,
    title: "Fatigue",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores enim fugiat delectus consequuntur consequatur provident hic, quam iusto suscipit veritatis.",
  },
  {
    id: 3,
    icon: <GiStomach />,
    title: "Acidity",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores enim fugiat delectus consequuntur consequatur provident hic, quam iusto suscipit veritatis.",
  },
];

const HealthRisk = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center font-semibold text-3xl text-secondary">Health Risk</h1>
      <div className="grid md:grid-cols-3 text-center items-center ">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="text-center items-center p-5">
                <div className="flex flex-col items-center"> {/* Center items */}
                  <div className="text-5xl">{item.icon}</div>
                  <div className="text-2xl">{item.title}</div>
                  <div>{item.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HealthRisk;
