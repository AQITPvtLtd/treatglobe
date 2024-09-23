import React from "react";
import Article from "./Article";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <Article url={url} />
    </div>
  );
};

export default page;
