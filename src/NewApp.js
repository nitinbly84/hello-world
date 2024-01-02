import React from 'react'
import ClickCounter from './highOrderComponents/ClickCounter'
import Counter from './highOrderComponents/CounterState'
import HoverCounter from './highOrderComponents/HoverCounter'
import BasicHookCounter, { ClassCounter } from './hookComponents/BasicHookCounter'
import UpdateDocFunc, {UpdateDocClass} from './hookComponents/DocumentTitle'
import Arrays from './hookComponents/HookArrayUpdate'
import HookNameUpdate from './hookComponents/HookNameUpdate'
import MousePositionFunc, { MousePositionClass } from './hookComponents/MousePosition'

// Created it as 'App' was having many imports already
function NewApp() {
    // Using HOC here, else can do as done in ClickCounter.js
    const Cl = Counter(HoverCounter, 2)
    return (
        <div className="NewApp">
            {/* < Cl name='Nitin' />
            <ClickCounter />
            <BasicHookCounter />
            <HookNameUpdate />
            <Arrays />
            <UpdateDocFunc /> */}
            <MousePositionFunc />
        </div>
    )
}

export default NewApp