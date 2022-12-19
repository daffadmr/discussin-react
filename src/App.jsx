import React, { Component } from "react";
import "./tailwind.css";
import SetupRouters from "./routes/SetupRouters";
import { HelmetProvider } from "react-helmet-async";


const App = () => {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div className="App">
        <SetupRouters />
      </div>
    </HelmetProvider>
  );
}

export default App