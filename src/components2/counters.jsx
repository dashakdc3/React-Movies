import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    // const {onReset, onDecrement, onDelete, onIncrement, counters} = this.props
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.onReset()}
          className="btn btn-info btn-small m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            selected={true}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onReset={this.props.onReset}
          >
            <h1>Counter # {counter.id}</h1>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
