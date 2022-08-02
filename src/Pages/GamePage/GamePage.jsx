import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import "./GamePage.css"

import Modal from '../../components/Modal/Modal';
import requests from '../../requests/requests';
import QuestionPage from '../QuestionPage/QuestionPage';

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
  const [question, setquestion] = useState(null)

  const questionID = useParams().questionID


  const handleGroupInput = async () => {
    const result = await requests.existsGroup(groupNumber)
    console.log(result)
    if (result) {
      setGroupError(false)
      setModalIsOpen(false)
      requests.getQuestion(questionID, groupNumber).then(q => setquestion(q))
    }
    else {
      setGroupError(true)
    }

  }

  return (
    <div >
      {modalIsOpen ? <Modal handleAcceptGroup={handleGroupInput} setGroupNumber={setgroupNumber} groupError={groupError} />
        :
        <QuestionPage groupNumber={groupNumber} questionID={questionID} question={question} />
      }

    </div>
  )
}

export default GamePage