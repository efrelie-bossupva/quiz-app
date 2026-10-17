import React, { useState, useEffect } from 'react';
import './App.css';
import { questions, calculateQuizResults, quizMeta } from './data/quizData';
import Header from './components/Header';
import HeroScreen from './components/HeroScreen';
import QuestionScreen from './components/QuestionScreen';
import LeadCaptureScreen from './components/LeadCaptureScreen';
import ResultScreen from './components/ResultScreen';

export default function App() {
  // Screen flow: hero -> question -> lead -> result
  const [screen, setScreen] = useState('hero');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);
  const [leadInfo, setLeadInfo] = useState(null);

  // Set page title
  useEffect(() => {
    document.title = `${quizMeta.title} | ${quizMeta.academyName}`;
  }, []);

  // Scroll to top on screen or question change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [screen, currentIndex]);

  // Start quiz
  const handleStart = () => {
    setScreen('question');
    setCurrentIndex(0);
  };

  // Select option
  const handleSelectOption = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentIndex].id]: option
    }));
  };

  // Next question
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Calculate results and advance to lead capture
      const res = calculateQuizResults(answers);
      setQuizResults(res);
      setScreen('lead');
    }
  };

  // Back question
  const handleBackQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setScreen('hero');
    }
  };

  // Lead capture submit -> moves to result screen
  const handleLeadSubmit = (leadData) => {
    setLeadInfo(leadData);
    setScreen('result');
  };

  // Restart quiz
  const handleRestart = () => {
    setScreen('hero');
    setCurrentIndex(0);
    setAnswers({});
    setQuizResults(null);
    setLeadInfo(null);
  };

  return (
    <div className="v5-app-root">
      <Header onLogoClick={screen !== 'hero' ? handleRestart : undefined} />

      <main className="v5-main-content">
        {screen === 'hero' && (
          <HeroScreen onStart={handleStart} />
        )}

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

        {screen === 'lead' && quizResults && (
          <LeadCaptureScreen
            results={quizResults}
            answers={answers}
            onSubmit={handleLeadSubmit}
            onBack={() => {
              setCurrentIndex(questions.length - 1);
              setScreen('question');
            }}
          />
        )}

        {screen === 'result' && quizResults && (
          <ResultScreen
            results={quizResults}
            answers={answers}
            leadInfo={leadInfo}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}
