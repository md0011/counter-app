import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count: this.props.value
        // tags: ['tag1', 'tag2']
    }   
     
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-lg">Increment</button> <br />
        {/* {this.state.tags.length===0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </React.Fragment>
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