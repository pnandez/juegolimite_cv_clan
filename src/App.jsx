import './App.css';
import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import QuestionPage from './components/QuestionPage/QuestionPage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="question/:questionID" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
