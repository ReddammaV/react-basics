import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h2>I'm from Display Component</h2>
        {/* from App.js state */}
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
