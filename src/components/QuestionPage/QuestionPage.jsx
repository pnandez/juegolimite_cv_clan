import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import "./QuestionPage.css"
import Question from '../Questions/Question'
import Answer from '../Answers/Answer';
import Modal from '../Modal/Modal';

const QuestionPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true)
  const [groupNumber, setgroupNumber] = useState(0)
  const questionID = useParams().questionID



  return (
    <div className="question-body">
      {/* {modalIsOpen ? <Modal setModalIsOpen={setModalIsOpen} setGroupNumber={setgroupNumber} /> : <></>} */}
      <Question />
      <Answer />
      {questionID}
    </div>
  )
}

export default QuestionPage