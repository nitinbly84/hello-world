import React, { Component } from 'react'

class NormalForm extends Component {

    constructor() {
        super();
        this.state = {
            userName: ""
        }
    }

    updateEvent = event => {
        this.setState(
            {
                userName: event.target.value
            }
        )
    }

    processData = event => {
        alert(`Hello ${this.state.userName}`)
        // It prevents the page refresh after 'Submit', else input data will not be seen on refreshed page
        event.preventDefault()
    }

    render() {
        // destructuring the state object & now userName can be used instead of this.state.userName
        const { userName } = this.state
        // type="submit" allows user to press 'Enter' key also to submit
        return (
            <form onSubmit={this.processData}>
                <label>UserName: </label>
                <input type="text" value={this.state.userName} onChange={this.updateEvent}></input>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            )
    }
}

export default NormalForm