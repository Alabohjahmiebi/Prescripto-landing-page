import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Debug mount log */}
    {console.log("App mounting...")}
    <App />
  </StrictMode>,
);
