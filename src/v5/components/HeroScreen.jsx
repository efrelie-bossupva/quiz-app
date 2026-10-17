import React from 'react';
import { quizMeta } from '../data/quizData';

export default function HeroScreen({ onStart }) {
  return (
    <section className="v5-hero" aria-labelledby="v5-hero-heading">
      <div className="v5-hero__badge">
        <span className="v5-hero__badge-sparkle">✦</span> {quizMeta.badge}
      </div>

      <div className="v5-hero__title-box">
        <h1 id="v5-hero-heading" className="v5-hero__title">
          Are You Really Ready<br />
          to Start Your<br />
          <span className="v5-hero__title-accent">Remodel?</span>
        </h1>
      </div>

      <p className="v5-hero__subtitle">
        {quizMeta.heroSubtitle}
      </p>

      <div className="v5-hero__actions">
        <button
          type="button"
          className="v5-btn v5-btn--primary v5-hero__btn"
          onClick={onStart}
          id="start-diagnostic-btn"
        >
          {quizMeta.ctaText}
          <span className="v5-btn__arrow" aria-hidden="true">→</span>
        </button>
        <span className="v5-hero__meta">
          {quizMeta.metaInfo}
        </span>
      </div>
    </section>
  );
}
