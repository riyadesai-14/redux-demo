import React from "react";
import { buyCake } from '../redux/cakes/cakeActions';
import { connect } from "react-redux";
import { useState } from 'react';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
