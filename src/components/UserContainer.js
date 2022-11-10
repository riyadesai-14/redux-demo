import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/UserActions";
import { useNavigate } from "react-router-dom";


import './user.css'

function UserContainer({ useData, fetchUsers }) {
  console.log(useData, "------------------");
  useEffect(() => {
    fetchUsers();
  }, []);

  const navigate = useNavigate();


  return useData.loading ? (
    <h2>Loading</h2>
  ) : useData.error ? (
    <h2>{useData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <>
      <tr>
    <th className="th">Name</th>
    <th  className="th">Username</th>
    <th  className="th">Email</th>
    <th  className="th">City</th>
    <th  className="th">View Button</th>
  </tr>
      {useData &&
        useData.users &&
        useData.users.map(user =>
          <tr>
          <td className="td">{user.name}</td>
          <td className="td"> {user.username}</td>
          <td className="td">{user.email}</td>
          <td className="td">{user.address.city}</td>
          <td className="td"><button onClick={() => navigate(`/about/${user.id}`, { state: user.id })}>View</button></td>
        </tr>
        )
      }
         


      </>
     <>
    

     </>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    useData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
