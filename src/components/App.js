import React from "react";
import "../app.css";
import Bulb from "./Bulb.js";
import Switch from "./Switch.js";
import Switch2 from "./Switch2.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      switchOn: false,
      switch2On: false
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.toggleSwitch2 = this.toggleSwitch2.bind(this);
  }

  toggleSwitch() {
    this.setState({ switchOn: !this.state.switchOn });
  }
  toggleSwitch2() {
    this.setState({ switch2On: !this.state.switch2On });
  }

  render() {
    return (
      <div>
        <Switch isOn={this.state.switchOn} onSwitched={this.toggleSwitch} />
        <Switch2 isOn={this.state.switch2On} onSwitched={this.toggleSwitch2} />
        <Bulb isOn={this.state.switchOn && this.state.switch2On} />
      </div>
    );
  }
}

export default App;
