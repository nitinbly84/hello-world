import React, { useState, useEffect } from 'react'

// This is also a example where we can create multiple functions & classes to be used by one component only which is exported
// rest others will ramain hidden for others.
function MouseMovement() {

    const action = (val) => {
        if (val)
            console.log('Component mounted.....')
        else
            console.log('Component unmounted.....')
    }

    // Note- useEffect can also return a function which will be executed when component is unmounted
    // Also, I have not mentioned an array of props or states or empty array, as nothing is changing between
    // mounting & unmounting, useEffect will be triggered only on mounting & during unmounting return function will be
    // executed & nothing is happening in between, if we are having any state or prop changes in this component then
    // we may need to use the arra depending on the requirements
    useEffect(() => {
        console.log('useEffect executed........')
        window.addEventListener('mousemove', action(true))

        return () => {
            console.log('Unmounting MouseUnmount..........')
            window.removeEventListener('mousemove', action(false))
        }
    })
}

function MouseUnMount() {

    const [state, setState] = useState(false)
    const [action, setAction] = useState('Mount')

    const changeAction = () => {
        setState(!state)
        if (state)
            setAction('Mount')
        else
            setAction('UnMount')
    }

    return (
        <div>
            <button onClick={changeAction}>{action}</button>
            {state && <MouseMovement />}
        </div>
    )
}

export default MouseUnMount