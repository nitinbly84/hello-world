import React, { Component } from 'react'

// Ccheck the order of the execution of lifecycle methods before putting any logic there.
class LifecycleA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            original: 'Constructor',
            name: 'Constructor',
            count: 0
        }
        console.log(`constructor, name is ${this.state.name}`)
        this.updateCounter = this.updateCounter.bind(this)
    }

    static getDerivedStateFromProps(props, state) {                
        console.log(`getDerivedStateFromProps, prop name is ${props.name}`)
        //if it is uncommented then name will not be updated, as this method is called after state update
        //state.name = props.name
        // null can be returned but still check if it is causing any issue
        return state        
    }

    componentDidMount() {
        console.log(`After component mount, name is ${this.state.name}`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate, name is ${nextState.name}`)
        // Don't return null if state is updated, as updated value will not be reflected
        return nextState
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`getSnapshotBeforeUpdate, name is ${prevState.name}`)
        return prevState
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate, previous name is '+snapshot.name)
    }

    updateCounter = () => {
        console.log('Updating the state....')
        // setState method triggers getDerivedStateFromProps() which further triggers shouldComponentUpdate()
        this.setState((prevState, props) => ({
            name: this.state.original + (prevState.count + 1),
            count: prevState.count + 1
        }))
        
    }

    render() {
        console.log('Rendering the UI.....')
        if (this.props.name === 'Error')
            throw new Error('Not the right name for props.....')
        return (            
            <div>
                <h2> {`From render, name is ${this.state.name}`} </h2>
                <div>
                    <button type='submit' onClick={this.updateCounter}>Change{this.state.count}</button>
                </div>
                <div>
                    {(this.state.count%2 === 0) && <ChildComponent />}
                </div>
            </div >
        )
    }
}

// This class is created to show the execution of componentWillUnmount()
class ChildComponent extends Component {
    constructor() {
        super()
    }

    componentWillUnmount() {
        console.log('ChildComponent is unmounted...')
    }

    render() {
        return (
            <h2> I am child Component </h2>
        )
    }
}

export default LifecycleA