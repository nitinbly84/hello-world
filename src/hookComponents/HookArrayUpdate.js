import React, { useState } from 'react'

function Arrays() {

    const [nums, setNums] = useState([])

    // Check ...nums spread operator
    const addNum = () => {
        setNums([...nums, Math.floor(Math.random()*10)])
    }

    // Check how map() is used to iterate through the elements & process them.
    return (
        <div>
            < button onClick={addNum}> Add Number </button>

            <ul>
                {nums.map(num => (
                    <li>{num}</li>
                ))}
            </ul>
        </div>
    )
}

export default Arrays