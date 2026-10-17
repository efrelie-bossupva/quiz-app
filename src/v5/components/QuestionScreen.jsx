import React, { useEffect } from 'react';
import { sections } from '../data/quizData';

export default function QuestionScreen({
  question,
  selectedOption,
  onSelectOption,
  onNext,
  onBack,
  currentIndex,
  totalQuestions
}) {
  // Keyboard navigation: 1-4 to select, Enter to continue, Backspace to go back
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if an input or textarea is focused
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIndex = parseInt(e.key, 10) - 1;
        if (question.options[optionIndex]) {
          onSelectOption({
            ...question.options[optionIndex],
            optionsIndex: optionIndex
          });
        }
      } else if (e.key === 'Enter') {
        if (selectedOption) {
          e.preventDefault();
          onNext();
        }
      } else if (e.key === 'Backspace' && currentIndex > 0) {
        onBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question, selectedOption, onSelectOption, onNext, onBack, currentIndex]);

  const currentSection = sections.find((s) => s.id === question.sectionId) || sections[0];
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <div className="v5-question-screen">
      {/* Top Section & Progress Header */}
      <div className="v5-progress-header">
        <div className="v5-progress-header__top">
          <span className="v5-section-badge">
            SECTION {currentSection.id} OF 5 — {currentSection.label}
          </span>
          <span className="v5-question-counter">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
        </div>

        {/* 5-section segmented progress bar */}
        <div className="v5-sections-progress" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin="1" aria-valuemax={totalQuestions}>
          {sections.map((sec) => {
            const isCurrentSection = sec.id === currentSection.id;
            return (
              <div 
                key={sec.id} 
                className={`v5-section-col ${isCurrentSection ? 'v5-section-col--active' : ''}`}
              >
                <div className="v5-section-col__bars">
                  {sec.questions.map((qNum) => {
                    const qIndex = qNum - 1;
                    const isCompleted = qIndex < currentIndex;
                    const isActive = qIndex === currentIndex;
                    return (
                      <span
                        key={qNum}
                        className={`v5-progress-bar-seg ${
                          isCompleted ? 'v5-progress-bar-seg--completed' : ''
                        } ${isActive ? 'v5-progress-bar-seg--active' : ''}`}
                      />
                    );
                  })}
                </div>
                <span className="v5-section-col__name">{sec.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Content */}
      <div className="v5-question-body">
        <h2 className="v5-question-heading">
          {question.question}
        </h2>
        {question.subtext && (
          <p className="v5-question-subtext">
            {question.subtext}
          </p>
        )}

        {/* Options List */}
        <div className="v5-options-list" role="radiogroup" aria-label={question.question}>
          {question.options.map((opt, idx) => {
            const isSelected = selectedOption?.key === opt.key;
            return (
              <button
                type="button"
                key={opt.key}
                role="radio"
                aria-checked={isSelected}
                className={`v5-option-card ${isSelected ? 'v5-option-card--selected' : ''}`}
                onClick={() => onSelectOption({ ...opt, optionsIndex: idx })}
                id={`option-${question.id}-${opt.key}`}
              >
                <span className={`v5-radio-circle ${isSelected ? 'v5-radio-circle--selected' : ''}`}>
                  {isSelected && <span className="v5-radio-circle__dot" />}
                </span>
                <span className="v5-option-label">{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="v5-question-nav">
          <button
            type="button"
            className="v5-btn v5-btn--back"
            onClick={onBack}
            id="question-back-btn"
          >
            Back
          </button>

          <button
            type="button"
            className={`v5-btn ${selectedOption ? 'v5-btn--primary' : 'v5-btn--disabled'}`}
            disabled={!selectedOption}
            onClick={onNext}
            id="question-continue-btn"
          >
            {isLastQuestion ? 'Finish the diagnostic' : 'Continue'}
          </button>
        </div>

        {/* Keyboard shortcut hint */}
        <div className="v5-keyboard-hint">
          Keyboard: press 1-4 to choose an answer, Enter to continue.
        </div>
      </div>
    </div>
  );
}
