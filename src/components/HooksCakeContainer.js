import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <>

    <h3>Num of cakes - {numOfCakes}</h3>
    <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </>
  )
}


export default HooksCakeContainer