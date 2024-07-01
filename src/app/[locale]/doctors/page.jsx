import React from "react";
import Image from "next/image";
import Link from "next/link";
import { hospitals } from "@/components/hospitals";
import { doctordata } from "../hospitals/doctordata";
import Doctors from "./Doctors";
const page = () => {
  return (
    <div>
      <Doctors />
    </div>
  );
};

export default page;
