import './Day5.css';

function Day5() {
  return (
    <div className="grid-container">
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
      <div className="card">Card 4</div>

      <div className="what-i-learned">
        <h2>📘 What I Learned Today (Day 5)</h2>
        <ul>
          <li>✅ How to use <strong>CSS Grid</strong> to create responsive layouts</li>
          <li>✅ Difference between <code>display: flex</code> and <code>display: grid</code></li>
          <li>✅ Using <code>grid-template-columns</code> and <code>repeat()</code> for equal-width columns</li>
          <li>✅ How <code>gap</code> works between grid items</li>
          <li>✅ How to make grids responsive using <code>@media</code> queries</li>
        </ul>
      </div>
    </div>
  );
}

export default Day5;
