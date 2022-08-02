import React, { useState } from 'react'
import requests from '../../requests/requests';
import './Answer.css'
import ImageAnswer from './ImageAnswer/ImageAnswer';
import MultipleChoiceAnswer from './MultipleChoice/MultipleChoiceAnswer';
import TextFieldAnswer from './TextField/TextFieldAnswer';

const Answer = ({ question, setAnswer }) => {
  const questionType = question.questionType


  let AnswerElement = null

  switch (questionType) {
    case "MULTIPLE_CHOICES":
      AnswerElement = <MultipleChoiceAnswer setAnswer={setAnswer} choices={question.choices} />
      break;

    case "TEXT":
      AnswerElement = <TextFieldAnswer setAnswer={setAnswer} />
      break;

    case "IMAGE":
      return (
        <div className='answerDiv'>
          <ImageAnswer />
        </div>
      )
    default:
      return <></>
  }

  return (
    <div className='answerDiv'>
      {AnswerElement}
      <button className='accept-button'>Aceptar</button>
    </div>
  )
}
export default Answer;