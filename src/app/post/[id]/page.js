import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import React from "react";

const Post = async ({ params }) => {
  // if (params.id > 50) {
  //   notFound();
  // }

  try {
    const client = await clientPromise;
    const db = client.db();
    const news = await db.collection("news").find({ id: params.id }).toArray();

    if (!news.length) {
      throw Error("not found");
    }
  } catch (error) {
    notFound();
    // redirect("/");
  }

  return <h1>Post {params.id}</h1>;
};

export default Post;
