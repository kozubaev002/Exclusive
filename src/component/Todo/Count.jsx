import React from 'react'
import { useDispatch } from 'react-redux'
import { addTimer, timer } from '../../Redux/count/countSlice'



function Count({clicked, decrement}) {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={clicked}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => dispatch(addTimer())}>Click Redux</button>
      <button onClick={() => dispatch(timer())}>click</button>
    </div>
  )
}

export default Count
