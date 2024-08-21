import React from "react";
import styles from "./form.module.css";
import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dumhajjym",
  api_key: "765439877984324",
  api_secret: "9FAf_eunY2ORUiZRBKdqQJmSa88",
});

const AddPost = () => {
  const create = async (formData) => {
    "use server";

    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const imageRes = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { tags: ["nextjs-server-actions-upload-sneakers"] },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });

    const title = formData.get("title");
    const description = formData.get("description");
    const client = await clientPromise;
    const db = client.db();
    await db
      .collection("posts")
      .insertOne({ title, description, imageSrc: imageRes.url });

    revalidatePath("/post");
    redirect("/post");
  };

  return (
    <form className={styles.form} action={create}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title:</label>
        <input className={styles.input} type="text" name="title" id="title" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea
          className={styles.textarea}
          type="text"
          name="description"
          id="description"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="image">Title:</label>
        <input
          className={styles.fileInput}
          type="file"
          name="image"
          id="image"
        />
      </div>

      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default AddPost;

// "use client";

// import React, { useState } from "react";
// import styles from "./form.module.css";
// const AddPost = () => {
//   const [formData, setFormData] = useState({});
//   const handleChange = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;

//     setFormData((formData) => ({ ...formData, [key]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:3000/api/post", {
//       method: "POST",
//       headers: {
//         Accept: " application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     console.log(res);
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <div className={styles.formGroup}>
//         <label htmlFor="title">Title:</label>
//         <input
//           onChange={handleChange}
//           className={styles.input}
//           type="text"
//           name="title"
//           id="title"
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           onChange={handleChange}
//           className={styles.textarea}
//           type="text"
//           name="description"
//           id="description"
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="image">Title:</label>
//         <input
//           // onChange={handleChange}
//           className={styles.fileInput}
//           type="file"
//           name="image"
//           id="image"
//         />
//       </div>

//       <button className={styles.button}>Submit</button>
//     </form>
//   );
// };

// export default AddPost;
