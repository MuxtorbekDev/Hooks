import "./App.css";
import React, { useState, useRef } from "react";
import TextInput from "./useImperativeHandle/TextInput";

export default function App() {
  const [card, setCard] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const cardEl = useRef();
  const phoneEl = useRef();

  const validate = () => {
    if (card.length < 16) {
      setError("card");
      cardEl.current.focus();
      return;
    }

    if (phone.length < 10) {
      setError("phone");
      phoneEl.current.focus();
      return;
    }

    setError("");
  };

  return (
    <div className="App">
      <h1>useImperativeHandle Hook</h1>
      <TextInput
        hasEror={error === "card"}
        placeholder={"Card"}
        update={setCard}
        ref={cardEl}
      />
      <TextInput
        hasEror={error === "phone"}
        placeholder={"phone"}
        update={setPhone}
        ref={phoneEl}
      />

      <button onClick={validate}>Send message</button>
    </div>
  );
}
