import React from 'react'

function Salary({ sal }) {
    console.log('Salary is rendered........')
    return (
        <h3>{sal}</h3>
    )
}

export default React.memo(Salary)