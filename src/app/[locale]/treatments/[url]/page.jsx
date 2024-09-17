import React from "react";
import SubSpeciality from "./SubSpeciality";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <SubSpeciality id={url} />
    </div>
  );
};

export default page;
