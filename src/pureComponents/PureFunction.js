import React from 'react'

function PureFunction({ name }) {
	console.log(`Pure Function is called with name: ${name}`)

	return (
		<div>
			< h2 > {name}</h2>
		</div>
	)

}

// React.memo() makes the function like PureComponent & it is like Higher Order Functions or can relate it with
// some decorator pattern
export default React.memo(PureFunction)
//export default PureFunction