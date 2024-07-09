import React, { Component } from 'react';

class welcome extends Component {
  render() {
    return (
      <div>
        welcome
        <h1 style={{color:this.props.color}}>welocome to learn react</h1>
        <h2>Hello{this.props.name} you are from {this.props.location}</h2>
        <h3>Today's topic {this.props.children}</h3>
    </div>
    )
  }
}
export default welcome;