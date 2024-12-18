import "../global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardCrm } from "./screens/DashboardCrm";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <DashboardCrm />
  </StrictMode>,
);
