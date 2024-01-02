import React, { useState } from 'react'

// Shows how to use state in function component without using any class
function BasicHookCounter() {

    // it is array destructuring, useState() takes the initial value & returns current value & the function to set the new value
    // any name can be given instead of 'count' & 'setCount'
    const [count, setCount] = useState(0)

    // Its better to refer the prevCount, before updating new count, as current count can be cached during function calls
    // & it may not be updated correctly. Like it is done during state update in Class component below
    return (
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count} times </button>
        )
}

// Below shows the use of class in the function component to use State
// So using above hook makes it simpler but it can be used with React 16+ only
function ClassCounter() {
    
        class Counter extends React.Component {
            constructor() {
                super()
                this.state = {
                    count: 0
                }
            }

            increment = () => {
                this.setState((prevState) => ({
                    count: prevState.count+1
                }))
            }

            render() {
                return (
                    <button onClick={this.increment}>Click {this.state.count} times </button>
                    )
            }
        }
        return (<Counter />)
        
}

export { ClassCounter }
export default BasicHookCounter