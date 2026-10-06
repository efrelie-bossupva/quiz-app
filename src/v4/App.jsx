```jsx
import React, { useState } from 'react';
import './App.css';
import { questions, calculateQuizResults } from './data/quizData';
import HeroScreen from './components/HeroScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import LeadCaptureScreen from './components/LeadCaptureScreen';

export default function App() {
  // Screen state: 'hero' | 'question' | 'lead' | 'result'
  const [screen, setScreen] = useState('hero');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);
  const [triedSentence, setTriedSentence] = useState('');

  const handleStart = () => {
    setScreen('question');
    setCurrentIndex(0);
    setAnswers({});
    setQuizResults(null);
    setTriedSentence('');
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
      // Calculate final quiz results
      const res = calculateQuizResults(answers);
      setQuizResults(res);

      // FIRST: Go directly to Lead Capture Screen
      setScreen('lead');
    }
  };

  const handleBackQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setScreen('hero');
    }
  };

  const handleProceedToResult = (sentence) => {
    setTriedSentence(sentence);

    // SECOND: After Lead Capture, show the results
    setScreen('result');
  };

  const handleBackToQuestions = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setScreen('question');
    } else {
      setScreen('hero');
    }
  };

  const handleRestart = () => {
    setScreen('hero');
    setCurrentIndex(0);
    setAnswers({});
    setQuizResults(null);
    setTriedSentence('');
  };

  return (
    <div className="v4-wrapper">
      <div className="v4-quiz-box">

        {/* HERO */}
        {screen === 'hero' && (
          <HeroScreen onStart={handleStart} />
        )}

        {/* QUESTIONS */}
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

        {/* LEAD CAPTURE */}
        {screen === 'lead' && quizResults && (
          <LeadCaptureScreen
            results={quizResults}
            answers={answers}
            triedSentence={triedSentence}
            onProceed={handleProceedToResult}
            onRestart={handleRestart}
            onBack={handleBackToQuestions}
          />
        )}

        {/* RESULTS */}
        {screen === 'result' && quizResults && (
          <ResultScreen
            results={quizResults}
            initialSentence={triedSentence}
            onProceed={handleProceedToResult}
          />
        )}

      </div>
    </div>
  );
}
```
