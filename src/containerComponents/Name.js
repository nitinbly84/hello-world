import React from 'react'

function Name({ fName, lName }) {
    console.log('Name is rendered.........')
    return (
        <h3>{fName} {lName}</h3>
    )
}

export default React.memo(Name)