import React from "react";
import { doctordata } from "@/data/doctordata";
import Doctor from "./Doctor";
const page = ({ params }) => {
  const did = params.id;
  const doctor = doctordata.find((d) => d.id == did);
  return (
    <div>
      <Doctor doctor={doctor} />
    </div>
  );
};

export default page;
