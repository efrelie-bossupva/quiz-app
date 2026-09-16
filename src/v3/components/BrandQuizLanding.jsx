import React from 'react';
import { QUIZ_METADATA } from '../data/brandQuizData';
import logoImg from '../../assets/logo.png';

export default function BrandQuizLanding({ onStart }) {
  return (
    <div className="brand-landing-card">
      <div className="brand-logo-container">
        <img src={logoImg} alt="Brand Logo" className="brand-logo" />
      </div>

      <div className="brand-kicker">{QUIZ_METADATA.badge}</div>
      <h1 className="brand-main-title">{QUIZ_METADATA.title}</h1>
      <p className="brand-landing-subtitle">{QUIZ_METADATA.subtitle}</p>

      <div className="brand-landing-copy">
        <p>The market changed.</p>
        <p>AI changed what clients expect.</p>
        <p>Buying behavior changed.</p>
        <p>Referrals changed.</p>
        <p>Competition changed.</p>
        
        <p className="highlight">
          The question isn't whether your business survived the last eighteen months. It's whether the brand underneath it still fits the business you're running now.
        </p>
        
        <p>Seven questions. Under two minutes. No fluff.</p>
        
        <p className="highlight">
          You'll see your initial result before we ask for your email.
        </p>
      </div>

      <button className="brand-btn-primary" onClick={onStart}>
        SEE WHERE I STAND &rarr;
      </button>

      <p className="brand-microcopy-subtle">
        You'll see your initial result before we ask for your email. Takes under two minutes.
      </p>
    </div>
  );
}
