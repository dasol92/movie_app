import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello, constructor");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minius = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount() {
    console.log("component rendered");
  }  
  render() {
    console.log("i'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minius}>Minus</button>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("i just updated");
  }
  componentWillUnmount() {
    console.log("goodbye");
  }
}

export default App;
