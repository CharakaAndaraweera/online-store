import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.getCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.increaseCount}
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  getCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  increaseCount = () => {
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
