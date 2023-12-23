import React from 'react'

//another way to create the element
// note 'className', if use 'class' only then will see errors in Console logs, it is JSX format
// class -> className, for -> htmlFor, onclick -> onClick, tabindex -> tabIndex
// Check the Elements for the below tags in Developer tab on browser
// React.createElement is called default like in Greet.js, as React will be using it to create the elements.
// Don't use the below memthod in general, as it makes code look complex.
const CreateEl = () => {
    return React.createElement('div', { name : 'Parent' },
        React.createElement('h1', { name : 'Child', className : 'Header' }, 'Creating element using React.createElement'));
}

export default CreateEl;