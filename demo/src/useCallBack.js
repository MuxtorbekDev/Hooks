import "./App.css";
import React, { useCallback, useState } from "react";
import ItemList from "./ItemList";

export default function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "red" : "white",
  };

  const generateItem = useCallback(
    (indexNummber) => {
      return new Array(count)
        .fill("")
        .map((_, index) => `Element ${index + indexNummber}`);
    },
    [count]
  );
  return (
    <div className="App">
      <p style={styles}> Amount of count: {count}</p>
      <button className="success" onClick={() => setCount((prev) => prev + 1)}>
        Add Count
      </button>
      <button className="danger" onClick={() => setColored((prev) => !prev)}>
        Change Color
      </button>

      <ItemList getItems={generateItem} />
    </div>
  );
}
