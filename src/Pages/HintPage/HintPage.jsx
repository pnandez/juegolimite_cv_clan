import React from 'react'
import "./HintPage.css"

const HintPage = ({ hint }) => {
  return (
    <div className="hint-body">
      <h2>La siguiente pista es:</h2>
      {hint.type === "TEXT" ?
        <p className="hint">{hint.text}</p>
        :
        <img src={hint.text} className="hint" />
      }
    </div>
  )
}

export default HintPage