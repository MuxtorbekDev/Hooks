import "../App.css";
import React, { useState, useRef } from "react";
import usePrevious from "./usePriveos";

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <div className="App">
      <h1>Maxsus Hooklar</h1>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
