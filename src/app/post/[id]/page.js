import React from "react";

const Post = ({ params }) => {
  console.log(params, "params");
  return <h1>Post {params.id}</h1>;
};

export default Post;
