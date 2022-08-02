import React, { useState, useEffect } from 'react'
import requests from '../../requests/requests'
import QuestionInformation from './components/QuestionInformation'
import "./ResultsPage.css"

const ResultsPage = () => {
  const [game, setgame] = useState(null)

  useEffect(async () => {
    setgame(await requests.getGame())
  }, [])



  return (
    <>
      <div className='margin-div'></div>
      <div className='results-div'>
        {game ? game.questions.map((question) => {
          return <QuestionInformation key={question.questionId} question={question} groups={game.groups} />
        })
          :
          <> </>
        }
      </div>
    </>
  )
}

export default ResultsPage