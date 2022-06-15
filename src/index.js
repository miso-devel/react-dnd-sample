import React from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { observe } from "./components/Game";
import { Board } from "./components/Board";

const container = document.getElementById("root");
const root = createRoot(container);
observe((knightPosition) =>
  root.render(
    <React.StrictMode>
      <Board knightPosition={knightPosition} />
    </React.StrictMode>
  )
);
