import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value,
    // take info from props
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  // constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //     // this.handleIncrement = we reset handleIncrement() function to new
  //     // this.handleIncrement - we take this of increment
  //     // .bind(this) - bind method sets value of this, because in constuctor we have this.
  // }

  // handleIncrement(){
  //     console.log(this)
  // }

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (product) => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <img src={this.state.imgUrl} alt="" />
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(this.props.id)}
          className="btn btn-primary btn-small m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.handleDecrement(this.props.id)}
          className="btn btn-secondary btn-small"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-small m-2"
        >
          Delete
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "bg-warning text-darky" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // {count: newvarforcount}
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
