import "./App.css";
import React, { useReducer } from "react";
import reducer from "./Reducer";

export default function App() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, {
    r: 100,
    g: 100,
    b: 100,
  });

  return (
    <div className="App">
      <h1 style={{ color: `rgb(${r}, ${g}, ${b})` }}>Hello World</h1>

      <h3>
        <span style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}></span>{" "}
        Color:({r}, {g}, {b})
      </h3>

      <h2>
        R <button onClick={() => dispatch({ type: "INCREMENT_R" })}>+</button>
        <button onClick={() => dispatch({ type: "DINREMENT_R" })}>-</button>
      </h2>
      <h2>
        G <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
        <button onClick={() => dispatch({ type: "DINREMENT_G" })}>-</button>
      </h2>
      <h2>
        B <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
        <button onClick={() => dispatch({ type: "DINREMENT_B" })}>-</button>
      </h2>
    </div>
  );
}
