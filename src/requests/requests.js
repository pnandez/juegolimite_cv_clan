import axios from 'axios';

const hostURL = "https://dgtz3f6xwh.execute-api.eu-west-1.amazonaws.com/Stage/"
const gameId = "a357913e-f898-47cb-97a0-250bc6b0ae4b"

const mockQuestions = [
  {
    "questionId": "123a",
    "formulation": "Cuántos años tenía BP cuando murió",
    "questionType": "MULTIPLE_CHOICES",
    "choices": [
      "1923ankskdfasjfjdjkasf dsf admfa fdaskdf sadkfas dadf askf dsaf",
      "2000",
      "2341",
      "controla la alineación de todos los elementos en el eje principal."
    ],
    "answers": []
  },
  {
    "questionId": "5678788",
    "formulation": "Cuando nació BP",
    "questionType": "TEXT",
    "correctAnswer": "1234",
    "answers": []
  },
  {
    "questionId": "5678789",
    "formulation": "Foto a un calvo",
    "questionType": "IMAGE",
    "correctAnswer": "1234",
    "answers": []
  },
]

const mockGame = {
  "gameId": "1234asdf",
  "questions": [],
  "name": "A",
  "groups": [
    {
      "groupId": "123",
      "codeWord": "ELGRUPO2"
    }
  ],
  "createdAt": 1
}

const getGame = () => {
  return axios.get(`${hostURL}/game/${gameId}`)
    .then(response => {
      return response.data
    }).catch(e =>
      console.log(e)
    )

}

const existsGroup = async (groupCode) => {
  const gameGroups = await (await getGame()).groups
  const groupExists = await gameGroups.find(g => g.codeWord === groupCode) ? true : false;

  return groupExists

}

const getQuestion = async (questionId, groupId) => {
  return axios.get(`${hostURL}/game/${gameId}/questions/${questionId}/reveal`)
    .then(response => {
      console.log(response)
      return response.data
    }).catch(() => false
    )
}

const getMockQuestion = (questionID, groupID) => {
  const questionToReturn = mockQuestions.find(q => q.questionId === questionID)
  if (questionToReturn) {
    return questionToReturn
  }
  return new Error()
}

const sendAnswer = (answer, questionID, groupID) => {
  return axios.post(`${hostURL}/game/${gameId}/questions/${questionID}`, {
    questionID: questionID,
    answer: answer,
    groupID: groupID
  })
    .then(res => res.data)
    .catch(e => new Error())
}


export default { getGame, getQuestion, getMockQuestion, sendAnswer, existsGroup }