import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    // Check the name of methods, else result will not be expected one
    static getDerivedStateFromError(error) {
        console.log('Got the error.........')
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('Caught an error.....')
    }

    render() {
        if (this.state.hasError) {
            console.log('Log Error.........')
            return this.props.fallback;
        }
        return this.props.children
    }
}

export default ErrorBoundary