import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BakeryProvider } from "./context/BakeryContext.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <BakeryProvider>
      <App />
    </BakeryProvider>
);