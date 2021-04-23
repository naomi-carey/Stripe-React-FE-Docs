import React, { Component } from "react";
import Checkout from "./components/Checkout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Checkout
            name={"Your Company Name"}
            description={"Item that you sold"}
            amount={4.99}
          />
        </p>
      </div>
    );
  }
}

export default App;
