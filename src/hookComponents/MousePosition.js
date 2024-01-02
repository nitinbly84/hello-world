import React, { useState, useEffect, Component } from 'react'

function MousePositionFunc() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    // empty array tells React that useEffect doesn't depend on anything, so it will be executed only once
    useEffect(() => {
        console.log('useEffect called....')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <div>
            X: {x}<br />
            Y: {y}
        </div>
        )
}

class MousePositionClass extends Component {
    constructor() {
        super()

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    // mousemove is the event name, so name should be exactly same

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                X: {this.state.x}<br />
                Y: {this.state.y}
            </div>
        )
    }
}

export { MousePositionClass }
export default MousePositionFunc