import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserId } from "../redux/posts/postsActions";

function HooksPostContainer() {
  // const [postId, setPostId] = useState(1)
  const [userID, setUserId] = useState(1);

  const dispatch = useDispatch();

  const post = useSelector((state) => state.post.posts);
  console.log(post);
  const loading = useSelector((state) => state.post.loading);

  //   useEffect(() => {
  //     dispatch(fetchPosts());
  //   }, []);

  
  return (
    <div>
      <input
        type="text"
        value={userID}
        onChange={(e) => setUserId(e.target.value)}
      ></input>
      <input type="text" value={userID * 10} disabled></input>
      <button onClick={() => dispatch(fetchUserId(userID))}>
        Buy {userID} posts
      </button>
      {loading && <h1>Loading...</h1>}
      {/* {post.map((data) => (
        <div key={data.id}>{data.title}</div>
      ))} */}
      {/* {
        post.length && post.map(data=> {
        return(
          <div><><b>Post id : </b> {data.id}</><br />
          <><b>Post Title : </b> {data.title}</><br />
          <><b>Post UserId : </b> {data.userId}</><br />
          <><b>Post Body : </b> {data.body}</><br /> <br /> <br /></div>
        )
        })
      } */}
      <br />
      <>{"{"}</>
      <>
        <b>Post id : </b> {post.id}
      </>
      <br />
      <>
        <b>Post Title : </b> {post.title}
      </>
      <br />
      <>
        <b>Post UserId : </b> {post.userId}
      </>
      <br />
      <>
        <b>Post Body : </b> {post.body}
      </>
      <br />
      <>{"}"}</>
    </div>
  );
}

export default HooksPostContainer;
