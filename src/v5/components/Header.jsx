import React from 'react';
import SmartToolsLogo from './SmartToolsLogo';
import './Header.css';

export default function Header({ onLogoClick }) {
  return (
    <header className="v5-header">
      <div className="v5-header__container">
        <a
          className="v5-header__brand"
          href="https://smarttoolsconstructionacademy.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Smart Tools Construction Academy home"
        >
          <img
            className="v5-header__logo"
            src={`${import.meta.env.BASE_URL}smarttools-logo.png`}
            alt="Smart Tools Construction Academy"
          />

          <div className="v5-header__brand-text">
            <span className="v5-header__brand-name">
              Smart Tools
            </span>

            <span className="v5-header__academy">
              Construction Academy
            </span>

            <span className="v5-header__tagline">
              TRAINING • TOOLS • DIY
            </span>
          </div>
        </a>

        <div className="v5-header__title">
          Remodel Readiness Diagnostic
        </div>
      </div>
    </header>
  );
}
