import React, { useState, useEffect } from 'react';
import Feedback from "../Feedback/Feedback";
import * as quizService from "../../services/quizService";

const Quiz = () => {
  // State to hold quiz data
  const [quizData, setQuizData] = useState({
    wrongAnswers: [],
    answer: "",
    question: ""
  });
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  // Effect to fetch quiz data on component mount
  useEffect(() => {
    const fetchQuiz = async () => {
      const quiz = await quizService.getQuiz();
      console.log()
      setQuizData(quiz); // Set fetched quiz data into state
    };
    fetchQuiz();
  }, []); // Empty dependency array means this effect runs once on mount

  // Conditional rendering based on fetched data
  if (!quizData || !quizData.wrongAnswers) return <div>Loading quiz...</div>; // Loading state
  const handleAnswerClick = (answer) => {
    console.log("Selected answer:", answer);

  }

  const handleFeedbackSubmit = (feedback) => {
    console.log('Submitting feedback:', feedback);
    // Here, implement the submission logic, possibly using a service to POST feedback to your backend
    setIsFeedbackOpen(false); // Close modal after submission
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Quiz</h2>
      <p className="text-xl mb-4">{quizData.prompt}</p>
      <div className="flex flex-col items-center">
        <button className="mb-2 px-4 py-2 border rounded text-white bg-blue-500 hover:bg-blue-600" onClick={() => handleAnswerClick(quizData.answer)}>
          {quizData.answer}
        </button>
        {quizData.wrongAnswers.map((altAnswer, index) => (
          <button key={index} className="mb-2 px-4 py-2 border rounded text-white bg-blue-500 hover:bg-blue-600" onClick={() => handleAnswerClick(altAnswer)}>
            {altAnswer}
          </button>
        ))}
      </div>

      <button className="mt-4 px-4 py-2 border rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white" onClick={() => setIsFeedbackOpen(true)}>Give Feedback</button>
      <Feedback
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        onSubmit={handleFeedbackSubmit}
      />
    </div>
  );
};

export default Quiz;