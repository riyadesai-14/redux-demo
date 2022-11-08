import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/UserActions";

function UserContainer({ useData, fetchUsers }) {
  console.log(useData, "------------------");
  useEffect(() => {
    fetchUsers();
  }, []);

  return useData.loading ? (
    <h2>Loading</h2>
  ) : useData.error ? (
    <h2>{useData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <>
      {useData &&
        useData.users &&
        useData.users.map(user => <p> {user.name}</p>)
      }
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
