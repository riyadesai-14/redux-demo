import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/posts/postsActions";

function HooksPostContainer() {
    const [number, setNumber] = useState(1)
    const dispatch = useDispatch();

  const post = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, []);

  return (
    <div>
    <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
    <button onClick={() => dispatch(fetchPosts(number))}>Buy {number} posts</button>
      {loading && <h1>Loading...</h1>}
      {/* {post.map((data) => (
        <div key={data.id}>{data.title}</div>
      ))} */}
 <br/>
 <>{'{'}</>
 <><b>Post id : </b> {post.id}</><br />
  <><b>Post Title : </b> {post.title}</><br />
  <><b>Post UserId : </b> {post.userId}</><br />
  <><b>Post Body : </b> {post.body}</><br />
  <>{'}'}</>
    </div>
  );
}

export default HooksPostContainer;
