import axios from 'axios';

const hostURL = "https://dgtz3f6xwh.execute-api.eu-west-1.amazonaws.com/Stage"
const gameId = "a357913e-f898-47cb-97a0-250bc6b0ae4b"

const headersList = {
  "Accept": "*/*",
  "Content-Type": "application/json"
}


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

const errorQuestion = {
  "formulation": "Ha habido un error, vuelve a intentarlo"
}

const getGame = () => {
  return axios.get(`${hostURL}/game/${gameId}`)
    .then(response => {
      return response.data
    }).catch(e =>
      console.log(e)
    )

}

const existsQuestion = async (questionID) => {
  const gameQuestions = await (await getGame()).questions

  console.log("AAAAA")
  const existsQuestion = await gameQuestions.find(q => q.questionId === questionID) ? true : false;
  console.log(existsQuestion)
  return existsQuestion
}

const existsGroup = async (groupCode) => {
  const gameGroups = await (await getGame()).groups
  const groupExists = await gameGroups.find(g => g.codeWord === groupCode) ? true : false;

  return groupExists

}

const getQuestion = async (questionId, groupId) => {

  return axios.post(`${hostURL}/game/${gameId}/questions/${questionId}/reveal`, {
    "codeWord": groupId,
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(async response => {
      return response.data
    }).catch(
      () => null
    )
}


const sendAnswer = async (answer, questionID, groupID) => {
  console.log("ASDASDSFDSF")
  return axios.post(`${hostURL}/game/${gameId}/questions/${questionID}/answer`, {
    answer: answer,
    codeWord: groupID
  })
    .then(res => res.data)
    .catch(e => false)
}


export default { getGame, getQuestion, sendAnswer, existsGroup, existsQuestion }