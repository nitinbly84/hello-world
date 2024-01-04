import React, { useState, useCallback, useMemo} from 'react'
import Age from './Age'
import Button from './Button'
import Name from './Name'
import Salary from './Salary'
import Title from './Title'

// check useCallback() to avoid re-rendering of button even the corresponding state is not changed
// this improves the performance.
// useCallback() if you want to cache the function, but if you want to cache the result of the function
// then use useMemo(), thoughg both look same but this is the difference.
function Container() {

    const [curAge, setAge] = useState(22)
    const [curSal, setSal] = useState(3000)

    // handleAge & handlelSal will be re-rendered if any of these states is changed & it can impact the performance
    // if there are multiple such components being rendered uselessly
    const handleAge = incr => {
        setAge(curAge + incr)
    }

    const handleSal = inc => {
        setSal(curSal + inc)
    }

    // useCallback is like useEffect & it also accepts the dependency array, so that it will be executed only
    // when any parameter in the depedency array is changed & if the array is empty then it is executed only once
    // i.e. during component mount & will behave like componentDidMount()
    const handleAgeOne = useCallback(() => {
        setAge(curAge + 1)
    }, [curAge])

    const handleSalOne = useCallback(() => {
        setSal(curSal + 1)
    }, [curSal])


    // below shows how parameters can be passed to useCallback()
    const handleAgeTwo = useCallback(incr => {
        setAge(curAge + incr)
    }, [curAge])

    const handleSalTwo = useCallback(incr => {
        setSal(curSal + incr)
    }, [curSal])

    return (
        <div>
            <Title />
            <Name fName='Nitin' lName='Agrawal' />
            <Age age={curAge} />
            <Button handleClick={handleAgeTwo} incr={10}>Increase Age</Button>
            <Salary sal={curSal} />
            <Button handleClick={handleSalTwo} incr={1000}>Increase Salary</Button>
        </div>
        )
}

export default Container