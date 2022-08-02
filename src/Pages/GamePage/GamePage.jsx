import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import "./GamePage.css"
import Question from '../../components/Questions/Question'
import Answer from '../../components/Answers/Answer';
import Modal from '../../components/Modal/Modal';
import requests from '../../requests/requests';

const EmptyQuestion = {

  "questionId": "",
  "formulation": "",
  "questionType": "",
  "choices": [],
  "answers": []

}



const GamePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true)
  const [groupNumber, setgroupNumber] = useState(0)
  const [groupError, setGroupError] = useState(false)
  const [answer, setanswer] = useState(undefined)
  const [answerError, setanswerError] = useState(false);

  const questionID = useParams().questionID
  let question = requests.getQuestion(questionID)

  const sendAnswerGiven = () => {
    if (requests.sendAnswer(answer, questionID, groupNumber) !== Error) {

    }
  }

  const handleGroupInput = async () => {
    const result = await requests.existsGroup(groupNumber)
    console.log(result)
    if (result != Error) {
      setGroupError(false)
      setModalIsOpen(false)
    }
    else {
      setGroupError(true)
    }

  }
  if (!question) {
    return (<div></div>)
  }

  return (
    <div className="question-body">
      {/* {modalIsOpen ? <Modal handleAcceptGroup={handleGroupInput} setGroupNumber={setgroupNumber} groupError={groupError} /> : <></>} */}
      <Question formulation={question.formulation} />
      <Answer question={question} setAnswer={setanswer} />
      {answerError ? <p className='error-text'>Vuelva a introducir la respuesta</p> : <></>}
    </div>
  )
}

export default GamePage