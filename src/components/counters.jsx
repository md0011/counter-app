import React, { Component } from "react";
import Counter from "./counter";

export class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-lg">
          Reset
        </button>
        <div>
          {" "}
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={onIncrement}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
