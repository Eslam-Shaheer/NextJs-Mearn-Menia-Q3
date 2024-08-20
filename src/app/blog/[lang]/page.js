import React from "react";

const page = async ({ params }) => {
  const { lang } = params;
  // const postsJson = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?lang=${lang}`
  // );

  // const posts = await postsJson.json();
  // console.log(posts, "posts");
  return <div>{lang}</div>;
};

export default page;
