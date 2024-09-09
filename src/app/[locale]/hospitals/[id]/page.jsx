import React from "react";
import Hospital from "./Hospital";
const page = ({ params }) => {
  const id = params.id;
  return (
    <div className="">
      <Hospital id={id} />
    </div>
  );
};

export default page;
