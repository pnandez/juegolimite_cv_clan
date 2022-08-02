import React, { useState, useEffect } from 'react'
import requests from '../../requests/requests'

const ResultsPage = () => {
  const [game, setgame] = useState(null)

  useEffect(async () => {
    setgame(await requests.getGame())
  }, [])

  return (
    <div>ResultsPage</div>
  )
}

export default ResultsPage