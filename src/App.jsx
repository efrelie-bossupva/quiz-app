import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppV1 from './v1/App';
import AppV2 from './v2/App';
import AppV3 from './v3/App';
import AppV4 from './v4/App';
import AppV5 from './v5/App';
import './App.css';

function Home() {
  return (
    <main className="quiz-picker">
      <section className="quiz-picker__content" aria-labelledby="quiz-picker-title">
        <div className="quiz-picker__eyebrow"><span /> FIND YOUR NEXT STEP</div>
        <h1 className="quiz-picker__title" id="quiz-picker-title">Select a quiz</h1>
        <p className="quiz-picker__intro">Choose a quick assessment to get personalized insights.</p>
        <div className="quiz-picker__grid">
        <Link to="/remodel-readiness" className="quiz-card" style={{ '--card-bg': '#0c1527', '--card-accent': '#f59e0b', color: '#ffffff' }}>
          <span className="quiz-card__top"><span className="quiz-card__number" style={{ color: '#f59e0b' }}>05</span><span className="quiz-card__arrow" aria-hidden="true" style={{ color: '#f59e0b' }}>↗</span></span>
          <span className="quiz-card__title" style={{ color: '#ffffff' }}>Remodel Readiness</span>
          <span className="quiz-card__subtitle" style={{ color: '#94a3b8' }}>Smart Tools Construction Academy</span>
        </Link>
        <Link to="/beyond-hustle" className="quiz-card" style={{ '--card-bg': '#ffffff', '--card-accent': '#e07558' }}>
          <span className="quiz-card__top"><span className="quiz-card__number">01</span><span className="quiz-card__arrow" aria-hidden="true">↗</span></span>
          <span className="quiz-card__title">Beyond Hustle</span>
          <span className="quiz-card__subtitle">Freedom Stage Quiz</span>
        </Link>
        <Link to="/brand-diagnostic" className="quiz-card" style={{ '--card-bg': '#f7f5f2', '--card-accent': '#612058' }}>
          <span className="quiz-card__top"><span className="quiz-card__number">02</span><span className="quiz-card__arrow" aria-hidden="true">↗</span></span>
          <span className="quiz-card__title">Is Your Brand Still Standing?</span>
          <span className="quiz-card__subtitle">Brand Diagnostic</span>
        </Link>
        <Link to="/quiz-v1" className="quiz-card" style={{ '--card-bg': '#f7f5ef', '--card-accent': '#5a9e3e' }}>
          <span className="quiz-card__top"><span className="quiz-card__number">03</span><span className="quiz-card__arrow" aria-hidden="true">↗</span></span>
          <span className="quiz-card__title">Home Health Quiz</span>
          <span className="quiz-card__subtitle">Environmental Diagnostic</span>
        </Link>
        <Link to="/quiz-v2" className="quiz-card" style={{ '--card-bg': '#eee9e0', '--card-accent': '#ac4837' }}>
          <span className="quiz-card__top"><span className="quiz-card__number">04</span><span className="quiz-card__arrow" aria-hidden="true">↗</span></span>
          <span className="quiz-card__title">Women's InnerFitness Quiz</span>
          <span className="quiz-card__subtitle">Health &amp; Wellness</span>
        </Link>
        </div>
        <p className="quiz-picker__footnote">Each quiz takes just a few minutes.</p>
      </section>
    </main>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remodel-readiness" element={<AppV5 />} />
        <Route path="/quiz-v5" element={<AppV5 />} />
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

