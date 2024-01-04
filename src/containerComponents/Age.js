import React from 'react'

function Age({ age }) {
    console.log('Age is rendered............')
    return (
        <h3>{age}</h3>
        )
}

export default React.memo(Age)