import React, { useState } from 'react';
import { sections } from '../data/quizData';
import { supabase } from '../../lib/supabase';

export default function LeadCaptureScreen({
  results,
  answers,
  onSubmit,
  onBack
}) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!firstName.trim()) {
      setError('Please enter your first name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const leadData = {
        first_name: firstName.trim(),
        email: email.trim(),
        marketing_consent: newsletterOptIn,
        quiz_tag: results?.profile?.tier || 'Unprepared',
        score: results?.totalScore || 0,
        max_score: results?.maxScore || 30,
        percentage: results?.percentage || 0,
        profile: results?.profile?.name || '',
        readiness_tier: results?.profile?.tier || 'Unprepared',
        strongest_area: results?.strongestAreaText || '',
        recommended_offer: results?.recommendedNextStep?.url || '',
        tags: results?.tags || [],
        categories: (results?.categories || []).map((c) => ({
          name: c.name,
          pct: c.pct,
          risk: c.risk
        })),
        answers: answers
      };

      // Try sending to Supabase if configured
      if (supabase) {
        try {
          const { error: dbErr } = await supabase.from('quiz_submissions').insert([
            {
              first_name: firstName.trim(),
              last_name: '',
              email: email.trim(),
              phone: '',
              quiz_tag: leadData.quiz_tag,
              score: leadData.score,
              answers: leadData
            }
          ]);
          if (dbErr) {
            console.warn('Supabase insert notice (quiz_submissions):', dbErr.message);
          } else {
            console.log('Successfully saved to Supabase quiz_submissions!');
          }
        } catch (dbErr) {
          console.warn('Supabase insert skipped or failed:', dbErr);
        }
      }

      // Store in localStorage for persistence
      try {
        localStorage.setItem(
          'remodel_readiness_lead',
          JSON.stringify({ firstName: firstName.trim(), email: email.trim(), submittedAt: new Date().toISOString() })
        );
      } catch (storageErr) {
        // ignore
      }

      onSubmit({ firstName: firstName.trim(), email: email.trim() });
    } catch (err) {
      console.error('Lead submission error:', err);
      // Still proceed so user gets to see their report
      onSubmit({ firstName: firstName.trim(), email: email.trim() });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="v5-lead-screen">
      {/* Top Header - Diagnostic Complete */}
      <div className="v5-progress-header">
        <div className="v5-progress-header__top">
          <span className="v5-section-badge v5-section-badge--complete">
            DIAGNOSTIC COMPLETE
          </span>
          <span className="v5-question-counter">
            15 of 15 answered
          </span>
        </div>

        {/* All bars filled */}
        <div className="v5-sections-progress" role="progressbar" aria-valuenow={15} aria-valuemin="1" aria-valuemax={15}>
          {sections.map((sec) => (
            <div key={sec.id} className="v5-section-col v5-section-col--complete">
              <div className="v5-section-col__bars">
                {sec.questions.map((qNum) => (
                  <span
                    key={qNum}
                    className="v5-progress-bar-seg v5-progress-bar-seg--completed"
                  />
                ))}
              </div>
              <span className="v5-section-col__name">{sec.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="v5-lead-body">
        <h2 className="v5-lead-title">
          Your Remodel Readiness Report Is Ready.
        </h2>

        <p className="v5-lead-intro">
          Your answers reveal how prepared you are to begin, where your biggest risks may be, and what you should address before moving forward.
        </p>

        <p className="v5-lead-prompt">
          Enter your details to receive your personalized results and remodeling recommendations.
        </p>

        <form onSubmit={handleSubmit} className="v5-lead-form" noValidate>
          {error && <div className="v5-lead-error" role="alert">{error}</div>}

          <div className="v5-form-group">
            <label htmlFor="lead-first-name" className="v5-label">First name</label>
            <input
              id="lead-first-name"
              type="text"
              className="v5-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="e.g. Alex"
              required
              autoFocus
            />
          </div>

          <div className="v5-form-group">
            <label htmlFor="lead-email" className="v5-label">Email address</label>
            <input
              id="lead-email"
              type="email"
              className="v5-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. alex@example.com"
              required
            />
          </div>

          <label className="v5-checkbox-label">
            <input
              type="checkbox"
              className="v5-checkbox"
              checked={newsletterOptIn}
              onChange={(e) => setNewsletterOptIn(e.target.checked)}
            />
            <span className="v5-checkbox-text">
              Yes, send me remodeling tips, training, and occasional offers from Smart Tools Construction Academy. Optional. You can unsubscribe at any time.
            </span>
          </label>

          <button
            type="submit"
            className="v5-btn v5-btn--primary v5-btn--full"
            disabled={isSubmitting}
            id="reveal-report-btn"
          >
            {isSubmitting ? 'Preparing Your Report...' : 'Reveal My Remodeling Readiness Report'}
          </button>
        </form>
      </div>
    </div>
  );
}
