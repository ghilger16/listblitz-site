import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Support from "./pages/Support";

function Home() {
  return (
    <div className="main-container">
      <header className="hero">
        <h1>List Blitz</h1>
        <p>The ultimate party game for fast-paced fun.</p>
        <a href="#download" className="cta-button">
          Download Now
        </a>
      </header>

      <section className="features">
        <h2>Why List Blitz?</h2>
        <ul>
          <li>🔥 Fun categories like Movies, Food, Music, and more</li>
          <li>👨‍👩‍👧‍👦 Perfect for family game night</li>
          <li>📱 One phone, everyone plays</li>
          <li>⏱️ Timed and Chill game modes</li>
        </ul>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <nav className="main-container">
        <Link to="/">Home</Link> | <Link to="/support">Support</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <footer className="main-container">
        <p>
          &copy; {new Date().getFullYear()} List Blitz. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
