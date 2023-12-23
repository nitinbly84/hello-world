import React from 'react'
import ListProps from './ListingAsProps'

function NamesList() {
    const names = ['Adam', 'James', 'Nitin']
    // index is used as a key, else React shows warning on browser console that elements should have unique keys
    // index should only be used from immutable lists else index will change for the elments & that may cause errors
    // Generally you will be having list of objects which will be having unique IDs, so use that as keys
    // Indexes are not preferred choice for mutable lists, because key will not be pointing to right index of the item 
    // in the list if we sort the list or we add / delete any item from the list.
    const namesMap = names.map((name, index) => <h3 key={index}>{name}</h3>)
    return (
        <div>
            <h2>Hello {names[0]}</h2>
            <b>List is</b> {names.map((name, index) => <ListProps name={name} index={index}/>)}
            <b>Names map</b>{namesMap}
        </div>
        )
}

export default NamesList