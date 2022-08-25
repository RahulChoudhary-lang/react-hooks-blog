// import { useState } from "react";
import { firestore } from "../firebase";
import { useFromInput } from "./hooks";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 33px;
  // background: red;
  background: ${(props) => (props.primary ? "red" : "blue")};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
`;

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

        <StyledButton primary>Create Post</StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;
