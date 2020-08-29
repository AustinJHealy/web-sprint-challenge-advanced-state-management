import React, { Component } from "react";
import "./App.css";
import Smurf from "./Smurf";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurf />
        <Form />
      </div>
    );
  }
}

export default App;