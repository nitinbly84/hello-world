import React from 'react'

// If I need to create a second <div> then we need enclose both <div> in another <div> or any other tag, as return
// can have only one parent tag & this causes multiple dom tags created
// But if use FragmemntSample2 then extra <div> is avoided, it is useful when you are taking different parts from different
// places but want to put all those under single tag, i.e. the caller tag
// Also check how the export is done after default, default export can be imported with different name but other exports
// need to be imported as mentioned during export including {}
// React.Fragment can have key='' only as part of props it can be used during the list rendering
// instead of React.Fragment, one can use <></> but then can't pass key attribute
function FragmentSample() {
    return (
        <div>
            < div >
                <h2>This is first div</h2>
            </div>
            <div>
                <h3>This is second div</h3>
            </div>
        </div>
    )
}

function FragmentSample2() {
    return (
        <React.Fragment>
            <div>
                <h2>This is first div</h2>
            </div>
            <div>
                <h3>This is second div</h3>
            </div>           
        </React.Fragment>
        )
}

export default FragmentSample2;
export {FragmentSample}