import React, { useState } from 'react';

export default function BrandResultTeaser({ resultBand, onSubmitLead, isSubmitting }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !businessName.trim() || !websiteUrl.trim()) {
      setErrorMsg('Please fill in all required fields to view your full result.');
      return;
    }
    setErrorMsg('');
    onSubmitLead({
      firstName: firstName.trim(),
      email: email.trim(),
      businessName: businessName.trim(),
      websiteUrl: websiteUrl.trim()
    });
  };

  return (
    <div className="result-teaser-card">
      <div className="teaser-result-header">
        <p className="teaser-result-label">YOUR RESULT</p>
        <h2 className="teaser-result-band">{resultBand.title}</h2>
      </div>

      <div className="teaser-text-box">
        {resultBand.teaser}
      </div>

      <div className="lead-form-box">
        <h3 className="lead-form-title">Want the full read?</h3>
        <p className="lead-form-subtitle">
          Enter your information and we'll send you exactly what your result means — and what to pay attention to next.
        </p>

        {errorMsg && (
          <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '16px' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              type="text"
              className="form-input"
              placeholder="e.g. Heather"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="e.g. heather@yourbrand.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="businessName">Business Name *</label>
            <input
              id="businessName"
              type="text"
              className="form-input"
              placeholder="e.g. Schaefer Advisory Group"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="websiteUrl">Website URL *</label>
            <input
              id="websiteUrl"
              type="text"
              className="form-input"
              placeholder="yourbrand.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              required
            />
            <span className="form-field-microcopy">
              Heather reviews this before conversations so she can see what your prospects are seeing.
            </span>
          </div>

          <button
            type="submit"
            className="brand-btn-primary"
            style={{ marginTop: '12px' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'PREPARING YOUR FULL RESULT...' : 'SEND ME MY FULL RESULT'}
          </button>
        </form>

        <p className="privacy-microcopy">
          No spam. Just your result and a short follow-up series from Heather.
        </p>
      </div>
    </div>
  );
}
