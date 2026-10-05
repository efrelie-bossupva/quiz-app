import React from 'react';
import { quizMeta } from '../data/quizData';

export default function QuestionScreen({
  question,
  selectedOption,
  onSelectOption,
  onNext,
  onBack,
  currentIndex,
  totalQuestions
}) {
  return (
    <>
      <div className="v4-quiz-header">
        <img
          src={quizMeta.logoUrl}
          alt="Beyond Hustle Logo"
          className="v4-quiz-logo"
        />
      </div>

      <div className="v4-question-body">
        <div className="v4-category-tag">
          {question.category} &nbsp;·&nbsp; {question.subCategory} &nbsp;({currentIndex + 1} of {totalQuestions})
        </div>
        <h2 className="v4-question-title">{question.question}</h2>

        <div className="v4-options-list">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOption && selectedOption.key === opt.key;
            return (
              <div
                key={idx}
                className={`v4-option-bubble ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectOption(opt)}
              >
                <div className="v4-radio-dot">
                  {isSelected && <div className="v4-radio-dot-inner" />}
                </div>
                <span>{opt.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="v4-footer-bar">
        <button
          className="v4-btn-back"
          onClick={onBack}
        >
          ‹ Back
        </button>

        <button
          className="v4-btn-next"
          disabled={!selectedOption}
          onClick={onNext}
        >
          <span>Continue</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" />
          </svg>
        </button>
      </div>
    </>
  );
}
