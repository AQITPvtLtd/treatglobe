import React from "react";
import Hospital from "./Hospital";
const page = ({ params }) => {
  const id = params.id;
  return (
    <div className="mt-[170px]">
      <Hospital id={id} />
    </div>
  );
};

export default page;
