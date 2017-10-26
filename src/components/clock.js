import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  render() {
    return(
      <article className="clock">
        <div className="time">{this.state.date.toLocaleTimeString()}</div>
      </article>
    )
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
}

export default Clock;
