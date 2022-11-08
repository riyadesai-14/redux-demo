import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";
import { connect } from "react-redux";

function IceCreamContainer(props){
    return(
        <>
        <h4>Number of ice-creams - {props.numOfIceCream}</h4>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfIceCream: state.iceCream.numOfIceCream,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        buyIceCream: () => dispatch(buyIceCream()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)