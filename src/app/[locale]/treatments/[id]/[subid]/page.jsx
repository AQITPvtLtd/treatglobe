import React from "react";
import Treatment from "./Treatment";

const page = ({ params }) => {
  const subid = params.subid;
  const id = params.id;
  return (
    <div>
      <Treatment subid={subid} id={id}/>
    </div>
  );
};

export default page;
