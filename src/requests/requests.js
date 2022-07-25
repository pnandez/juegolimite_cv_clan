import axios from 'axios';

const hostURL = "http://localhost:8080"
const gameId = 1
class Requests {
  getQuestion(ID) {
    axios.get(`${hostURL}/game/${gameId}/questions/${id}`)
      .then(response => {
        return response.data
      }).catch(() => false
      )
  }

  sendAnswer(answer, questionID, groupID) {
    axios.post(`${hostURL}/game/${gameId}/questions/${id}`, {
      questionID: questionID,
      answer: answer,
      groupID: groupID
    })
  }
}

export default Requests