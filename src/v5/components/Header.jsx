import React from 'react';


export default function Header({ onLogoClick }) {
  return (
    <header className="v5-header">
      <div className="v5-header__container">
        <a 
          className="v5-header__brand" 
          href="https://smarttoolsconstructionacademy.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}smarttools-logo.png`} 
            alt="Smart Tools Construction Academy" 
            style={{ height: '74px', width: 'auto', objectFit: 'contain' }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Smart Tools
            </span>
            <span style={{ color: '#f59e0b', fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Construction Academy
            </span>
            <span style={{ color: '#64748b', fontSize: '7.5px', fontWeight: 600, letterSpacing: '0.14em', marginTop: '1px' }}>
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
