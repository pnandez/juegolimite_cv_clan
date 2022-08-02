import React from 'react'
import "./TextField.css"

const TextFieldAnswer = ({ setAnswer }) => {
  const handleAnswerChange = e => {
    e.preventDefault()
    console.log(e.target.value)
    setAnswer(e.target.value)
  }

  return (
    <div className="textfield-container">
      <input type="text" name='answer' className="text-input" onChange={handleAnswerChange} />
    </div >
  )
}

export default TextFieldAnswer