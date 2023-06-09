import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainApp from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop as ScrollTop } from "react-router-scroll-to-top";
import ScrollToTop from "react-scroll-to-top";
// import AudioPlayers from "./pages/AudioPlayer";
const Location = localStorage.getItem("locationpath");
//  window.location.reload(true)
const root = ReactDOM.createRoot(document.getElementById("root"));
const data = (location) => {
  localStorage.setItem("locationpath", location);

  console.log(location);
  // window.location.reload(false)
};
console.log(Location, "okay");
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <MainApp />
      <ScrollToTop smooth />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
