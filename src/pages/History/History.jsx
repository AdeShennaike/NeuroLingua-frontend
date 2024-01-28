import * as quizService from '../../services/quizService'
import { useState, useEffect } from 'react'
import './History.css'

const History = () => {
const [history, setHistory] = useState(null)
const [selectQuiz, setSelectQuiz] = useState(null)

  useEffect(() => {
    const fetchHistory = async () => {
      const historyData = await quizService.getHistory()
      console.log(historyData)
      setHistory(historyData)
    }
    fetchHistory()
  }, [])

  const showQuiz = (index) => {
    setSelectQuiz(history[index])
  }

  const hideQuiz = () => {
    setSelectQuiz(null)
  }

  if (!history) {
    return <h1>Loading history...</h1>
  }

  if (!selectQuiz) {
    return (
      <>
      {history.map((quiz, index) => {
        return <h3 className="history-preview" key={index} onClick={() => showQuiz(index)}>{quiz.prompt}</h3>
      })}
      </>
    )
  }

  return (
    <div className='quiz-details'>
      <h2>{selectQuiz.prompt}</h2>
      <p className="answer-button">{selectQuiz.answer}</p>
      <p className="wrong">{selectQuiz.wrongAnswers[0]}</p>
      <p className="wrong">{selectQuiz.wrongAnswers[1]}</p>
      <p className="wrong">{selectQuiz.wrongAnswers[2]}</p>
      <button onClick={hideQuiz}>Close</button>
    </div>
    
  )
}

export default History