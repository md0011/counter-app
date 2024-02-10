import React, { Component } from 'react'
import Counter from './counter'

export class Counters extends Component {
    state = {
        countetrs: [
            {id: 1, value: 3},
            {id: 1, value: 0},
            {id: 1, value: 0},
            {id: 1, value: 0}
        ]
    }
  
  handleDelete = () => {
    console.log("Delete")
  }
  
  render() {
    return (
      <div>
        {this.state.countetrs.map(counter => 
          <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete} /> )}
      </div>
    )
  }
}

export default Counters