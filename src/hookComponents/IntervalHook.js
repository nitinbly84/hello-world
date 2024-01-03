import React, { useState, useEffect } from 'react'

function IntervalHook() {

    const [count, setCount] = useState(0)
    

    const tick = () => {
        //setCount(count+1) //Form-1
        setCount(prevCount => prevCount+1) // Form-2
    }

    // Setting interval outside useEffect() will give wrong results with both forms
    // as it is causing the side effects on each render, so don't use such methods outside
    // const interval = setInterval(tick, 1000) // Form-1
    // const interval = setInterval(tick, 1000) // Form-2

    // interval is cleared during unmount as return function is executed during unmount only & it avoids any memory leaks
    // We can have multiple useEffect() but put all the related code in one useEffect() & useEffect() is used to replicate
    // the lifecycle methods in class components
    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            console.log('interval is cleared......')
            clearInterval(interval)
        }
    }, [])
    // If we empty dependency array with Form-1 then we tell not to have dependency on any parameter & it useEffect() will be
    // executed only once making the count = 1. So if we have dependency array as empty then don't use any function having such
    // dependency, so Form-2 will work with empty dependency array
    // With Form-1, we need to use [count] as dependency array

    return (
        <div>{count}</div>
        )
}

export default IntervalHook