import React from "react";
import { buyCake } from '../redux/cakes/cakeActions';
import { connect } from "react-redux";

function CakeContainer({numOfCakes}) {
  return (
    <>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </>
  );
}

const mapStateToProps = (abc) => {
  console.log(abc,"------");
  return {
    numOfCakes: abc.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch,"------");
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
