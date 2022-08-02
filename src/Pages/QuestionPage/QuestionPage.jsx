import React, { useState, useEffect } from 'react'
import "./QuestionPage.css"
import Question from '../../components/Questions/Question'
import Answer from '../../components/Answers/Answer';
import requests from '../../requests/requests';
import waitingGif from "../../assets/waiting.gif"
import HintPage from '../HintPage/HintPage';


const QuestionPage = ({ questionID, groupNumber, question }) => {
  const [answer, setanswer] = useState(undefined)
  const [answerError, setanswerError] = useState(false);
  const [isQuestionCorrectlyAnswered, setIsQuestionCorrectlyAnswered] = useState(false)
  const [hint, setHint] = useState(null)
  const [isLoading, setisLoading] = useState(false)


  const sendAnswerGiven = async () => {
    setisLoading(true)
    const sentAnswerResponse = await requests.sendAnswer(answer, questionID, groupNumber)
    if (sentAnswerResponse !== false) {
      console.log("LETS GOO")
      console.log(JSON.stringify(sentAnswerResponse))
      setIsQuestionCorrectlyAnswered(true)
      setHint(sentAnswerResponse.text)
    } else {
      console.log("KLFSJKLDJKLSDFJKLSDJKL")
      await setanswerError(true)
      console.log(answerError)
    }
    setisLoading(false)
  }


  return (
    isQuestionCorrectlyAnswered ?
      <HintPage hint={hint} />
      :
      <div div className="question-body" >
        {(question === undefined) || isLoading ?
          <img src={waitingGif} className="loading-img" />
          :
          <>
            <Question formulation={question.formulation} />
            <Answer question={question} setAnswer={setanswer} handleAcceptButton={sendAnswerGiven} errorInAnswer={answerError} />
          </>}
      </div >
  )
}

export default QuestionPage