import React, { useState } from 'react';
import './index.css';
import './App.css';
import logoImg from '../assets/logo.jpg'; // <-- Updated relative path here
import {
  QUIZ_METADATA,
  QUIZ_QUESTIONS,
  getResultBand,
  getPersonalizedInsights,
  generateHighestConcernSummary
} from './data/brandQuizData';
import BrandQuizLanding from './components/BrandQuizLanding';
import BrandQuestionCard from './components/BrandQuestionCard';
import BrandResultTeaser from './components/BrandResultTeaser';
import BrandFullResult from './components/BrandFullResult';
import { supabase } from '../lib/supabase';

export default function AppV3() {
  const [screen, setScreen] = useState('landing'); // landing, quiz, teaser, fullResult
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [resultBand, setResultBand] = useState(null);
  const [leadData, setLeadData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Analytics logging helper
  const logEvent = (eventName, payload = {}) => {
    console.log(`[Analytics Event: ${eventName}]`, payload);
  };

  const handleStart = () => {
    logEvent('quiz_started');
    setScreen('quiz');
    setCurrentIndex(0);
  };

  const handleSelectOption = (score) => {
    const currentQ = QUIZ_QUESTIONS[currentIndex];
    setAnswers((prev) => ({
      ...prev,
      [currentQ.key]: score
    }));
  };

  const handleNext = () => {
    const currentQ = QUIZ_QUESTIONS[currentIndex];
    logEvent(`quiz_${currentQ.id}_completed`, {
      question: currentQ.question,
      score: answers[currentQ.key]
    });

    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Finished all 7 questions
      let scoreSum = 0;
      QUIZ_QUESTIONS.forEach((q) => {
        scoreSum += answers[q.key] !== undefined ? answers[q.key] : 0;
      });

      const band = getResultBand(scoreSum);
      setTotalScore(scoreSum);
      setResultBand(band);
      logEvent('quiz_result_viewed', { totalScore: scoreSum, bandTitle: band.title });
      setScreen('teaser');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setScreen('landing');
    }
  };

  const handleSubmitLead = async (formData) => {
    setIsSubmitting(true);
    setLeadData(formData);
    logEvent('quiz_lead_captured', { ...formData, totalScore, bandTitle: resultBand.title });

    const highestConcernSummary = generateHighestConcernSummary(answers);

    const payload = {
      quiz_name: QUIZ_METADATA.name,
      first_name: formData.firstName,
      email: formData.email,
      business_name: formData.businessName,
      website_url: formData.websiteUrl,
      quiz_total_score: totalScore,
      quiz_result_band: resultBand.title,
      tag: resultBand.tag,
      quiz_tag: resultBand.tag,
      highest_concern_summary: highestConcernSummary,
      q1_inquiries: answers.q1_inquiries ?? 0,
      q2_ai: answers.q2_ai ?? 0,
      q3_positioning_age: answers.q3_positioning_age ?? 0,
      q4_brand_relevance: answers.q4_brand_relevance ?? 0,
      q5_pricing: answers.q5_pricing ?? 0,
      q6_client_sources: answers.q6_client_sources ?? 0,
      q7_website_confidence: answers.q7_website_confidence ?? 0,
      created_at: new Date().toISOString()
    };

    console.log('[GHL Payload Ready]', payload);

    try {
      // Primary save target: quiz_submissions (with explicit business_name, website_url & quiz_tag)
      const submissionRecord = {
        first_name: formData.firstName,
        last_name: '',
        email: formData.email,
        phone: '',
        business_name: formData.businessName,
        website_url: formData.websiteUrl,
        score: totalScore,
        quiz_tag: resultBand.tag,
        answers: [
          {
            quiz_tag: resultBand.tag,
            result_tag: resultBand.tag,
            quiz_name: QUIZ_METADATA.name,
            business_name: formData.businessName,
            website_url: formData.websiteUrl,
            result_band: resultBand.title,
            highest_concern_summary: highestConcernSummary,
            total_score: totalScore
          },
          ...QUIZ_QUESTIONS.map((q) => ({
            question_id: q.id,
            question_key: q.key,
            question: q.question,
            points: answers[q.key] ?? 0,
            answer: q.options.find((o) => o.score === answers[q.key])?.text || ''
          }))
        ]
      };

      let { error: subErr } = await supabase.from('quiz_submissions').insert([submissionRecord]);
      if (subErr) {
        console.warn('Attempt with explicit business_name/website_url top-level columns note:', subErr.message);
        // Fallback without explicit top-level columns if schema is strictly standard
        const legacyRecord = { ...submissionRecord };
        delete legacyRecord.business_name;
        delete legacyRecord.website_url;
        
        const { error: fallbackErr } = await supabase.from('quiz_submissions').insert([legacyRecord]);
        if (fallbackErr) {
          console.error('Supabase quiz_submissions fallback error:', fallbackErr);
          await supabase.from('brand_diagnostic_leads').insert([payload]);
        } else {
          console.log('Successfully saved to Supabase quiz_submissions (standard schema)!');
        }
      } else {
        console.log('Successfully saved to Supabase quiz_submissions with business_name and website_url!');
      }
    } catch (err) {
      console.error('Lead storage notification:', err);
    }

    setIsSubmitting(false);
    setScreen('fullResult');
  };

  const handleCtaClick = () => {
    logEvent('quiz_cta_clicked', { ctaText: 'BEGIN A CONVERSATION', leadData });
    logEvent('quiz_booking_started');
    alert(`Thank you, ${leadData?.firstName || 'there'}! Heather will review your brand at ${leadData?.websiteUrl || 'your website'} before your conversation.`);
  };

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const selectedScore = answers[currentQ?.key] ?? null;
  const insights = resultBand ? getPersonalizedInsights(answers) : [];

  return (
    <div className="brand-quiz-container">
      {/* Top Navbar */}
      <nav className="brand-top-navbar">
        <div className="navbar-brand-name">
          <img src={logoImg} alt="Heather Schaefer" className="brand-navbar-logo" />
        </div>
        <span className="navbar-brand-tag">BRANDING YOU BIG</span>
      </nav>

      <div className="brand-quiz-wrapper">
        {screen === 'landing' && <BrandQuizLanding onStart={handleStart} />}

        {screen === 'quiz' && (
          <BrandQuestionCard
            question={currentQ}
            totalQuestions={QUIZ_QUESTIONS.length}
            currentIndex={currentIndex}
            selectedScore={selectedScore}
            onSelectOption={handleSelectOption}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {screen === 'teaser' && (
          <BrandResultTeaser
            resultBand={resultBand}
            onSubmitLead={handleSubmitLead}
            isSubmitting={isSubmitting}
          />
        )}

        {screen === 'fullResult' && (
          <BrandFullResult
            leadData={leadData}
            resultBand={resultBand}
            insights={insights}
            onCtaClick={handleCtaClick}
          />
        )}
      </div>
    </div>
  );
}
