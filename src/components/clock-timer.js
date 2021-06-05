import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  onSubmit() {
    return 
  }
  render() {
    return (
      <div>
        <h3>Clock</h3>
        <h3>{this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}
