import React from 'react'

function Pink({click}) {
  return (
    <div>
      <button onClick={() => click("pink")}>Pink</button>
    </div>
  )
}

export default Pink
