import React, { useState } from 'react';
import { quizMeta } from '../data/quizData';
import { supabase } from '../../lib/supabase';

export default function LeadCaptureScreen({ results, answers, triedSentence, onRestart, onBack }) {
  const { archetype, structuralScore, weakestEngine } = results || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
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
    <div className="v4-result-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '24px 16px' }}>
      {/* Header Logo */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <img
          src={quizMeta.logoUrl}
          alt="Women Who Boss Up Logo"
          className="v4-quiz-logo"
          style={{ height: '70px', width: 'auto', margin: '0 auto' }}
        />
      </div>

      <form onSubmit={handleSubmit} className="v4-reply-box-form">
        {/* Dynamic / Static Heading matching the image style */}
        <div style={{ textAlign: 'left', marginBottom: '28px' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '28px',
            lineHeight: '1.25',
            fontWeight: 800,
            color: '#1D2127',
            marginBottom: '12px'
          }}>
            {archetype?.headline || "You're a Hustler. The business is you, and right now that's the whole ceiling."}
          </h1>
          <p style={{ fontSize: '16px', color: '#88827A', margin: 0, fontWeight: 400 }}>
            That's where you are. Put your information and I’ll tell you what’s your next step to find your client. 
          </p>
        </div>

        {error && <div className="v4-form-error" style={{ color: '#d9534f', marginBottom: '16px' }}>{error}</div>}

        {/* Inputs row */}
        <div className="v4-form-row" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div className="v4-form-group" style={{ flex: 1 }}>
            <label className="v4-field-label" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2b2b2b', marginBottom: '6px' }}>
              Your Name *
            </label>
            <input
              type="text"
              className="v4-text-input"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                fontSize: '14px',
                outline: 'none'
              }}
              placeholder="First & Last Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting || submitted}
              required
            />
          </div>

          <div className="v4-form-group" style={{ flex: 1 }}>
            <label className="v4-field-label" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2b2b2b', marginBottom: '6px' }}>
              Your Email *
            </label>
            <input
              type="email"
              className="v4-text-input"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                fontSize: '14px',
                outline: 'none'
              }}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting || submitted}
              required
            />
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#984351',
          borderRadius: '10px',
          overflow: 'hidden',
          marginTop: '20px'
        }}>
          <button
            type="button"
            onClick={onBack || onRestart}
            style={{
              backgroundColor: '#A89E9C',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 24px',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            ‹ Back
          </button>
          
          <div style={{ flex: 1 }} />

          <button
            type="submit"
            disabled={isSubmitting || submitted}
            style={{
              backgroundColor: '#C8665A',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: isSubmitting || submitted ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {isSubmitting ? 'Sending...' : submitted ? 'Submitted!' : 'Continue →'}
          </button>
        </div>
      </form>

      {/* Success notification */}
      {submitted && (
        <div className="v4-thank-you-card" style={{ marginTop: '20px', padding: '16px', backgroundColor: '#F4F9F5', borderRadius: '8px', border: '1px solid #D1E7DD' }}>
          <div className="v4-thank-you-title" style={{ fontWeight: 'bold', color: '#0F5132' }}>Submitted!</div>
          <p className="v4-thank-you-desc" style={{ margin: 0, fontSize: '14px', color: '#0F5132' }}>
            Your response has been successfully submitted.
          </p>
        </div>
      )}
    </div>
  );
}
