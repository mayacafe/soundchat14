import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

import Router from "./routes";

export default function MainApp() {
  return (
    <>
      <Router />
      <ToastContainer/>
    </>
  );
}
