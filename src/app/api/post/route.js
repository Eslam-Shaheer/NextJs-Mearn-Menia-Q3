import clientPromise from "@/lib/mongodb";
import { cookies } from "next/headers";

export async function GET(request) {
  //   console.log(request.nextUrl.searchParams);
  const client = await clientPromise;
  const db = client.db();
  const news = await db.collection("news").find({}).toArray();

  return new Response(JSON.stringify(news), { status: 200 });
}

export async function POST(request) {
  const data = await request.json();

  const client = await clientPromise;
  const db = client.db();
  await db.collection("posts").insertOne(data);

  return new Response("success", { status: 201 });
}
export async function PUT(request) {}
