import './App.css';
import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import GamePage from './Pages/GamePage/GamePage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="question/:questionID" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
