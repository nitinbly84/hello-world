import React from 'react'

// Function to show how lists can be passed as Props
function ListProps({ name, index }) {

    return (
        <div>
            <h2>{index} {name}</h2>
        </div>
        )
}

export default ListProps