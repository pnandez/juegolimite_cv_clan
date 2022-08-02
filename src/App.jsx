import './App.css';
import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import GamePage from './Pages/GamePage/GamePage';
import ResultsPage from './Pages/ResultsPage/ResultsPage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="question/:questionID" element={<GamePage />} />
        <Route path="results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
