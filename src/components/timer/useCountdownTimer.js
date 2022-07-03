import React, { useState, useEffect } from 'react'

const useCountdownTimer = (minutes = 0, seconds =59 ) => {
  while(seconds > 60){
    seconds = Math.floor(seconds/60)
    minutes++
  }
  const [[timerMinutes,timerSeconds],setTime] = useState([minutes, seconds])
  const [isTimeLeft, setisTimeLeft] = useState(true);

  const tick = () => {
    if (timerSeconds === 0 && timerMinutes === 0 ){
      setisTimeLeft(false)
      
    }
    else if(timerSeconds === 0 && timerMinutes > 0){
      setTime([timerMinutes-1,59])
    }
    else{
      setTime([timerMinutes, timerSeconds-1])
    }

  }

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000)
    console.log("AAAA " + timerSeconds)
    return () => clearInterval(timer)
  }, [timerMinutes, timerSeconds]);

  return [isTimeLeft, timerMinutes, timerSeconds]
}

export default useCountdownTimer