import React, { Component } from 'react'
import ChildRefForm from './ChildRefForm';

// Refer beblow link to check another way of forwarding refs-
// https://www.youtube.com/watch?v=RLWniwmfdq4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=30
class RefForm extends Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            age: "",
            disableSubmit: true,
            // this is bit older way
            callBackRef: null
        }
        // creating reference to use it to attach to some element in render() & then later call focus()
        // to put focus on the elelment when the page is rendered
        this.focusRef = React.createRef()
        this.submitRef = React.createRef()
        this.childRef = React.createRef()

        // React.createRef() creates a wrapper object around the element it is pointed to 
        // & then that elelment is referred by 'current'
        // but setCallBackRef arrow function is attached to the element itself & that element is passed
        // & so that element can be referred directly without using 'current'
        this.setCallBackRef = element => {
            this.callBackRef = element
        }
    }

    updateUserEvent = event => {
        this.setState(
            {
                userName: event.target.value
            }
        )
    }

    updateAgeEvent = event => {
        this.disableSubmitButton(event.target.value)
        this.setState(
            {
                age: event.target.value
            }
        )
    }

    disableSubmitButton(data) {
        let result = false
        // +data converts to Number & if not possible then gives NaN & then isNaN() checks the same.
        if (isNaN(+data) || (+data) < 1 || (+data) > 100)
            result = true

        this.setState({
            disableSubmit: result
        })
        if (result) {
            this.submitRef.current.disabled = true
        }
        this.childRef.current.disable()
        return result
    }

    // if need to fetch the submitted form data then update those values to state or one can read only one element
    // to which ref is attached
    processData = event => {
        // we can use ref to read the value of the element it is attached to
        if (this.childRef.current.ref.current.disabled == true)
            alert(`Hello ${this.focusRef.current.value}. Your age is ${this.state.age}`)
        else if (this.childRef.current.ref.current.value < 3)
            alert('Give some comment to submit!!')
        else
            alert(`Comment: ${this.childRef.current.ref.current.value}`)
        this.childRef.current.change(this.submitRef)
        // It prevents the page refresh after 'Submit', else input data will not be seen on refreshed page
        event.preventDefault()
    }

    componentDidMount() {
        // focus() is called here as componentDidMount() is called after render()
        // In render(), we associate focusRef to some entity else it will be null & will throw error
        this.focusRef.current.focus()

        // it will override the above action
        // below condition is used to make sure that focus() is not call on null, causing error
        // if callBackRef is not used then it will be null & without below condition focus() will be called on null
        if (this.callBackRef)
            this.callBackRef.focus()
    }
        
    render() {
        // destructuring the state object & now userName can be used instead of this.state.userName
        const { userName, age } = this.state

        // one can use autofocus but it will be overridden by any ref used for other element for the focus,
        // as it will be done via componentDidMount() which executes after render() & autofocus will be overridden
        return (
            <form onSubmit={this.processData}>
                <label>UserName: </label>
                <input type="text" value={this.state.userName} onChange={this.updateUserEvent} ref={this.focusRef}></input>
                <br />
                <label>Age: </label>
                <input type="text" defaultValue="Give the valid age number" onChange={this.updateAgeEvent} ref={this.setCallBackRef} ></input>
                <ChildRefForm ref={this.childRef} />
                <div>
                    <button type="submit" disabled={this.state.disableSubmit} ref={this.submitRef} > Submit</button>
                </div>
            </form>
        )
    }
}

export default RefForm