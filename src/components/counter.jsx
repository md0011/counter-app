import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count: this.props.counter.value
        // tags: ['tag1', 'tag2']
    }   
     
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-lg">Increment</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-lg badge fs-5 m-2">Delete</button> <br />
        {/* {this.state.tags.length===0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    )    
  }

  formatCount(){
    const {count} = this.state;
    return count===0 ? "Zero" : count;
}

  getBadgeClasses() {
    let classes = "badge fs-5 m-2 bg-";
    classes += (this.state.count === 0 ? "warning" : "primary");
    return classes;
  }

  // renderTags(){
  //   if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
  //   return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
  // }

  handleIncrement = () =>{
    this.setState({ count: this.state.count + 1})
  }

}

export default Counter