import React from 'react'

const AnswerInformation = ({ answer, groups }) => {

  const getTimeUsedInMinutes = (startedAt, finishedAt) => {
    const start = new Date(startedAt)
    const finish = new Date(finishedAt)
    console.log(finish)
    const diffInMS = Math.abs(start - finish)

    const res = Math.floor((diffInMS / 1000) / 60)
    return res > 0 ? res : -1
  }

  const getGroupCodeWord = (groupId) => {
    return groups.find(g => g.groupId === groupId).codeWord
  }

  return (
    <div>
      <h3>Grupo: </h3> {getGroupCodeWord(answer.groupId)}
      <h5>Tiempo en minutos: </h5> {getTimeUsedInMinutes(answer.startedAt, answer.answeredAt)}
      <hr />
    </div>
  )
}

export default AnswerInformation