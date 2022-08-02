import React from 'react'
import "./ImageAnswer.css"
import useCountdownTimer from '../../timer/useCountdownTimer'

const ImageAnswer = () => {
  const [isTimeLeft, minutes, seconds] = useCountdownTimer(0, 1)
  return (
    <div className='timer-container'>
      Debes enviar la imagen solicitada a tus scouters
      {isTimeLeft ?
        <div className='timer-text'>{minutes}:{seconds.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}</div>
        :
        <p className='timeout-text'>Se acabó el tiempo</p>}
    </div>
  )
}

export default ImageAnswer