import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count: 0
    }
    
    formatCount(){
        const {count} = this.state;
        return count===0 ? "Zero" : count;
    }
    
  render() {
    return (
      <React.Fragment>
        <span className="badge bg-primary fs-5 m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-lg">Increment</button>
      </React.Fragment>
    )
  }
}

export default Counter