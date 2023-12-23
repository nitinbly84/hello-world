import React, { Component } from 'react'

class Subscribe extends Component {

    constructor(props) {
        // call to super() is mandatory, whether constructor is receiving any value or not.
        super(props);
        // only in constructor, state can be set directly as shown below
        this.state = {
            message: 'Hello',
            // using JS Number() to convert String to Integer, as count is String type
            // Note- below we are not using 'this', as component is not et created, we are in constructor
            count: Number(`${props.count}`)            
        }

        // Method 1 : binding event handler in the constructor, it is preferred one.
        //this.updateState = this.updateState.bind(this)
    }

    updateState = () => {
        // below prints the type of 'count'
        // Note- we are using 'this' below as component is initialized & props are assigned, so 'this' is used in class component only.
        console.log(typeof this.props.count)
        // note back ticks used with $, it also gives the value, use it if above is not working.
        //console.log(typeof `${this.props.count}`)
        // use setState() to change/update the state value, don't try to assign directly, as it will not update
        // below shows that previous state is available & that can be used before updating  the state.
        // it us useful when the current state is cached by different function calls & we need to work on the previos
        // state & not the current state available with function...can think it as 'volatile' in Java
        // props is also available as second parameter which can be used if required.
        this.setState((prevState, props) => ({
            message: prevState.message === 'Hello' ? 'Thanks for subscription' : 'Hello'
        }))

        this.setState(
            {
                count: this.state.count + 1
            }
            // callback method is the second parameter & any code which needs to be executed after setState must be part
            // of callback method.
            , () =>
                //this callback method is called as part of setState(), so it receives the latest count value.
                console.log('Callback result: ', this.state.count)

        )
        // it is called in async, so it may not receive the latest count value.
        console.log(this.state.count)
        // as it is asnc call, so below message is printed when count value is actually 3
        if (this.state.count > 1) {
            this.setState({
                message: 'Hello. You are subscribed already...'
            })
        }
    }

    // below method is required in the class component to return the resulted html
    render() {
        // in return() we can have only 1 enclosing tag & below we need 2, so enclosed thtose further in <div>
        // onClick() is camel case in JSX & it is given even handler in {}, as in JSX either value should be an expression
        // or a String
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* below is better one than next one but prefer to use the method shown in constructor above */}
                <button onClick={() => this.updateState()}>Subscribe</button>
                {/* If we use updateState as => shown above then we can use below way else use => shown in above line
                 * but if function is arrow function then we can use both #65 & #68 ways
                <button onClick={this.updateState}>Subscribe</button>*/}
                {/* below is another way to bind the event handler but it creates event handler on ever call, so don't use it.
                <button onClick={this.updateState.bind(this)}>Subscribe</button> */}
            </div >
        );
    }
}

export default Subscribe;