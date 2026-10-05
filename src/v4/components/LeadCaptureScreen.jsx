import React, { useState } from 'react';
import { quizMeta } from '../data/quizData';

export default function LeadCaptureScreen({ onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <>
      <div className="v4-quiz-header">
        <img
          src={quizMeta.formLogoUrl || quizMeta.logoUrl}
          alt="Beyond Hustle Logo"
          className="v4-quiz-logo"
        />
      </div>

      <form onSubmit={handleSubmit} className="v4-form-container">
        {error && <div style={{ color: '#e07a5f', fontSize: '14px', fontWeight: '500' }}>{error}</div>}

        <div className="v4-field-group">
          <label className="v4-field-label">
            Full Name <span>*</span>
          </label>
          <div className="v4-input-wrapper">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="v4-text-input"
              style={{ paddingLeft: '16px' }}
              required
            />
          </div>
        </div>

        <div className="v4-field-group">
          <label className="v4-field-label">
            Email <span>*</span>
          </label>
          <div className="v4-input-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="v4-input-icon"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l8.165 5.715c.661.463.992.695 1.351.784a2 2 0 00.968 0c.36-.09.69-.32 1.351-.784L22 7M6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C4.28 20 5.12 20 6.8 20z" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="v4-text-input"
              required
            />
          </div>
        </div>

        <div className="v4-field-group">
          <label className="v4-field-label">
            Phone <span>*</span>
          </label>
          <div className="v4-input-wrapper">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="v4-text-input"
              style={{ paddingLeft: '16px' }}
              required
            />
          </div>
        </div>
      </form>

      <div className="v4-footer-bar">
        <button className="v4-btn-back" onClick={onBack}>
          ‹ Back
        </button>

        <button
          className="v4-btn-next"
          style={{ backgroundColor: '#5B7A5E' }}
          onClick={handleSubmit}
        >
          <span>See Your Result</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" />
          </svg>
        </button>
      </div>
    </>
  );
}
