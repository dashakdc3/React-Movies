import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterid) => {
    const counters1 = this.state.counters.filter((c) => c.id !== counterid);
    this.setState({ counters: counters1 });
  };

  render() {
    return (
      (
        <React.Fragment>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              value={counter.value}
              selected={true}
              id={counter.id}
            >
              {/* all propertes can be replacebale with the single 'counter = {counter}' */}
              {/* value={counter.value} - pass a value form counter( 10 for exemple) to a component */}
              <h1>Counter # {counter.id}</h1>
            </Counter>
          ))}
        </React.Fragment>
      )
    );
  }
}

export default Counters;
