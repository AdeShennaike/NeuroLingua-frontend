import React, { useState, useEffect } from 'react';
import Feedback from "../Feedback/Feedback";
import * as quizService from "../../services/quizService";

const Quiz = () => {
  // State to hold quiz data
  const [quizData, setQuizData] = useState({
    alternateAnswers: [],
    answer: "",
    question: ""
  });

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
        {/* 
  <ul>
    {quizData.alternativeTranslations.map((translation, index) => (
      <li key={index}>{translation}</li>
    ))}
  </ul>
*/}

        {/* Display additional quiz data as needed */}
      </div>
      <div>
        <Feedback />
      </div>
    </>
  );
};

export default Quiz;