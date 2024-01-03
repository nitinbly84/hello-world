import React from 'react'
import { LifecycleB } from './components/LifecycleComponent'
import SuperParent from './contextComponents/SuperParent'
import ClickCounter from './highOrderComponents/ClickCounter'
import Counter from './highOrderComponents/CounterState'
import HoverCounter from './highOrderComponents/HoverCounter'
import BasicHookCounter, { ClassCounter } from './hookComponents/BasicHookCounter'
import UpdateDocFunc, {UpdateDocClass} from './hookComponents/DocumentTitle'
import Arrays from './hookComponents/HookArrayUpdate'
import HookNameUpdate from './hookComponents/HookNameUpdate'
import IntervalHook from './hookComponents/IntervalHook'
import MousePositionFunc, { MousePositionClass } from './hookComponents/MousePosition'
import MouseUnMount from './hookComponents/MouseUnmount'
import WebDataFetchHook from './hookComponents/WebDataFetchHook'

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
            <UpdateDocFunc />
            <MousePositionFunc />
            <MouseUnMount />
            <LifecycleB />
            <IntervalHook />
            <WebDataFetchHook /> */}
            <SuperParent />
        </div>
    )
}

export default NewApp