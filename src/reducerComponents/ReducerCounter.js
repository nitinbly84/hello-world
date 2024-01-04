import React, { useReducer } from 'react'

const initialCount = 0
const reducer = (count, action) => {
    switch (action) {
        case 'Increment' : return count + 1;
        case 'Decrement' : return count - 1;
        case 'Reset': return initialCount;
        default: return count;

    }
}

function ReducerCounter() {
    const [count, dispatch] = useReducer(reducer, initialCount)

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch('Increment') }>Increment</button>
            <button onClick={() => dispatch('Decrement') }>Decrement</button>
            <button onClick={() => dispatch('Reset')  }>Reset</button>
        </div>
        )
}

export default ReducerCounter