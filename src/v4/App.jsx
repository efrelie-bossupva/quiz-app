import React, { useState } from 'react';
import './App.css';
import { questions, calculateQuizResults } from './data/quizData';
import HeroScreen from './components/HeroScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import LeadCaptureScreen from './components/LeadCaptureScreen';

export default function App() {
  // Screen flow:
  // 'hero' → 'question' → 'lead' → 'result'
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
    setAnswers((prev) => ({
      ...prev,
      [questions[currentIndex].id]: option
    }));
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Calculate results after the last quiz question
      const res = calculateQuizResults(answers);

      setQuizResults(res);

      // IMPORTANT:
      // Do NOT show ResultScreen yet.
      // Show LeadCaptureScreen first.
      setScreen('lead');
    }
  };

  const handleBackQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setScreen('hero');
    }
  };

  // This is called AFTER LeadCaptureScreen is submitted
  const handleLeadSubmit = (sentence = '') => {
    setTriedSentence(sentence);

    // Now move to the ResultScreen
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

        {/* =========================
            HERO
        ========================== */}
        {screen === 'hero' && (
          <HeroScreen
            onStart={handleStart}
          />
        )}

        {/* =========================
            QUIZ QUESTIONS
        ========================== */}
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

        {/* =========================
            LEAD CAPTURE
        ========================== */}
        {screen === 'lead' && quizResults && (
          <LeadCaptureScreen
            results={quizResults}
            answers={answers}
            triedSentence={triedSentence}
            onSubmit={handleLeadSubmit}
            onRestart={handleRestart}
          />
        )}

        {/* =========================
            RESULT
        ========================== */}
        {screen === 'result' && quizResults && (
          <ResultScreen
            results={quizResults}
            initialSentence={triedSentence}
            onRestart={handleRestart}
          />
        )}

      </div>
    </div>
  );
}
