import { Button } from "@mui/material";
import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ m: 2 }}
          onClick={this.props.onReset}
        >
          Reset
        </Button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
