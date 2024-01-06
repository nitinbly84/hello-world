import React, { useState } from 'react'

function ObjectRendering() {

	const person = {
		fName: 'Nitin',
		lName: 'Agrawal'
	}

	const [personState, setPerson] = useState(person)

	console.log('Rendered........')

	// If we uncomment the below lines then it will be rendered only once, as React uses Object.is to check if 2 objects
	// are equal or not, like in Java object references are checked to verify if 2 objects are equal.
	// So when changing the values in personState, we are not changing the reference, so React do see any change & doesn't re-render
	// But if we provide a new object like shown below then every time React wil render the component, even if we give same object
	// values, as object will be different everytime for React
	const changePerson = () => {
		// personState.fName = 'Sam'
		// personState.lName = 'Paul'
		// setPerson(personState)
		setPerson({
			fName: 'Sam',
			lName: 'Paul'
		})
	}

	return (
		<div>
			<button onClick={ changePerson }>{personState.fName}</button>
		</div>
		)

}

export default ObjectRendering