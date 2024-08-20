import React from "react";
// export const revalidate = 5;
export const fetchCache = "force-no-store";
// export const dynamic = "force-dynamic";
const page = async () => {
  const newsJson = await fetch("http://localhost:5000/news");

  const news = await newsJson.json();

  const newsJson2 = await fetch("http://localhost:5000/posts");
  const news2 = await newsJson2.json();

  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const newsJson = await fetch("http://localhost:5000/news");

  //       const news = await newsJson.json();
  //       setData(news);
  //     };
  //     fetchData();
  //   }, []);

  return <div>page</div>;
};

export default page;
