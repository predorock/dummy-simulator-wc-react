import React from "react";
import ReactWebComponent from "react-web-component";

import DummySimulator from "./DummySimulator";
import "./DummySimulator.style.css";

class App extends React.Component {
  render() {
    return <DummySimulator />;
  }
}

ReactWebComponent.create(<App />, "dummy-simulator");
