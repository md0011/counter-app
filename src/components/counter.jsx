import React, { Component } from 'react'

export class Counter extends Component {     
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-lg">Increment</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-lg badge fs-5 m-2">Delete</button> <br />
      </div>
    )    
  }

  formatCount(){
    const {value} = this.props.counter;
    return value===0 ? "Zero" : value;
}

  getBadgeClasses() {
    let classes = "badge fs-5 m-2 bg-";
    classes += (this.props.counter.value === 0 ? "warning" : "primary");
    return classes;
  }

}

export default Counter