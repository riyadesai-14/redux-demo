import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/posts/postsActions";

function HooksPostContainer() {
  const dispatch = useDispatch();

  const post = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {post.map((data) => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
}

export default HooksPostContainer;
