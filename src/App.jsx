import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppV1 from './v1/App';
import AppV2 from './v2/App';
import AppV3 from './v3/App';
import AppV4 from './v4/App';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', gap: '32px', padding: '40px 20px', background: '#0b0c10', color: '#f4f1ea' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', marginBottom: '10px', textAlign: 'center' }}>Select Quiz</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '100%', maxWidth: '1200px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/beyond-hustle" style={cardStyle}>
          <div style={cardTitleStyle}>Beyond Hustle</div>
          <div style={subtitleStyle}>Freedom Stage Quiz</div>
        </Link>
        <Link to="/brand-diagnostic" style={cardStyle}>
          <div style={cardTitleStyle}>Is Your Brand Still Standing?</div>
          <div style={subtitleStyle}>Brand Diagnostic</div>
        </Link>
        <Link to="/quiz-v1" style={cardStyle}>
          <div style={cardTitleStyle}>Home Health Quiz</div>
          <div style={subtitleStyle}>Environmental Diagnostic</div>
        </Link>
        <Link to="/quiz-v2" style={cardStyle}>
          <div style={cardTitleStyle}>Women's InnerFitness Quiz</div>
          <div style={subtitleStyle}>Health & Wellness</div>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: '1 1 240px',
  maxWidth: '260px',
  minHeight: '160px',
  padding: '24px 20px',
  background: '#191c26',
  color: '#f4f1ea',
  border: '1px solid rgba(212, 163, 115, 0.3)',
  borderRadius: '12px',
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
  cursor: 'pointer',
};

const cardTitleStyle = {
  fontSize: '1.1rem',
  fontWeight: '600',
  lineHeight: '1.4',
  color: '#ffffff',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const subtitleStyle = {
  fontSize: '0.85rem',
  color: '#a0a5b5',
  marginTop: '12px'
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beyond-hustle" element={<AppV4 />} />
        <Route path="/quiz-v4" element={<AppV4 />} />
        <Route path="/brand-diagnostic" element={<AppV3 />} />
        <Route path="/quiz-v3" element={<AppV3 />} />
        <Route path="/quiz-v1" element={<AppV1 />} />
        <Route path="/quiz-v2" element={<AppV2 />} />
      </Routes>
    </Router>
  );
}

export default App;

