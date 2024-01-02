import React, { useState } from 'react'

function HookNameUpdate() {

    const [name, setName] = useState({ firstName: '', lastName: '' })


    // ...name is the spread operattor/function used here to tell to use every property from name 
    // & then overriding the required argument
    return (
        <form>
            <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} autoFocus='1' />
            <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />

            <h3>{name.firstName} {name.lastName}</h3>
        </form>
    )
}

export default HookNameUpdate