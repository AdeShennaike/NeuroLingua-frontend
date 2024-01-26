import React from 'react'
import { getHistory } from '../../services/quizService'
import { useEffect, useState } from 'react'

const History = () => {

  const [quizList, setQuizList] = useState([])

  useEffect(() => {
    const getQuizzes = async () => {
      const quizzes = await getHistory()
      setQuizList(quizzes)
    } 
    getQuizzes()
  }, [])

  return (
    <>
      <div>History</div>
      {quizList
      ? quizList.map((quiz) => {
        <h3>{quiz.prompt}</h3>
      })
      : <h1>Loading...</h1>}
    </>
  )
}

export default History