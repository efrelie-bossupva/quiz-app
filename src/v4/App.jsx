import React, { useState } from 'react';
import './App.css';
import { questions, calculateQuizResults } from './data/quizData';
import HeroScreen from './components/HeroScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import LeadCaptureScreen from './components/LeadCaptureScreen';

export default function App() {
  // Screen state: 'hero' | 'question' | 'result' | 'lead'
  const [screen, setScreen] = useState('hero');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);
  const [triedSentence, setTriedSentence] = useState('');

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
      // Calculate final outputs
      const res = calculateQuizResults(answers);
      setQuizResults(res);
      // FIRST: Show diagnostic results breakdown & sentence input box
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

  const handleProceedToForm = (sentence) => {
    setTriedSentence(sentence);
    // SECOND: Proceed to the form screen (Name & Email + Send it to Tam button)
    setScreen('lead');
  };

  const handleBackToResult = () => {
    setScreen('result');
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
            initialSentence={triedSentence}
            onProceed={handleProceedToForm}
          />
        )}

        {screen === 'lead' && quizResults && (
          <LeadCaptureScreen
            results={quizResults}
            answers={answers}
            triedSentence={triedSentence}
            onRestart={handleRestart}
            onBack={handleBackToResult}
          />
        )}
      </div>
    </div>
  );
}
