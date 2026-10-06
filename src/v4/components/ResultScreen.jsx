import React, { useState } from 'react';
import { quizMeta } from '../data/quizData';

export default function ResultScreen({ results, initialSentence, onProceed }) {
  const { archetype, weakestEngine, showDealFlowLine } = results;
  const [sentence, setSentence] = useState(initialSentence || '');
  const [error, setError] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    if (!sentence.trim()) {
      setError('Please fill in what you have tried before proceeding.');
      return;
    }
    onProceed(sentence);
  };

  return (
    <div className="v4-result-container">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <img
          src={quizMeta.logoUrl}
          alt="Beyond Hustle Logo"
          className="v4-quiz-logo"
          style={{ margin: '0 auto' }}
        />
      </div>

      {/* Order 1: Archetype headline */}
      <div className="v4-archetype-headline-box">
        <h2 className="v4-archetype-headline">{archetype.headline}</h2>
      </div>

      {/* Order 2: One line of context */}
      <p className="v4-context-line">
        That's where you are. Here's what's actually holding it there.
      </p>

      {/* Order 3: The gap box — real result */}
      <div className="v4-gap-box">
        <div className="v4-gap-title">{weakestEngine.title} Gap</div>
        <p className="v4-gap-text">{weakestEngine.text}</p>
      </div>

      {/* Order 4: Deal-flow line */}
      {showDealFlowLine && (
        <p className="v4-deal-flow-line">
          And right now you can't reliably say where the next client comes from. That's what a missing engine looks like from the inside.
        </p>
      )}

      <hr className="v4-divider" />

      {/* Order 5: Tell me in one sentence textarea */}
      <form onSubmit={handleNext} className="v4-reply-box-form">
        <h3 className="v4-ask-headline">
          Tell me in one sentence what you've already tried.
        </h3>

        {error && <div className="v4-form-error">{error}</div>}

        <div className="v4-form-group">
          <textarea
            className="v4-textarea"
            rows={3}
            placeholder="In one sentence, what have you tried so far?"
            value={sentence}
            onChange={(e) => {
              setSentence(e.target.value);
              if (error) setError('');
            }}
            required
          />
        </div>

        <button
          type="submit"
          className="v4-send-tam-btn"
          style={{
            marginTop: '16px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <span>Submit Answer & Continue</span>
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
      </form>
    </div>
  );
}
