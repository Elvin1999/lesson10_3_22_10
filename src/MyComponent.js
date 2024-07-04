import React, { Component, StrictMode } from "react";

export default class MyComponent extends Component {
  name = "John";

  constructor(props) {
    super(props);
    this.state = { counter: 0, error: false, data: null };
    this.handleClick = this.handleClick.bind(this);
  }
  // it calls one time AFTER component insert to DOM
  componentDidMount() {
    // console.log("ComponentDidMount called");
    // setTimeout(() => {
    //   this.setState({ data: "Hey this is data" });
    // }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
    console.log("Previous state", prevState);
    console.log("Current state : ", this.state);
  }

  handleClick = () => {
    // if (this.state.counter == 30) {
    //   this.setState({
    //     error: true,
    //   });
    // } else {
    this.setState({
      counter: this.state.counter + 1,
    });
    //}
  };

  componentDidCatch(error) {
    this.setState({
      error: true,
    });
    alert(error);
  }

  render() {
    return (
      <div>
        <h1>{this.state.data && this.state.data}</h1>
        <hr />

        <TestComponent></TestComponent>
        <h1>{this.name}</h1>
        <h1>Title {this.props.title}</h1>
        <h2>Counter : {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increase Value</button>
        {this.state.error && <h1 style={{ color: "red" }}>This is error</h1>}
      </div>
    );
  }
}

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello World </h1>
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}
