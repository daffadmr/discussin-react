import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import SetupRouters from "./routes/SetupRouters";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <SetupRouters />
        </Provider>
      </div>  
    );
  }
}

export default App;
