import React, { Component } from 'react'
import Counter from './CounterState'

class HoverCounter extends Component {

    render() {

        return (
            <h2 onMouseOver={this.props.incrementCount}>{this.props.name} Hovered {this.props.counts} times</ h2>
        )
    }
}

export default HoverCounter