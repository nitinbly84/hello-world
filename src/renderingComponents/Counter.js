import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    // It will be printed if new value is to be re-rendered
    // else it will be executed once on setCount() if no new value is to be re-rendered
    console.log('Rendered........')

    return (
        <div>
            <button onClick={() => setCount(count)}>{count}</button>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default Counter