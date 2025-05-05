import './Day4.css';
import { useState } from 'react';

function Day4() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`theme-container ${dark ? 'dark-theme' : ''}`}>
      <h1>Day 4: Theme Toggle</h1>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? 'Light' : 'Dark'} Theme
      </button>

      <div className="what-i-learned">
        <h2>📘 What I Learned Today (Day 4)</h2>
        <ul>
          <li>✅ How to create and use <strong>CSS Variables</strong> (e.g., <code>--bg-color</code>)</li>
          <li>✅ How to define global styles using the <code>:root</code> selector</li>
          <li>✅ How to switch between <strong>Light and Dark Themes</strong> using CSS and React</li>
          <li>✅ How to use <strong>class toggling</strong> with <code>useState</code> in React</li>
          <li>✅ Why reusable and scalable styles are important in professional projects</li>
        </ul>
      </div>
    </div>
  );
}

export default Day4;
