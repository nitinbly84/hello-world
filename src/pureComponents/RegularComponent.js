import React, { Component } from 'react'

class RegularComponent extends Component {

	constructor(props) {
		super(props)

		this.state = {
			name: props.name
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(`Regular component updated...${this.state.name}`)
	}
		
	// Below function updates the state with the value passed via props, if we remove then state will not be updated
	static getDerivedStateFromProps(props, state) {
		state.name = props.name
		return state
	}

	render() {
		console.log("Regular component was rendered....")
		return (
			<h2>RegularComponent_{this.state.name}</h2>
		)
	}
}

export default RegularComponent