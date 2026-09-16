import React from 'react';

export default function BrandFullResult({ leadData, resultBand, insights }) {
  const firstName = leadData?.firstName || 'Friend';
  const band = resultBand;
  const isStructurallySound = band.title === 'STRUCTURALLY SOUND';
  const isSmellSmoke = band.title === 'YOU SMELL SMOKE';
  const isAlreadyBurned = band.title === "IT'S ALREADY BURNED";

  // Target booking URL
  const BOOKING_URL = 'https://www.heatherschaeferhq.com/booking-calendar/discovery-call?referral=service_list_widget';

  // Handler to bypass any parent popup and redirect directly
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.href = BOOKING_URL;
  };

  return (
    <div className="full-result-wrapper">
      {/* Hero Header */}
      <div className="result-hero-banner">
        <p className="personal-greeting">{firstName}, HERE'S WHAT YOUR RESULT IS TELLING US:</p>
        <h2 className="result-band-main-title">{band.title}</h2>
        <p className="result-lead-paragraph">{band.fullResult.lead}</p>
      </div>

      {/* Answer-based personalized insights */}
      {insights && insights.length > 0 && (
        <div className="result-section-card">
          <p className="section-tag-label">KEY OBSERVATIONS FROM YOUR DIAGNOSTIC</p>
          {insights.map((item, idx) => (
            <div key={idx} className="insight-card">
              <div className="insight-topic">{item.topic.toUpperCase()}</div>
              <div className="insight-text">"{item.text}"</div>
            </div>
          ))}
        </div>
      )}

      {/* Band 1: STRUCTURALLY SOUND */}
      {isStructurallySound && (
        <>
          <div className="result-section-card">
            <p className="section-tag-label">{band.fullResult.watchSectionTitle}</p>
            <div className="section-body-text" style={{ whiteSpace: 'pre-line' }}>
              {band.fullResult.watchText}
            </div>
          </div>

          <div className="result-section-card">
            <p className="section-tag-label">{band.fullResult.subtleSectionTitle}</p>
            <div className="section-body-text" style={{ whiteSpace: 'pre-line' }}>
              {band.fullResult.subtleText}
            </div>
          </div>

          <div className="cta-block">
            <button className="brand-btn-primary" onClick={handleCtaClick}>
              Begin Conversation
            </button>
            <p className="cta-microcopy">{band.fullResult.secondaryMicrocopy}</p>
          </div>
        </>
      )}

      {/* Band 2: YOU SMELL SMOKE */}
      {isSmellSmoke && (
        <>
          <div className="result-section-card">
            <p className="section-tag-label">WHAT YOU'RE FEELING</p>
            <div className="points-list">
              {band.fullResult.paragraphs.map((p, i) => (
                <div key={i} className="point-item">
                  <span className="point-bullet">&bull;</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <p className="section-tag-label" style={{ marginTop: '28px' }}>
              {band.fullResult.underneathTitle}
            </p>
            <div className="points-list">
              {band.fullResult.underneathPoints.map((pt, idx) => (
                <div key={idx} className="point-item">
                  <span className="point-bullet">&bull;</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="editorial-statement-box">
              <p className="editorial-statement-text">{band.fullResult.editorialStatement}</p>
              <p className="editorial-supporting-line">{band.fullResult.supportingLine}</p>
            </div>
          </div>

          <div className="cta-block">
            <button className="brand-btn-primary" onClick={handleCtaClick}>
              Begin Conversation
            </button>
            <p className="cta-microcopy">{band.fullResult.microcopy}</p>
          </div>
        </>
      )}

      {/* Band 3: IT'S ALREADY BURNED */}
      {isAlreadyBurned && (
        <>
          <div className="result-section-card">
            <p className="section-tag-label">THE REALITY</p>
            <div className="points-list">
              {band.fullResult.points.map((pt, i) => (
                <div key={i} className="point-item">
                  <span className="point-bullet">&bull;</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="section-body-text" style={{ marginTop: '24px' }}>
              {band.fullResult.bodyText.map((p, idx) => (
                <p key={idx} style={{ marginBottom: '12px' }}>{p}</p>
              ))}
            </div>
          </div>

          {/* Heather's Story */}
          <div className="heathers-story-card">
            <p className="section-tag-label" style={{ color: 'var(--accent-gold)' }}>HEATHER'S STORY</p>
            <h3 className="story-headline">{band.fullResult.heatherStory.headline}</h3>
            
            <p>{band.fullResult.heatherStory.body1}</p>
            <p className="quote-highlight">{band.fullResult.heatherStory.body2}</p>
            <p>{band.fullResult.heatherStory.body3}</p>

            <div className="rebuild-lines">
              {band.fullResult.heatherStory.rebuildLines.map((line, idx) => (
                <span key={idx}>{line}</span>
              ))}
            </div>
          </div>

          <div className="cta-block">
            <button className="brand-btn-primary" onClick={handleCtaClick}>
              Begin Conversation
            </button>
          </div>
        </>
      )}
    </div>
  );
}
