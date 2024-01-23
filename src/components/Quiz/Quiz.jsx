import React, { useState, useEffect } from 'react';
import Feedback from "../Feedback/Feedback";
import * as quizService from "../../services/quizService";

const Quiz = () => {
  // State to hold quiz data
  const [quizData, setQuizData] = useState({alternativeTranslations: []});

  // Effect to fetch quiz data on component mount
  useEffect(() => {
    const fetchQuiz = async () => {
      const quiz = await quizService.getQuiz();
      setQuizData(quiz); // Set fetched quiz data into state
    };
    fetchQuiz();
  }, []); // Empty dependency array means this effect runs once on mount

  // Conditional rendering based on fetched data
  if (!quizData) return <div>Loading quiz...</div>; // Loading state

  return (
    <>
      <div>Quiz</div>
      <div>
        <p>{quizData.prompt}</p>
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