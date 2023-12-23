import React from 'react'

// below we can use props.greetParent but if need to pass some parameter then use => as shown below.
function ChildComponent(props) {
   
        return(
            <div>
                <button onClick={() => props.greetParent('Child')}>Greet Parent</button>
            </div>
        )
   
}

export default ChildComponent