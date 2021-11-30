import { Button } from "@mui/material";
import React, { Component } from "react";
class Counter extends Component {
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
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </Button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
