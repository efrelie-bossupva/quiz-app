import React, { useState } from 'react';
import ReviewAnswersModal from './ReviewAnswersModal';

export default function ResultScreen({
  results,
  answers,
  leadInfo,
  onRestart
}) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [checkedActions, setCheckedActions] = useState({});
  const [showIntegrationPreview, setShowIntegrationPreview] = useState(false);

  const toggleAction = (cardKey, idx) => {
    const key = `${cardKey}-${idx}`;
    setCheckedActions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const todayStr = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date());

  const userName = leadInfo?.firstName || 'Homeowner';

  return (
    <div className="v5-result-screen">
      {/* Hero Result Section */}
      <div className="v5-result-hero">
        <div className="v5-result-hero__left">
          <div className="v5-readiness-profile-badge">
            Your readiness profile: {results.profile.name}
          </div>
          <h2 className="v5-result-headline">
            {results.profile.headline}
          </h2>
          <div className="v5-result-description">
            {results.profile.description.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {/* Right Gauge Card */}
        <div className="v5-score-gauge-card">
          <div className="v5-score-gauge-card__number">
            {results.percentage}%
          </div>
          <div className="v5-score-gauge-card__tier">
            {results.profile.tier}
          </div>
          <div className="v5-score-gauge-card__points">
            {results.totalScore} of {results.maxScore} readiness points
          </div>

          {/* Segmented Tier Bar */}
          <div className="v5-gauge-meter">
            <div className="v5-gauge-meter__bar">
              {['Unprepared', 'At Risk', 'Almost Ready', 'Confident Planner'].map((tierName, idx) => {
                const isActive = idx === results.profile.tierIndex;
                const isPast = idx < results.profile.tierIndex;
                return (
                  <div
                    key={tierName}
                    className={`v5-gauge-seg ${isActive ? 'v5-gauge-seg--active' : ''} ${isPast ? 'v5-gauge-seg--past' : ''}`}
                    title={tierName}
                  >
                    {isActive && <div className="v5-gauge-pointer" />}
                  </div>
                );
              })}
            </div>
            <div className="v5-gauge-labels">
              <span>Unprepared</span>
              <span>At Risk</span>
              <span>Almost Ready</span>
              <span>Confident<br />Planner</span>
            </div>
          </div>

          <p className="v5-score-disclaimer">
            This is an assessment score based on your answers. It is not a scientifically validated probability of project success. Readiness also depends on project complexity and on local code and licensing requirements.
          </p>
        </div>
      </div>

      <div className="v5-divider" />

      {/* Strongest & Biggest Risk Summary Grid */}
      <div className="v5-callout-grid">
        <div className="v5-callout-card">
          <span className="v5-callout-card__label">Your strongest area</span>
          <h3 className="v5-callout-card__title">{results.strongestAreaText}</h3>
          <p className="v5-callout-card__desc">{results.strongestDesc}</p>
        </div>

        <div className="v5-callout-card">
          <span className="v5-callout-card__label">Your biggest risk</span>
          <h3 className="v5-callout-card__title">{results.biggestRiskText}</h3>
          <p className="v5-callout-card__desc">{results.biggestRiskDesc}</p>
        </div>
      </div>

      <div className="v5-divider" />

      {/* Risk Breakdown Bars */}
      <section className="v5-breakdown-section" aria-labelledby="v5-breakdown-heading">
        <h3 id="v5-breakdown-heading" className="v5-section-title">
          Your remodeling risk breakdown
        </h3>
        <p className="v5-section-desc">
          Each indicator is calculated from the answers related to that area. Longer bars mean stronger preparation.
        </p>

        <div className="v5-breakdown-list">
          {results.categories.map((cat) => (
            <div key={cat.key} className="v5-breakdown-item">
              <div className="v5-breakdown-item__meta">
                <span className="v5-breakdown-item__name">{cat.name}</span>
                <span className="v5-breakdown-item__score">
                  <strong>{cat.pct}%</strong> <span className={`v5-risk-tag v5-risk-tag--${cat.risk.toLowerCase().replace(/ /g, '-')}`}>{cat.risk}</span>
                </span>
              </div>
              <div className="v5-breakdown-track">
                <div
                  className="v5-breakdown-fill"
                  style={{ width: `${Math.max(cat.pct, 4)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="v5-divider" />

      {/* Biggest Blind Spots */}
      <section className="v5-blindspots-section" aria-labelledby="v5-blindspots-heading">
        <h3 id="v5-blindspots-heading" className="v5-section-title">
          Your Biggest Remodeling Blind Spot
        </h3>
        <p className="v5-section-desc">
          {results.blindSpotSubtitle}
        </p>

        <div className="v5-blindspots-list">
          {results.blindSpotCards.map((spot, spotIdx) => (
            <div key={spot.key} className="v5-blindspot-card">
              <span className="v5-blindspot-card__tag">
                {spot.title}, {spot.scorePct}%
              </span>
              <h4 className="v5-blindspot-card__title">
                {spot.headline}
              </h4>
              <p className="v5-blindspot-card__desc">
                {spot.description}
              </p>

              <div className="v5-blindspot-card__actions">
                <span className="v5-actions-header">Recommended actions</span>
                <div className="v5-checklist">
                  {spot.actions.map((act, actIdx) => {
                    const isChecked = !!checkedActions[`${spot.key}-${actIdx}`];
                    return (
                      <label key={actIdx} className="v5-check-item">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAction(spot.key, actIdx)}
                          className="v5-checkbox"
                        />
                        <span className={`v5-check-text ${isChecked ? 'v5-check-text--checked' : ''}`}>
                          {act}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="v5-divider" />

      {/* Reading Your Answers */}
      <section className="v5-reading-answers-section" aria-labelledby="v5-reading-heading">
        <h3 id="v5-reading-heading" className="v5-section-title">
          Reading your answers
        </h3>
        <p className="v5-section-desc">
          What stands out when your answers are read together.
        </p>

        <div className="v5-reading-quotes">
          {results.readingYourAnswers.map((quote, qIdx) => (
            <div key={qIdx} className="v5-quote-card">
              <p>{quote}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="v5-divider" />

      {/* Two Column: Cost vs Change */}
      <div className="v5-cost-change-grid">
        <div className="v5-column-card">
          <h4 className="v5-column-card__title">What this could cost you</h4>
          <p className="v5-column-card__desc">The consequences most tied to your weakest areas.</p>
          <ul className="v5-cost-list">
            {results.costItems.map((it, i) => (
              <li key={i}>
                <strong>{it.text}</strong>
                <span>{it.areaName}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="v5-column-card">
          <h4 className="v5-column-card__title">What needs to change</h4>
          <p className="v5-column-card__desc">Practical priorities, in the order to address them.</p>
          <ol className="v5-priority-list">
            {results.changeItems.map((it, i) => (
              <li key={i}>
                <span className="v5-num">{i + 1}</span>
                <div>
                  <strong>{it.text}</strong>
                  <span>{it.areaName}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="v5-divider" />

      {/* Recommended Next Step Card */}
      <section className="v5-next-step-section" aria-labelledby="v5-next-step-heading">
        <h3 id="v5-next-step-heading" className="v5-section-title">
          Recommended next step
        </h3>
        <p className="v5-section-desc">
          One recommendation, matched to your readiness, your risks, and the support you asked for.
        </p>

        <div className="v5-recommendation-card">
          <h4 className="v5-recommendation-card__title">
            {results.recommendedNextStep.title}
          </h4>
          <p className="v5-recommendation-card__body">
            {results.recommendedNextStep.body}
          </p>

          <div className="v5-recommendation-actions">
            <a
              href={results.recommendedNextStep.url}
              target="_blank"
              rel="noopener noreferrer"
              className="v5-btn v5-btn--primary v5-recommendation-card__btn"
            >
              {results.recommendedNextStep.btnText}
            </a>

            {results.recommendedNextStep.also && (
              <a
                href={results.recommendedNextStep.also.url}
                target="_blank"
                rel="noopener noreferrer"
                className="v5-btn v5-btn--outline v5-recommendation-card__btn-secondary"
                style={{ marginLeft: '12px' }}
              >
                {results.recommendedNextStep.also.label}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Integration placeholder note */}
        {/* Action Buttons Row */}
        <div className="v5-actions-row">
          <button
            type="button"
            className="v5-btn v5-btn--back"
            onClick={onRestart}
            id="retake-assessment-btn"
          >
            Retake the assessment
          </button>
        </div>

      {/* Disclaimer */}
      <footer className="v5-result-footer">
        <p>
          This diagnostic is educational and based only on your answers. It doesn't assess your property, your contractor, or your local requirements, and it isn't professional, legal, or engineering advice. Some work, such as structural, electrical, plumbing, and gas, may legally require permits and licensed professionals where you live. Confirm requirements with your local building department.
        </p>
      </footer>

      {/* Review Modal */}
      {showReviewModal && (
        <ReviewAnswersModal
          answers={answers}
          onClose={() => setShowReviewModal(false)}
        />
      )}
    </div>
  );
}
