import React from 'react';
import { quizMeta } from '../data/quizData';

export default function HeroScreen({ onStart }) {
  return (
    <div className="bh-diagnostic-wrap">
      <div className="bh-pill-badge">
        <span className="bh-pill-dot"></span>
        <span className="bh-pill-badge-text">{quizMeta.title}</span>
      </div>

      <h1 className="bh-headline">
        Freedom <span className="bh-gradient-word">Stage Quiz</span>
      </h1>

      <p className="bh-subheadline">{quizMeta.heroSubtitle}</p>

      <div className="bh-image-wrap">
        <div className="bh-image">
          <img
            src={quizMeta.heroImageUrl}
            alt="Beyond Hustle Business Diagnostic"
          />
        </div>
      </div>

      <p className="bh-meta">{quizMeta.metaText}</p>
      <p className="bh-description">{quizMeta.description}</p>

      <button className="bh-begin-btn" onClick={onStart}>
        <span className="bh-pill-dot" style={{ backgroundColor: '#ffffff' }}></span>
        Begin Quiz
      </button>
    </div>
  );
}
