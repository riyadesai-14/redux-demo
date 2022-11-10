import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchUserId } from "../redux/user/UserActions";
import { useSelector, useDispatch } from "react-redux";

function About() {
  const location = useLocation();
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserId(location.state));
  }, []);
  console.log(location);
  return (
    <div>
      <>
        <b>Id : </b> {user.id}
      </>
      <br />
      <>
        <b>Name : </b> {user.name}
      </>
      <br />
      <>
        <b>Username : </b> {user.username}
      </>
      <br />
      <>
        <b>Email : </b> {user.email}
      </>
      {/* <>
        <b>user city : </b> {user?.address?.street}
      </> */}
      <br />
    </div>
  );
}

export default About;
