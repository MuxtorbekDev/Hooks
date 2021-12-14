import "./App.css";
import React, { useState, useLayoutEffect } from "react";

export default function App() {
  const [value, setValue] = useState(8);
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.round(Math.random() * 100000));
    }
  }, [value]);
  console.log("Render", value);
  return <button onClick={() => setValue(0)}>{value}</button>;
}
