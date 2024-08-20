import React from "react";

const page = async ({ params }) => {
  const newsJson = await fetch(
    `api/new${
      params.slug ? (params.slug[0] ? `?year${params.slug[0]}` : "") : ""
    }`
  );
  return <div>page</div>;
};

export default page;
