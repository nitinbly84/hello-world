import React from 'react'
import ClickCounter from './highOrderComponents/ClickCounter'
import Counter from './highOrderComponents/CounterState'
import HoverCounter from './highOrderComponents/HoverCounter'

// Created it as 'App' was having many imports already
function NewApp() {
    // Using HOC here, else can do as done in ClickCounter.js
    const Cl = Counter(HoverCounter, 2)
    return (
        <div className="NewApp">
            < Cl name='Nitin' />
            <ClickCounter />
        </div>
    )
}

export default NewApp