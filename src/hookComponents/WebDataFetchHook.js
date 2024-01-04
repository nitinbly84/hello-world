import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Function to show how to fetch data in useEffect()
// It shows that more than one useEffect() & useState can be used
function WebDataFetchHook() {

    const [postID, setPostID] = useState('')
    const [posts, setPosts] = useState('')
    const [userID, setUserID] = useState('')
    const [user, setUser] = useState('')

    // [postID] as dependency array to avoid infinite loop of API calls
    // Have put the condition to make the API call when postID is not empty & a number
    // One can use other http methods with axios like-
    // axios.post('<URI>', <body object>)
    useEffect(() => {
        postID && Number(postID) && axios.get('https://jsonplaceholder.typicode.com/posts?id=' + postID)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [postID])

    // here we are getting the objbect in response & not an array like above, so map() is not required
    useEffect(() => {
        userID && Number(userID) && axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(res => {
                console.log(res)
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [userID])

    const updatePostID = event => {
        setPostID(event.target.value)
    }

    const updateUserID = event => {
        setUserID(event.target.value)
    }

    // key is used in <li> below else warning will be shown in console, as it is used by React to determine if the particular
    // item has changed & needs to be rendered.
    return(
        < div >
            <h3> PostID: <input type='text' value={postID} onChange={updatePostID} /> </h3>
            <ul>
                {
                    posts && posts.map && posts.map(p => <li key={p.id}><b>Title:- </b>{p.title}</li>)
                }
            </ul>
            <h3> UserID: <input type='text' value={userID} onChange={updateUserID} /> </h3>
            <ul>
                {
                    user && <li key={user.id}><b>Name:- </b>{user.name}</li>
                }
            </ul>
        </div >
    )
}

export default WebDataFetchHook