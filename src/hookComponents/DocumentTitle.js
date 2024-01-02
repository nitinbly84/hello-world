import React, { useState, useEffect, Component } from 'react'

// below function shows the use of useEffect & how easily we can take action whenever component is rendered
// or re-rendered. Component is rendered on each state update
function UpdateDocFunc() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // Note- use effect is called for every state change, i.e. if name is updated then also it will be executed
    // But we want to be executed only when count is updatd. So it takes second parameter as an array which will hold
    // state parameters & props parameters, it optimizes the performance
    useEffect(() => {
        console.log('useEffect is called............')
        document.title = `Clicked ${count} times`
    }, [count])

    const updateCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    // if use <form> then whole form is re-rendered causing values to reset, even console logs
    // so using <div>
    return (
        <div>
            <input type='text' onChange={e => setName(e.target.value)} />
            <button onClick={updateCount}> Update {count} Count </button>
        </div>
    )
}

// Below class shows that how we need to use lifecycle methods to update & use the state value.
class UpdateDocClass extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('didMount............')
        document.title = `Clicked ${this.state.count} times`
    }

    // title is updated here as this method is called after render() & updated state value is available
    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate.......')
        document.title = `Clicked ${this.state.count} times`
    }

    // this method called before render, so state value is not the updated one yet.
    updateCount = () => {
        console.log('updateCount.........')
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        // thats why we ourselves have to put the new value
        // document.title = `Clicked ${this.state.count+1} times`
    }

    render() {
        console.log('Render.........')
        return (
            <button onClick={this.updateCount}>Update {this.state.count} Count</button>
        )
    }
}

export { UpdateDocClass }
export default UpdateDocFunc