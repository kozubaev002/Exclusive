import React from 'react'
import './Input.scss'

function Input() {
  return (
    <div className="input-container">
    <input
      type="text"
      className="custom-input"
      placeholder= "Enter your text"
    />
  </div>
  )
}

export default Input
