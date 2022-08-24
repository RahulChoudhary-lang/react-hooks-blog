import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log("posts", posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Rahul</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <h3>{post.subTitle}</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
