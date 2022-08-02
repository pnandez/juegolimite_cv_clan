import React from 'react'
import AnswerInformation from './AnswerInformation'

const QuestionInformation = ({ question, groups }) => {
  return (
    <div>
      <h2>Pregunta: </h2> {question.formulation}
      {question.answers.map((answer) => {
        return <AnswerInformation key={answer.answerId} answer={answer} groups={groups} />
      }
      )
      }
      <hr />
      <hr />
    </div>
  )
}

export default QuestionInformation