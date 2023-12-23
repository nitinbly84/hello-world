import React from 'react'
import '../cssStyles/myStyle.css'
import styles from '../cssStyles/Styles.module.css'

const textStyle = {
	fontSize: '60px',
	color: 'green'
};

// Below shows about how to use different & how we can pass props to select a css style
// Also shows how can we use multiple stles like shown for 'Welcome'
function CssProcessor(props) {
	const colors = ['red', 'aqua', 'blue']
	const colorToUse = colors[props.position]
	console.log(colorToUse)
	return (
		<div>
			<h2 className='primary'>Nitin</h2>
			<h2 className={colorToUse}>Agrawal</h2>
			<h2 className={`${props.name} font-size90`}>Welcome</h2>
			<h2 style={textStyle}>Using Inline style</h2>
			<h2 className={styles.brown}>Using module css</h2>
		</div>
		)
}

export default CssProcessor