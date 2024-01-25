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
    <>
      <div>Quiz</div>
      <div>
        <p>{quizData.prompt}</p>
        <button onClick={() => handleAnswerClick(quizData.answer)}>
          {quizData.answer}
        </button>
        {/* Map over alternative answers and display each as a button */}
        {quizData.wrongAnswers.map((altAnswer, index) => (
          <button key={index} onClick={() => handleAnswerClick(altAnswer)}>
            {altAnswer}
          </button>
        ))}
      </div>

      <button onClick={() => setIsFeedbackOpen(true)}>Give Feedback</button> {/* Button to open feedback modal */}
      <Feedback
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        onSubmit={handleFeedbackSubmit}
      />
    </>
  );
};

export default Quiz;