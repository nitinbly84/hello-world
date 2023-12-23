import React, { Component } from 'react'

function CustomEvent() {

    function eventHandler() {
        console.log('Button clicked')
    }

    // Function is being passed as event handler & if we add () then it becomems a function call & it is executed
    // in class component, it is this.eventHandler, rest remains same
    // before the click operation, it is in JSX
    // we can use => function also to use as an expression like- {() => eventHandler()}
    return (
        <div>
            <button onClick={eventHandler}>ClickMe</button>
        </div>
        )
}

export default CustomEvent