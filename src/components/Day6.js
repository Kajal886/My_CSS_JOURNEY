import './Day6.css';

function Day6() {
  return (
    <div className="day6-container">
      <div className="card">Hover Me</div>
      <button className="hover-button">Hover Button</button>

      <div className="what-i-learned">
        <h2>📘 What I Learned Today (Day 6)</h2>
        <ul>
          <li>✅ How to use <code>:hover</code> to trigger effects on mouse hover</li>
          <li>✅ Applied <code>transition</code> for smooth changes in style</li>
          <li>✅ Used <code>transform: scale()</code> to zoom elements on hover</li>
          <li>✅ Added <code>box-shadow</code> to create card-like elevation effects</li>
          <li>✅ Built interactive buttons with background and movement animations</li>
        </ul>
      </div>
    </div>
  );
}

export default Day6;