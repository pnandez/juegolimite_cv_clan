import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import "./GamePage.css"
import outOfHereGIf from "../../assets/you-shouldnt-be-in-here-what-are-you-doing-here.gif"
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
  const [question, setquestion] = useState(undefined)
  const [questionIDExists, setQuestionIDExists] = useState(null)

  const questionID = useParams().questionID

  useEffect(async () => {
    setQuestionIDExists(await requests.existsQuestion(questionID))
  }, [])

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

  if (!questionIDExists) {
    console.log("ASDFJKFSD")
    return (
      <div className="incorrect-id-gif-div">
        < img className="incorrect-id-gif" src={outOfHereGIf} alt="" srcset="" />
      </div >
    )
  } else {
    return (
      <div >
        {modalIsOpen ? <Modal handleAcceptGroup={handleGroupInput} setGroupNumber={setgroupNumber} groupError={groupError} />
          :
          <QuestionPage groupNumber={groupNumber} questionID={questionID} question={question} />
        }

      </div>
    )

  }
}
export default GamePage