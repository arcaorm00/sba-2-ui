import React, {useState} from 'react'

const Counter = () =>{
    const [count, setCount] = useState(0)
    const plusClick = () =>{
        setCount( count + 1)
    }
    const minusClick = () => {
        setCount( count - 1 )
    }
    return <>  
        <h1>counter: {count}</h1>
        <button onclick={plusClick}>plus</button>
        <button onclick={minusClick}>minus</button>
    </>
}

export default Counter