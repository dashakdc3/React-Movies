import React, { Component } from 'react';
import Counters from './components2/counters'
import NavBar from './components2/navbar'
class App extends Component {
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
    if (counters[index].value <= 0 )
      { counters[index].value = 0}
    else {counters[index].value--};
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };

  render (){
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c=> c.value >0).length}/>
        <main className='container'>
          <Counters  
            counters = {this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handeDecrement}
            onReset={this.handleReset}/>
        </main>
      </React.Fragment>
    );}
}

export default App;
