import React from 'react';

export default function SmartToolsLogo({ className = '', height = 48 }) {
  return (
    <div className={`smart-tools-logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <svg width={height} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart Tools Academy Logo">
        {/* Outer Glow */}
        <circle cx="50" cy="50" r="46" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 2" />
        
        {/* Gear Teeth & Body */}
        <path
          d="M45 10 h10 l2 6 a38 38 0 0 1 7 3 l5 -4 l7 7 l-4 5 a38 38 0 0 1 3 7 l6 2 v10 l-6 2 a38 38 0 0 1 -3 7 l4 5 l-7 7 l-5 -4 a38 38 0 0 1 -7 3 l-2 6 h-10 l-2 -6 a38 38 0 0 1 -7 -3 l-5 4 l-7 -7 l4 -5 a38 38 0 0 1 -3 -7 l-6 -2 v-10 l6 -2 a38 38 0 0 1 3 -7 l-4 -5 l7 -7 l5 4 a38 38 0 0 1 7 -3 z"
          fill="url(#gearGradient)"
          stroke="#b45309"
          strokeWidth="1.5"
        />

        {/* Inner Dark Circle */}
        <circle cx="50" cy="50" r="26" fill="#0c1527" stroke="#f59e0b" strokeWidth="2" />

        {/* Crossed Tools (Hammer & Wrench in gold) */}
        {/* Wrench */}
        <path
          d="M36 62 L60 38 M60 38 L64 34 A5 5 0 0 1 68 37 L66 41 A5 5 0 0 0 63 43 L39 67 A3 3 0 0 1 35 63 Z"
          stroke="#f59e0b"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Hammer */}
        <path
          d="M64 62 L40 38 M37 35 L43 29 L47 33 L41 39 Z"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Spark / Accent Dot */}
        <circle cx="50" cy="50" r="3.5" fill="#f59e0b" />

        {/* Gradients */}
        <defs>
          <linearGradient id="gearGradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f59e0b" />
            <stop offset="0.5" stopColor="#d97706" />
            <stop offset="1" stopColor="#92400e" />
          </linearGradient>
        </defs>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '15px',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          fontFamily: 'inherit'
        }}>
          Smart Tools
        </span>
        <span style={{
          color: '#f59e0b',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        }}>
          Construction Academy
        </span>
        <span style={{
          color: '#64748b',
          fontSize: '7.5px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          marginTop: '1px'
        }}>
          TRAINING • TOOLS • DIY
        </span>
      </div>
    </div>
  );
}
