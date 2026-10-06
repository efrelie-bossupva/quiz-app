import React, { useState } from 'react';
import { quizMeta } from '../data/quizData';

export default function ResultScreen({
  results,
  initialSentence,
  onProceed,
  onRestart
}) {
  const { archetype, weakestEngine, showDealFlowLine } = results || {};

  const [sentence, setSentence] = useState(initialSentence || '');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();

    // Prevent submitting more than once
    if (submitted) {
      return;
    }

    // Validate sentence
    if (!sentence.trim()) {
      setError(
        'Please fill in what you have tried before proceeding.'
      );
      return;
    }

    setError('');

    // Mark final submission as complete
    setSubmitted(true);

    // Send sentence back to App.jsx
    if (typeof onProceed === 'function') {
      onProceed(sentence.trim());
    }
  };

  return (
    <div className="v4-result-container">

      {/* =========================
          LOGO
      ========================== */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '24px'
        }}
      >
        <img
          src={quizMeta.logoUrl}
          alt="Beyond Hustle Logo"
          className="v4-quiz-logo"
          style={{
            margin: '0 auto'
          }}
        />
      </div>

      {/* =========================
          ARCHETYPE HEADLINE
      ========================== */}
      <div className="v4-archetype-headline-box">
        <h2 className="v4-archetype-headline">
          {archetype?.headline}
        </h2>
      </div>

      {/* =========================
          CONTEXT LINE
      ========================== */}
      <p className="v4-context-line">
        That's where you are. Put your information and I’ll tell
        you what’s your next step to find your client.
      </p>

      {/* =========================
          GAP BOX
      ========================== */}
      <div className="v4-gap-box">
        <div className="v4-gap-title">
          {weakestEngine?.badgeTitle || `${weakestEngine?.title} GAP`}
        </div>

        <p className="v4-gap-text">
          {weakestEngine?.text}
        </p>
      </div>

      {/* =========================
          DEAL FLOW LINE
      ========================== */}
      {showDealFlowLine && (
        <p className="v4-deal-flow-line">
          And right now you can't reliably say where the next
          client comes from. That's what a missing engine looks
          like from the inside.
        </p>
      )}

      <hr className="v4-divider" />

      {/* =========================
          FINAL ANSWER
      ========================== */}
      <form
        onSubmit={handleNext}
        className="v4-reply-box-form"
      >
        <h3 className="v4-ask-headline">
          Tell me in one sentence what you've already tried.
        </h3>

        {/* Error */}
        {error && (
          <div className="v4-form-error">
            {error}
          </div>
        )}

        {/* Textarea */}
        <div className="v4-form-group">
          <textarea
            className="v4-textarea"
            rows={3}
            placeholder="In one sentence, what have you tried so far?"
            value={sentence}
            onChange={(e) => {
              setSentence(e.target.value);

              if (error) {
                setError('');
              }
            }}
            disabled={submitted}
            required
          />
        </div>

        {/* =========================
            FINAL SUBMIT BUTTON
        ========================== */}
        <button
          type="submit"
          className="v4-send-tam-btn"
          disabled={submitted}
          style={{
            marginTop: '16px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: submitted
              ? 'not-allowed'
              : 'pointer',
            opacity: submitted ? 0.7 : 1
          }}
        >
          <span>
            {submitted
              ? 'Sent!'
              : 'Send it to Tam'}
          </span>

          {!submitted && (
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
          )}
        </button>

        {/* =========================
            WHAT HAPPENS NEXT
        ========================== */}
        <p className="v4-what-happens-next">
          I read these myself. You'll hear back from me directly
          and what's your next step.
        </p>

        {/* =========================
            SUCCESS MESSAGE
        ========================== */}
        {submitted && (
          <div
            style={{
              marginTop: '16px',
              padding: '14px 16px',
              borderRadius: '8px',
              backgroundColor: '#F4F9F5',
              border: '1px solid #D1E7DD',
              color: '#0F5132',
              textAlign: 'center',
              fontSize: '14px'
            }}
          >
            Your answer has been submitted successfully.
          </div>
        )}
      </form>

      {/* =========================
          SECONDARY LINK
      ========================== */}
      <div className="v4-secondary-link-wrap">
        <span className="v4-secondary-link-text">
          Not ready to write? Read the chapter on this:{' '}
          <a
            href={quizMeta.chapterUrl || '#'}
            className="v4-secondary-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beyond Hustle, Chapter 9
          </a>
        </span>
      </div>

      {/* =========================
          RETAKE
      ========================== */}
      {typeof onRestart === 'function' && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            type="button"
            id="v4-retake-btn"
            className="v4-retake-btn"
            onClick={onRestart}
          >
            Retake Diagnostic
          </button>
        </div>
      )}

    </div>
  );
}
