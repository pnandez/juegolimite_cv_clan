import React from 'react'
import "./MultipleChoice.css"
const MultipleChoiceAnswer = ({ setAnswer, choices }) => {

  const handleAnswerChange = e => {
    console.log(e.target.value)
    setAnswer(e.target.value)
  }

  return (
    <div className="choices-container">
      {choices.map(choice => {
        return (
          <div className='choice-element' key={choice}>
            <label><input type="radio" name="answer" value={choice} onClick={handleAnswerChange} /> {choice}</label>
          </div>
        )
      }
      )}
    </div >
  )
}

export default MultipleChoiceAnswer