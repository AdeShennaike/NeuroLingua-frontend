import * as quizService from '../../services/quizService'
import { useState, useEffect } from 'react'

const History = () => {
const [history, setHistory] = useState(null)

  useEffect(() => {
    const fetchHistory = async () => {
      const historyData = await quizService.getHistory()
      setHistory(historyData)
    }
    fetchHistory()
  }, [])



  return (
    <>
    <div>History</div>
    
    </>
    
  )
}

export default History