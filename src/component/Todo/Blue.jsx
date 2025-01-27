import React from 'react'

function Blue({click}) {
  return (
    <div>
      <button onClick={() => click("blue") }>Blue</button>
    </div>
  )
}

export default Blue
