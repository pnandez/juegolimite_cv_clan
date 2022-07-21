import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import useCountdownTimer from './components/timer/useCountdownTimer';
import Question from './components/Questions/Question';
import Answer from './components/Answers/Answer';
import Modal from './components/Modal/Modal';


const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true)
  const [groupNumber, setgroupNumber] = useState(0)

  return (
    <div className="App">
      <Modal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} setGroupNumber={setgroupNumber} />
      <div className="body">
        <Question />
        <Answer />
      </div>
    </div>
  );
}

export default App;
