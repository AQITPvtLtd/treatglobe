import React from "react";
import SubSpeciality from "./SubSpeciality";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <SubSpeciality id={id} />
    </div>
  );
};

export default page;
