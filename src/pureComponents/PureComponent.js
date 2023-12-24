import React, { PureComponent } from 'react'

// Pure component is re-rendered only when there is state or props change.
// shallow comparison is done to check if change is done
// if the values are primitive then their type & values are checked
// if the values are objects then their references are checked
class PurComponent extends PureComponent {

	constructor(props) {
		super(props)

		this.state = {
			name: props.name
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(`Pure component updated...${this.state.name}`)
	}

	// Below function updates the state with the value passed via props, if we remove then state will not be updated
	static getDerivedStateFromProps(props, state) {
		// if we comment eblow line then also this component will be re-rendered, if props are still changing
		state.name = props.name
		return state
	}

	render() {
		console.log("Pure component was rendered....")
		return (
			<h2>PureComponent_{this.state.name}</h2>
		)
	}
}

export default PurComponent