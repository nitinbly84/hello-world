import React, { Component } from 'react'

// This shows how one can set the ref from other class component
class ChildRefForm extends Component {
	constructor() {
		super()
		this.ref = React.createRef()
		this.fRef = null
				
	}

	// below shows that other properties can also be changed using ref, check the console log for other properties
	// Getting the ref of an element in the caller component
	change(refs) {
		if (this.ref) {
			this.ref.current.disabled = false
			this.ref.current.focus()
		}
		this.fRef = refs
	}

	disable() {
		this.ref.current.disabled = true
	}

	validate = event => {
		if (event.target.value.length < 3)
			this.fRef.current.disabled = true
		else
			this.fRef.current.disabled = false
	}

	render() {
		return (
			< div >
				<label>Comments: </label>
				<input type="text" ref={this.ref} disabled={true} onChange={this.validate} />
			</div>
		)
	}
}

export default ChildRefForm