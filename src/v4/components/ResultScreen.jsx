import React, { useState } from 'react';
import { quizMeta } from '../data/quizData';
import { supabase } from '../../lib/supabase';

export default function ResultScreen({ results, answers, onRestart }) {
  const { archetype, structuralScore, weakestEngine, showDealFlowLine } = results;

  const [triedSentence, setTriedSentence] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!triedSentence.trim() || !name.trim() || !email.trim()) {
      setError('Please fill out all fields before sending.');
      return;
    }
    setIsSubmitting(true);
    try {
      const archetypeTag = (archetype?.name || 'OPERATOR').toUpperCase();
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0] || name.trim();
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      const record = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: '',
        quiz_tag: archetypeTag,
        score: structuralScore,
        answers: [
          {
            quiz_tag: archetypeTag,
            result_tag: archetypeTag,
            full_name: name,
            type: 'feedback_sentence',
            question: "Tell me in one sentence what you've already tried.",
            answer: triedSentence
          },
          {
            type: 'archetype',
            name: archetypeTag,
            headline: archetype.headline,
            score: structuralScore
          },
          {
            type: 'weakest_engine',
            title: weakestEngine.title,
            text: weakestEngine.text
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
        // Fallback without top-level quiz_tag column if table has custom column layout
        const fallbackRecord = { ...record };
        delete fallbackRecord.quiz_tag;
        const { error: fallbackErr } = await supabase.from('quiz_submissions').insert([fallbackRecord]);
        if (fallbackErr) {
          console.error('Fallback Supabase insertion error:', fallbackErr.message);
        } else {
          console.log('Successfully saved to Supabase quiz_submissions!');
        }
      } else {
        console.log('Successfully saved to Supabase quiz_submissions with quiz_tag:', archetypeTag);
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

      {/* Order 1: Archetype headline */}
      <div className="v4-archetype-headline-box">
        <h2 className="v4-archetype-headline">{archetype.headline}</h2>
      </div>

      {/* Order 2: One line of context */}
      <p className="v4-context-line">
        That's where you are. Here's what's actually holding it there.
      </p>

      {/* Order 3: The gap — this is the real result (Bigger and Bolder) */}
      <div className="v4-gap-box">
        <div className="v4-gap-title">{weakestEngine.title} Gap</div>
        <p className="v4-gap-text">{weakestEngine.text}</p>
      </div>

      {/* Order 4: Deal-flow line (conditional) */}
      {showDealFlowLine && (
        <p className="v4-deal-flow-line">
          And right now you can't reliably say where the next client comes from. That's what a missing engine looks like from the inside.
        </p>
      )}

      <hr className="v4-divider" />

      {/* Order 5: THE ASK — one question, one reply box */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="v4-reply-box-form">
          <h3 className="v4-ask-headline">
            Tell me in one sentence what you've already tried.
          </h3>

          {error && <div className="v4-form-error">{error}</div>}

          <div className="v4-form-group">
            <textarea
              className="v4-textarea"
              rows={3}
              placeholder="In one sentence, what have you tried so far?"
              value={triedSentence}
              onChange={(e) => setTriedSentence(e.target.value)}
              required
            />
          </div>

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
                required
              />
            </div>
          </div>

          <button type="submit" className="v4-send-tam-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      ) : (
        <div className="v4-thank-you-card">
          <div className="v4-thank-you-title">Submitted!</div>
          <p className="v4-thank-you-desc">
            Your response has been successfully submitted.
          </p>
        </div>
      )}

      {/* Order 6: What happens next */}
      <p className="v4-what-happens-next">
        I read these myself. You'll hear back from me, not a sequence.
      </p>

      {/* Order 7: Secondary link — small, underneath */}
      <div className="v4-secondary-link-wrap">
        <span className="v4-secondary-link-text">
          Not ready to write? Read the chapter on this:{' '}
          <a
            href="https://bossupva.com"
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
