import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Hello, World!</h1>
        <p className="subtitle">A simple React starter app</p>
      </header>

      <main className="app-main">
        <section className="counter-card">
          <h2>Counter</h2>
          <p className="count-display">{count}</p>
          <div className="button-row">
            <button onClick={() => setCount((c) => c - 1)}>−</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        </section>

        <section className="info-card">
          <h2>About</h2>
          <p>
            This is a minimal React app used as a demo codebase for the AI
            Coding Agent POC. Assign a Linear ticket to <code>@ai-agent</code>{" "}
            and watch it propose code changes here.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
