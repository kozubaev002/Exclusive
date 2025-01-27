import React from 'react'
import { useDispatch} from 'react-redux'
import { changeColor } from '../../Redux/count/colorSlice'

function Red({click}) {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(changeColor("red"))}>Red Redux</button>
      <button onClick={() => click("red")}>Red</button>
    </div>
  )
}

export default Red
