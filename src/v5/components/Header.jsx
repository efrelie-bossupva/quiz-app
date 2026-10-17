import React from 'react';
import SmartToolsLogo from './SmartToolsLogo';

export default function Header({ onLogoClick }) {
  return (
    <header className="v5-header">
      <div className="v5-header__container">
        <div 
          className="v5-header__brand" 
          onClick={onLogoClick} 
          style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
          role={onLogoClick ? 'button' : undefined}
          tabIndex={onLogoClick ? 0 : undefined}
        >
          <SmartToolsLogo height={42} />
        </div>
        <div className="v5-header__title">
          Remodel Readiness Diagnostic
        </div>
      </div>
    </header>
  );
}
