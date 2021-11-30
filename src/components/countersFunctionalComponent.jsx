import React from "react";
import { Button } from "@mui/material";
import Counter from "./counter";

const Counters = (props) => {
  const { counters, onReset, onDelete, onIncrement } = props;
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{ m: 2 }}
        onClick={onReset}
      >
        Reset
      </Button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
