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
  handleIncrement = (prop) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(prop);
    counters[index] = { ...prop };
    counters[index].value++;
    this.setState({ counters });
  };

  handeDecrement = (prop) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(prop);
    counters[index] = { ...prop };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.handleReset()}
          className="btn btn-info btn-small m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            selected={true}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handeDecrement}
            onReset={this.handleReset}
          >
            <h1>Counter # {counter.id}</h1>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
