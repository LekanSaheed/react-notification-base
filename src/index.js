import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div
      style={{
        width: "100%",
        fontSize: "12px",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      v0.1.5
      <a
        href="https://github.com/lekansaheed/react-notification-base"
        target="_blank"
        rel="noreferrer"
      >
        Contribute
      </a>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
