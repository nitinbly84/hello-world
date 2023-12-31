import React from 'react'
import ReactDOM from 'react-dom'

// https://www.youtube.com/watch?v=HpHLa-5Wdys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=31
function Portal() {
    return ReactDOM.createPortal(
        <h2>Portal Page</h2>,
        document.getElementById('portal-root')
    )
}

export default Portal