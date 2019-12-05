import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Container from "./Container";

function App() {
  const codesOriginalState = [
    { code: "web development", disabled: false },
    { code: "server management", disabled: false },
    { code: "finances", disabled: false },
    { code: "break", disabled: false },
    { code: "endwork", disabled: false }
  ];

  if (!localStorage.timestamps) {
    localStorage.setItem("timestamps", JSON.stringify([]));
    localStorage.setItem("codes", JSON.stringify(codesOriginalState));
  }

  //   function updateLocalStorage(name, arr) {
  // localStorage.setItem(name, JSON.stringify(arr));
  //   };

  return (
    <div className="App">
      <Container />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
