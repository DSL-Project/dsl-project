import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./appContext";
import "./fonts/Non-Commercial/MDSystem/MDSystem-Bold.otf";
import "./fonts/Non-Commercial/MDSystem/MDSystem-Medium.otf";
import "./fonts/Non-Commercial/MDSystem/MDSystem-Regular.otf";
import "./fonts/Non-Commercial/MDSystem/MDSystem-Semibold.otf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
