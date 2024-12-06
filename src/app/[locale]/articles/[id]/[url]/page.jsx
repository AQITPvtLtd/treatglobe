import React from "react";
import Article from "./Article";

const page = ({ params }) => {
  const { url, id } = params;
  console.log({ url, id });
  return (
    <div>
      <Article id={id} url={url} />
    </div>
  );
};

export default page;
