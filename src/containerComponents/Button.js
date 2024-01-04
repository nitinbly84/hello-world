import React from 'react'

// Note - Parameters are received as object {} & thteir names should be the same as used in Props. 'children' is the name
// used to refer value used between the tags <t>value</t>
function Button({ handleClick, incr, children }) {
    
    console.log(`${children} Button is rendered...........`)
    return (
        <button onClick={event => handleClick(incr)}>{children}</button>
        )
}

export default React.memo(Button)