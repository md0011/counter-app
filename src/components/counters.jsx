import React, { Component } from "react";
import Counter from "./counter";

export class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary btn-lg">
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
