import React, { Component } from 'react'
import Counter from './CounterState'

class ClickCounter extends Component {

    render() {
        return (
            <button onClick={this.props.incrementCount}>Clicked {this.props.counts} times</button>
        )
    }
}

// Returning HOC, showing how we can pass other parameters
export default Counter(ClickCounter, 1)
