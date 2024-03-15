import {useState} from 'react'

function Count(){

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


    return <>
    <button onClick={decrement}>-1</button>
    <span>{count}</span>
    <button onClick={increment}>+1</button>
    </>
}

export default Count