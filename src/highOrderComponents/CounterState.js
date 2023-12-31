import React, { Component } from 'react'

// This function component works as HOC & used to maintain the state on behalf of other components
// Check the render() below
// OriginalComponent is the component passed as parameter to Counter() & the same is rendered along with props
// then Counter() returns the class component 'NewComponent'
// Change the names as per the conventions
const Counter = (OriginalComponent, incrementBy) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
        }

        increment = () => {
            console.log('Counter hit.....')
            this.setState(prev => {
                return { counter: prev.counter + incrementBy }
            })
        }

        // {...this.props} is the split operator used to pass the other props to next components
        // as an prop passed from NewApp will be sent to Counter & will not e available to next component
        // if split operator is not used
        render() {
            return (<OriginalComponent counts={this.state.counter} incrementCount={this.increment} {...this.props} />)
        }
    }
    return NewComponent

}

export default Counter
