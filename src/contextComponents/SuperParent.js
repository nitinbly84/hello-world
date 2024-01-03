import React from 'react'
import Parent from './Parent'

// In some tutorials, it will be suggested to userContext to pass the values but I feel creating a class with all the required
// values in it & then export it here & import it in the component where it is needed
// We might have tried passing the values as props but if the components in the middle of hierarchy not need these props
// then in every such component we need to pass these props to next component, while we may be needing these in the last
// component. So use Props to pass the values to 1 or 2 levels below.
function SuperParent() {
    return (
        <Parent />
        )

}

class PropertyInherited {
    constructor(name, year) {
        this.name = name
        this.from = year
    }
}

export const PropIn = new PropertyInherited('Sam', `Sam's GrandParent`)
export default SuperParent