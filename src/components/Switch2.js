import React from "react";

class Switch2 extends React.Component {
  render() {
    var switchClass = this.props.isOn ? "cube-switch active" : "cube-switch";
    return (
      <div className={switchClass}>
        <span className="switch" onClick={this.props.onSwitched}>
          <span className="switch-state off">Off</span>
          <span className="switch-state on">On</span>
        </span>
      </div>
    );
  }
}

export default Switch2;
