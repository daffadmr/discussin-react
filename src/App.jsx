import React, { Component } from "react";
import "./App.css";
import SetupRouters from "./routes/SetupRouters";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SetupRouters />
      </div>  
    );
  }
}

export default App;
