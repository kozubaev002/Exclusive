import React from 'react'
import { useSelector } from 'react-redux'

function Info({count}) {
  const {timer} = useSelector((state) => state.check)
  return (
    <div>
      <h1>{count}</h1>
      <h2>{timer}</h2>
    </div>
  )
}

export default Info
