import React from 'react'

function Title() {
    let i = 0
    //adding the delay
    while (i < 4000000000) i++
    console.log('Title is rendered.......')
    
    return (
        <h2>Title with no Props</h2>
        )
}

// it is memoization of the enclosed object to enable rendering only when there is any change in the object
// and it improves the application performamnce by stopping useless re-rendering
// You will observe that first time rendering takes time but further rendering is fast, as title is not changed & so
// title is not re-rendered on next requests avoiding the delay.
export default React.memo(Title)