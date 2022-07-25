import React from 'react'
import "./MultipleChoice.css"
const choices = ["Aguere es el mejor o el peor pero nunca nos quedamos en meedio", "UCanca", "anambro", "Guaxara"]
const MultipleChoiceAnswer = () => {
  return (
    <div className="choices-container">
      {choices.map(choice => {
        return (
          <div className='choice-element'>
            <input type="radio" name="answer" key="{choice}" value={choice} /> <span>{choice}</span>
          </div>
        )
      }
      )}
    </div >
  )
}

export default MultipleChoiceAnswer