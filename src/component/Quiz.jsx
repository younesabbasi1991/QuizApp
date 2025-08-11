import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from "../assets/quiz-complete.png";
import Answers from "./answers.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUsersAnswers((preveAnswers) => {
      return [...preveAnswers, selectedAnswer];
    });
  },
  []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
