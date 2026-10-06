import React, { useState } from 'react';
import { quizMeta } from '../data/quizData';
import { supabase } from '../../lib/supabase';

export default function LeadCaptureScreen({ results, answers, triedSentence, onRestart }) {
  const { archetype, structuralScore, weakestEngine } = results || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in your name and email.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      const archetypeName = archetype?.name || 'Operator';
      const engineTitle = weakestEngine?.title || 'Known-For';
      const fullQuizTag = `${archetypeName} - ${engineTitle} Gap`;

      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0] || name.trim();
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      const record = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: '',
        quiz_tag: fullQuizTag,
        score: structuralScore,
        answers: [
          {
            quiz_tag: fullQuizTag,
            result_tag: fullQuizTag,
            full_name: name,
            type: 'feedback_sentence',
            question: "Tell me in one sentence what you've already tried.",
            answer: triedSentence || ''
          },
          {
            type: 'archetype',
            name: archetypeName,
            headline: archetype?.headline,
            score: structuralScore
          },
          {
            type: 'weakest_engine',
            title: weakestEngine?.title,
            text: weakestEngine?.text
          },
          ...(answers ? Object.entries(answers).map(([qId, ans]) => ({
            question_id: qId,
            answer: ans.label,
            score: ans.score
          })) : [])
        ]
      };

      let { error: dbError } = await supabase.from('quiz_submissions').insert([record]);
      if (dbError) {
        console.warn('Primary Supabase insertion notice:', dbError.message);
        const fallbackRecord = { ...record };
        delete fallbackRecord.quiz_tag;
        const { error: fallbackErr } = await supabase.from('quiz_submissions').insert([fallbackRecord]);
        if (fallbackErr) {
          console.error('Fallback Supabase insertion error:', fallbackErr.message);
        } else {
          console.log('Successfully saved to Supabase quiz_submissions!');
        }
      } else {
        console.log('Successfully saved to Supabase quiz_submissions with quiz_tag:', fullQuizTag);
      }
    } catch (err) {
      console.error('Error saving quiz submission:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
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

      <form onSubmit={handleSubmit} className="v4-reply-box-form">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#1D2127',
            marginBottom: '6px'
          }}>
            Where should Tam send your response?
          </h2>
          <p style={{ fontSize: '14px', color: '#7c736a', margin: 0 }}>
            Enter your contact details below to send your answer directly to Tam.
          </p>
        </div>

        {error && <div className="v4-form-error">{error}</div>}

        <div className="v4-form-row">
          <div className="v4-form-group" style={{ flex: 1 }}>
            <label className="v4-field-label">Your Name *</label>
            <input
              type="text"
              className="v4-text-input"
              style={{ paddingLeft: '14px' }}
              placeholder="First & Last Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting || submitted}
              required
            />
          </div>

          <div className="v4-form-group" style={{ flex: 1 }}>
            <label className="v4-field-label">Your Email *</label>
            <input
              type="email"
              className="v4-text-input"
              style={{ paddingLeft: '14px' }}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting || submitted}
              required
            />
          </div>
        </div>

        <button type="submit" className="v4-send-tam-btn" disabled={isSubmitting || submitted}>
          {isSubmitting ? 'Sending...' : submitted ? 'Sent!' : 'Send it to Tam'}
        </button>
      </form>

      {/* Success notification under the form */}
      {submitted && (
        <div className="v4-thank-you-card" style={{ marginTop: '20px' }}>
          <div className="v4-thank-you-title">Submitted!</div>
          <p className="v4-thank-you-desc">
            Your response has been successfully submitted.
          </p>
        </div>
      )}

      {/* What happens next */}
      <p className="v4-what-happens-next">
       I read these myself. You'll hear back from me directly and what’s your next step.

      </p>

      {/* Secondary link */}
      <div className="v4-secondary-link-wrap">
        <span className="v4-secondary-link-text">
          Not ready to write? Read the chapter on this:{' '}
          <a
            href="https://bossupva.com/beyond-the-hustle-book"
            target="_blank"
            rel="noopener noreferrer"
            className="v4-secondary-link"
          >
            Beyond Hustle, Chapter 9
          </a>
        </span>
      </div>

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <button onClick={onRestart} className="v4-retake-btn">
          Retake Diagnostic
        </button>
      </div>
    </div>
  );
}
