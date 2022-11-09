import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./postsTypes";

export const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// export const fetchPosts = (number) => {
//     console.log(number);
//   return async (dispatch) => {
//     dispatch(fetchPostRequest());
//     return await axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${number}`)
//       .then((response) => {
//         console.log(response, "------------");
//         dispatch(fetchPostSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(fetchPostFailure(error.message));
//       });
//   };
// };

export const fetchUserId = (number) => {
  const max = number * 10;
  const min = max - 10;
  const num = Math.floor(Math.random() * (max - min) + min);

  return async (dispatch) => {
    dispatch(fetchPostRequest());
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${num}`)
      .then((response) => {
        console.log(response, "------------");
        dispatch(fetchPostSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPostFailure(error.message));
      });
  };
};
