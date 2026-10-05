import React, { useState } from 'react';
import './App.css';
import { questions, calculateQuizResults } from './data/quizData';
import HeroScreen from './components/HeroScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';

export default function App() {
  // Screen state: 'hero' | 'question' | 'result'
  const [screen, setScreen] = useState('hero');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);

  const handleStart = () => {
    setScreen('question');
    setCurrentIndex(0);
  };

  const handleSelectOption = (option) => {
    setAnswers({
      ...answers,
      [questions[currentIndex].id]: option
    });
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate final outputs (Archetype, Weakest Engine, Deal flow condition)
      const res = calculateQuizResults(answers);
      setQuizResults(res);
      setScreen('result');
    }
  };

  const handleBackQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setScreen('hero');
    }
  };

  const handleRestart = () => {
    setScreen('hero');
    setCurrentIndex(0);
    setAnswers({});
    setQuizResults(null);
  };

  return (
    <div className="v4-wrapper">
      <div className="v4-quiz-box">
        {screen === 'hero' && <HeroScreen onStart={handleStart} />}

        {screen === 'question' && (
          <QuestionScreen
            question={questions[currentIndex]}
            selectedOption={answers[questions[currentIndex].id]}
            onSelectOption={handleSelectOption}
            onNext={handleNextQuestion}
            onBack={handleBackQuestion}
            currentIndex={currentIndex}
            totalQuestions={questions.length}
          />
        )}

        {screen === 'result' && quizResults && (
          <ResultScreen
            results={quizResults}
            answers={answers}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
