import React, { useState, useEffect } from 'react';
import Feedback from "../Feedback/Feedback";
import * as quizService from "../../services/quizService";

const Quiz = () => {
  // State to hold quiz data
  const [quizData, setQuizData] = useState({
    wrongAnswers: [],
    answer: "",
    question: ""
  })
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)
  const [answered, setAnswered] = useState(false)


  // Effect to fetch quiz data on component mount
  useEffect(() => {
    const fetchQuiz = async () => {
      const quiz = await quizService.getQuiz();
      setQuizData(quiz); // Set fetched quiz data into state
      // localStorage.setItem('quizId', quiz._id)
      // const quizId = localStorage.getItem('quizId')
      console.log(quiz)
      quizService.answerQuiz(quiz._id)
    };
    fetchQuiz();
  }, []); // Empty dependency array means this effect runs once on mount

  const newQuiz = async () => {
    const quiz = await quizService.getQuiz();
    setQuizData(quiz); // Set fetched quiz data into state
    setAnswered(false); // Set fetched quiz data into state
  }


  if (!quizData || !quizData.wrongAnswers) return <div>Loading quiz...</div>

  const handleAnswerClick = (answer) => {
    console.log("Selected answer:", answer)
    setAnswered(true)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md md:w-96 w-full">
        <h2 className="text-2xl mb-4">What does this sentence mean?</h2>
        <p className="text-xl mb-4">{quizData.prompt}</p>
        <div className="flex flex-col items-center">
          <button
            className="mb-2 px-4 py-2 border rounded text-white bg-blue-500 hover:bg-blue-600 w-full"
            onClick={() => handleAnswerClick(quizData.answer)}
            style={{ backgroundColor: answered ? 'green' : 'blue' }}
          >
            {quizData.answer}
          </button>
          {quizData.wrongAnswers.map((altAnswer, index) => (
            <button
              key={index}
              className="mb-2 px-4 py-2 border rounded text-white bg-blue-500 hover:bg-blue-600 w-full"
              onClick={() => handleAnswerClick(altAnswer)}
            >
              {altAnswer}
            </button>
          ))}
        </div>

        <button
          className="mt-4 px-4 py-2 border rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white w-full"
          onClick={() => setIsFeedbackOpen(true)}
        >
          Give Feedback
        </button>
        <button onClick={newQuiz}>
          next quiz
        </button>
        <Feedback
          isOpen={isFeedbackOpen}
          onClose={() => setIsFeedbackOpen(false)}
          quizId={quizData._id}
        />
      </div>
    </div>
  );
};

export default Quiz;
