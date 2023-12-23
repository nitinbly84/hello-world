import React from 'react'

//function Greet() {
//    return <h1>Hello Nitin</h1>
//}
// Giving names like greet don't work so keep names in with first character in CAPS only.
// props are immutable & give error if tr to change its value
const Greet = props => <h1>Hello {props.name}</h1>;
// below is the way to restructure the props & this way we can just fetch the properties we need & use them directly.
// below is also a way to export the property but not the default for Function component
// if writing in some function then can also destructure like: const { message, name } = props (if in class use, this.props)
export const Msg = ({ message, name }) => <h1>{message} {name},</h1 >
export const NextMsg = props => {
    // props.children gives tag <p> then next call gives the children of <p>
    console.log(props.children);
    return(<h4>{props.children.props.children}</h4>)
}
export default Greet;
