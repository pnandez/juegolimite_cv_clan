import React from 'react';
import './Question.css'
//First fecth question
//Show question

const Question = ({ formulation }) => {

  return (
    <div className='questionDiv'>
      {formulation}
    </div>
  );
}


export default Question;