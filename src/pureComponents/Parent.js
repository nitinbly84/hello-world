import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComponent from './PureComponent'
import PureFunction from './PureFunction'

// Child components will not be re-rendered if Parent is not re-rendered
class Parent extends Component {
    constructor() {
        super()

        this.state = {
            name: "Nitin",
            count: 0
        }
    }

    componentDidMount() {
        console.log(`Parent is mounting for the count: ${this.state.count}`)
        setInterval(() => {
            this.setState(
                {
                    count: this.state.count + 1
                })                
        }, 6000)
    }

    render() {
        console.log(`*********Parent was rendered....${this.state.name}${this.state.count}*********`)
        // if we use below variable as props then both the components, even Pure Function will be re-rendered
        const newName = `${this.state.name}${this.state.count}`
        // RegularComponent will be re-rendered even if we pass the same props
        return (
            <>
                ParentComponent
                <PureFunction name={newName} />
                {/*<RegularComponent name={newName} />
                <PureComponent name={newName} /> */}
            </>
            )
    }
}

export default Parent