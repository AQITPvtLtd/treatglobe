import React from "react";
import { doctordata } from "@/data/doctordata";
import Doctor from "./Doctor";
const page = ({ params }) => {
  const did = params.id;
  const doctor = doctordata.find((d) => d.id == did);
  const url = process.env.BASE_URL;
  return (
    <div>
      <Doctor doctor={doctor} url={url} />
    </div>
  );
};

export default page;
