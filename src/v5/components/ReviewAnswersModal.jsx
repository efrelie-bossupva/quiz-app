import React from 'react';
import { questions } from '../data/quizData';

export default function ReviewAnswersModal({ answers, onClose }) {
  return (
    <div className="v5-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="review-modal-title">
      <div className="v5-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="v5-modal-header">
          <h2 id="review-modal-title" className="v5-modal-title">Review Your Answers</h2>
          <button 
            type="button" 
            className="v5-modal-close" 
            onClick={onClose}
            aria-label="Close review"
          >
            ✕
          </button>
        </div>

        <div className="v5-modal-body">
          {questions.map((q, idx) => {
            const selected = answers[q.id];
            return (
              <div key={q.id} className="v5-review-item">
                <div className="v5-review-item__meta">
                  <span className="v5-review-item__num">Question {idx + 1} of 15</span>
                  <span className="v5-review-item__section">{q.sectionName}</span>
                </div>
                <h4 className="v5-review-item__question">{q.question}</h4>
                <div className="v5-review-item__options">
                  {q.options.map((opt) => {
                    const isSelected = selected?.key === opt.key;
                    return (
                      <div 
                        key={opt.key} 
                        className={`v5-review-option ${isSelected ? 'v5-review-option--selected' : ''}`}
                      >
                        <span className={`v5-radio-circle ${isSelected ? 'v5-radio-circle--selected' : ''}`}>
                          {isSelected && <span className="v5-radio-circle__dot" />}
                        </span>
                        <span className="v5-review-option__text">{opt.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="v5-modal-footer">
          <button type="button" className="v5-btn v5-btn--back" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
