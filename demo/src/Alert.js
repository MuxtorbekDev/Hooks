import React, { useContext } from "react";
import { AlertContext } from "./App";

function Alert() {
  const alert = useContext(AlertContext);

  if (!alert) return null;

  const cc = {
    background: "red",
    padding: "20px",
    textAlign: "center",
    color: "blue",
    width: "25rem",
  };

  return (
    <div style={cc}>
      <h4>This is messages very important</h4>
    </div>
  );
}

export default Alert;
