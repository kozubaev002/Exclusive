import React, { useState } from 'react'
import Count from '../component/Todo/Count'
import Info from '../component/Todo/Info'
import Block from '../component/Todo/Block'
import Red from '../component/Todo/Red'
import Green from '../component/Todo/Green'
import Blue from '../component/Todo/Blue'
import Pink from '../component/Todo/Pink'

function Contact() {
  const [value, setValue] = useState(0)
  const [color, setColor] = useState("gray")
  

  const increment = () => setValue(value + 1)
  const decrement = () => setValue(value - 1)

  const changeColor = (text) => setColor(text)


  return (
    <div>
      Contact
      <Info count={value} />
      <Count clicked={increment} decrement={decrement} />
      <Block color={color} />
      <Red click={changeColor} />
      <Green click={changeColor} />
      <Blue click={changeColor} />
      <Pink click={changeColor} />
    </div>
  )
}

export default Contact
