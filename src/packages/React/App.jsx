import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'ii'
    }
  }
  render () {
    const { title } = this.props
    return (
      <div>{title}</div>
    )
  }
}

export default App