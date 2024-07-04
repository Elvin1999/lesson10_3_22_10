import React, { Component } from "react";

export default class TimerComponent extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
    };
    this.timer = null; //Initialize the timer
  }

  componentDidMount() {
    console.log("Started");
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Unmounted");
    clearInterval(this.timer);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.seconds == 10) {
      return false;
    }
    console.log("On going");
    return true;
  }

  render() {
    return (
      <div>
        <h1>Timer Component</h1>
        <p>Elapsed Time : {this.state.seconds}</p>
      </div>
    );
  }
}
