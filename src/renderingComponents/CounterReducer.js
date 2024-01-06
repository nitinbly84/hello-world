import React, { useReducer } from 'react'

const initialState = 0

const reducer = (value, action) => {
    console.log(action)
    const fun = action.apply()
    console.log(fun)
    return fun
}

const reducer2 = (value, action) => {
    console.log(action)
    switch (action) {
        case 'Same': return value
        case 'Increase' : return value+1
    }
}

function CounterReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer2, initialState)

    // It will be printed if new value is to be re-rendered
    // else it will be executed once on setCount() if no new value is to be re-rendered
    console.log('Rendered........')

    return (
        <div>
            <button onClick={() => dispatch(() => count)}>{count}</button>
            <button onClick={() => dispatch(() => count+1)}>{count}</button>
            <button onClick={() => dispatch2('Same')}>Same:{count2}</button>
            <button onClick={() => dispatch2('Increase')}>Increase: {count2}</button>
        </div>
    )
}

export default CounterReducer