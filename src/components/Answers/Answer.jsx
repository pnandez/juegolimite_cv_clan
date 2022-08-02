import React, { useState } from 'react'
import requests from '../../requests/requests';
import './Answer.css'
import ImageAnswer from './ImageAnswer/ImageAnswer';
import MultipleChoiceAnswer from './MultipleChoice/MultipleChoiceAnswer';
import TextFieldAnswer from './TextField/TextFieldAnswer';

const Answer = ({ question, setAnswer, handleAcceptButton, errorInAnswer }) => {
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
      AnswerElement = <TextFieldAnswer setAnswer={setAnswer} />
      break;

    default:
      return <></>
  }

  return (
    <div className='answerDiv'>
      {AnswerElement}
      {errorInAnswer ? <p className='error-text'>Respuesta Erronea</p> : <p></p>}
      <button className='accept-button' onClick={handleAcceptButton}>Aceptar</button>
    </div>
  )
}
export default Answer;