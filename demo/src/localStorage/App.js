import "../App.css";
import React from "react";
import usePrevious from "../MaxsusHooklar/usePriveos";
import useLocalStorage from "./LocalStorage";

export default function App() {
  const [count, setCount] = useLocalStorage(0, "count");
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
