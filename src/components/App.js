import React from "react";
import "../app.css";
import Bulb from "./Bulb.js";
import Switch from "./Switch.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      switchOn: false
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    this.setState({ switchOn: !this.state.switchOn });
  }

  render() {
    return (
      <div>
        <Switch isOn={this.state.switchOn} onSwitched={this.toggleSwitch} />
        <Bulb isOn={this.state.switchOn} />
      </div>
    );
  }
}

export default App;
