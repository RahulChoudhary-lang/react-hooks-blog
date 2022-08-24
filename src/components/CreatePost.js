// import { useState } from "react";
import { firestore } from "../firebase";
import { useFromInput } from "./hooks";

function CreatePost() {
  const title = useFromInput("");
  const subTitle = useFromInput("");
  const content = useFromInput("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("title", title);
    console.log("subTitle", subTitle);
    console.log("content", content);

    firestore.collection("posts").add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>
        <div className="form-field">
          <label>Sub-Title</label>
          <input {...subTitle} />
        </div>
        <div className="form-field">
          <label>content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
