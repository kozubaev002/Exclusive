import React from 'react'

function Green({click}) {
  return (
    <div>
      <button onClick={() => click("Green")}>Green</button>
    </div>
  )
}

export default Green
