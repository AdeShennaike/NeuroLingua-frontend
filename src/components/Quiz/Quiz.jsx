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
  const answerArr = []

  // Effect to fetch quiz data on component mount
  useEffect(() => {
    const fetchQuiz = async () => {
      const quiz = await quizService.getQuiz();
      console.log('initial quiz output', quiz)
      setQuizData(quiz); // Set fetched quiz data into state
      quizService.answerQuiz(quiz._id)
      quiz.wrongAnswers.map(answer => {
        console.log('map answer', answer)
        return answerArr.push(answer)
      })
      answerArr.push(quiz.answer)
      console.log('answer array', answerArr)
    };
    fetchQuiz();
  }, []); // Empty dependency array means this effect runs once on mount

  // Next button handler
  const newQuiz = async () => {
    const quiz = await quizService.getQuiz();
    console.log('next Quiz', quiz)
    setQuizData(quiz); // Set fetched quiz data into state
    setAnswered(false); // Set fetched quiz data into state
    quizService.answerQuiz(quiz._id)
    quiz.wrongAnswers.map(answer => {
      console.log('map answer', answer)
      return answerArr.push(answer)
    })
    answerArr.push(quiz.answer)
    console.log('answer array', answerArr)
  }

  // Answer buttons handler
  const handleAnswerClick = (answer) => {
    console.log("Selected answer:", answer)
    setAnswered(true)
  }

  return (
    (!quizData || !quizData.wrongAnswers) ?
      <div>Loading quiz...</div>
      :
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white/30 p-8 rounded-md shadow-md md:w-96 w-full">
          <h2 className="text-2xl mb-4">What does this sentence mean?</h2>
          <p className="text-xl mb-4">{quizData.prompt}</p>
          <div className="flex flex-col items-center">
            <button
              className="mb-2 px-4 py-2 border rounded text-white bg-[#366664] hover:bg-[#042427] w-full"
              onClick={() => handleAnswerClick(quizData.answer)}
              style={{ backgroundColor: answered ? 'green' : '#366664' }}
            >
              {quizData.answer}
            </button>

            {quizData.wrongAnswers.map((altAnswer, index) => (
              <button
                key={index}
                className="mb-2 px-4 py-2 border rounded text-white bg-[#366664] hover:bg-[#042427] w-full"
                onClick={() => handleAnswerClick(altAnswer)}
              >
                {altAnswer}
              </button>
            ))}
          </div>

          <button
            className="mt-4 px-4 py-2 border rounded bg-white/95 text-[#17393A] border-[#17393A] hover:bg-[#EFF4F3] hover:text-[#3F514E] w-full"
            onClick={() => setIsFeedbackOpen(true)}
          >
            Give Feedback
          </button>
          <button
            className="mt-4 px-4 py-2 border bg-white/95 rounded text-[#366664] border-[#366664] hover:bg-[#EFF4F3] hover:text-[#1B403F] w-full"
            onClick={newQuiz}
          >
            Next Quiz
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














