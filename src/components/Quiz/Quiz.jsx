import React, { useState } from 'react';
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
  const [quizShown, setQuizShown] = useState(false)
  const [answerArr, setAnswerArr] = useState([]);
  
  const handleFetchQuiz = async () => {
    const quiz = await quizService.getQuiz();
    console.log('initial quiz output', quiz)
    setQuizData(quiz); // Set fetched quiz data into state
    quizService.answerQuiz(quiz._id)
    const newAnswers = shuffleArray([...quiz.wrongAnswers, quiz.answer])
    setAnswerArr(newAnswers)
    console.log('answer array', newAnswers)
    setQuizShown(true)
  }

  // Function to randomize answer choices
  const shuffleArray = (array) => {
    let shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  // Next button handler
  const newQuiz = async () => {
    const quiz = await quizService.getQuiz();
    console.log('next Quiz', quiz)
    setQuizData(quiz); // Set fetched quiz data into state
    setAnswered(false); // Set fetched quiz data into state
    quizService.answerQuiz(quiz._id)
    const newAnswers = shuffleArray([...quiz.wrongAnswers, quiz.answer])
    setAnswerArr(newAnswers)
    console.log('answer array', newAnswers)
  }

  // Answer buttons handler
  const handleAnswerClick = (answer) => {
    console.log("Selected answer:", answer)
    setAnswered(true)
  }

  return (
        <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md md:w-96 w-full">
        {!quizShown && (
          <div>
            <button
              className="mb-2 px-4 py-2 border rounded text-white bg-[#17393A] hover:bg-[#366664] w-full"
              onClick={handleFetchQuiz}
            >
              Show Quiz
            </button>
          </div>)}

        {quizShown && (
          <div>
            <h2 className="text-2xl mb-4">What does this sentence mean?</h2>
            <p className="text-xl mb-4">{quizData.prompt}</p>
            <div className="flex flex-col items-center">
            {answerArr.map((answer, index) => {
                const backgroundColor = answered
                  ? (answer === quizData.answer ? 'green' : 'red')
                  : 'bg-[#17393A]';
                return (
                  <button
                    key={index}
                    className="mb-2 px-4 py-2 border rounded text-white bg-[#17393A] hover:bg-[#366664] w-full"
                    onClick={() => handleAnswerClick(answer)}
                    style={{ backgroundColor: backgroundColor }}
                  >
                    {answer}
                  </button>
                );
              })}
          </div>

            <button
              className="mt-4 px-4 py-2 border rounded text-[#17393A] border-[#17393A] hover:bg-[#EFF4F3] hover:text-[#3F514E] w-full"
              onClick={() => setIsFeedbackOpen(true)}
            >
              Give Feedback
            </button>

            {answered && (
              <button
                className="mt-4 px-4 py-2 border rounded text-[#17393A] border-[#17393A] hover:bg-[#EFF4F3] hover:text-[#3F514E] w-full"
                onClick={newQuiz}
                disabled={!answered}
              >
                next quiz
              </button>
            )}

            <Feedback
              isOpen={isFeedbackOpen}
              onClose={() => setIsFeedbackOpen(false)}
              quizId={quizData._id}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;