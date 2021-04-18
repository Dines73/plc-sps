import React from "react";

class Bulb extends React.Component {
  render() {
    let lightClass = this.props.isOn ? "light-bulb on" : "light-bulb off";
    return <div className={lightClass}></div>;
  }
}

export default Bulb;
