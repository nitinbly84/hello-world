import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor() {
        super()
        this.state = {
            msg: 'Hello Parent'
        }
    }

    alertRenederer = (child) => {
        alert(`${this.state.msg} from ${child}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetParent={this.alertRenederer} />
            </div>
        )
    }
}

export default ParentComponent