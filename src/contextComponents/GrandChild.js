import React from 'react'
import { PropIn } from './SuperParent'

function GrandChild() {
    return (
        <h2>Got the property from {PropIn.from} for {PropIn.name} </h2>
    )

}

export default GrandChild