import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span
          key={this.props.counter.id}
          style={{ fontSize: 15 }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-small m-2"
        >
          Inctrement
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-small m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-small m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "bg-warning text-darky" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    // {count: newvarforcount}
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
