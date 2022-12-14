import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwo() {

    const [count,increment,decrement,reset] = useCounter(10,10)

    
    return (
        <>
        {count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

        <button onClick={reset}>reset</button>

        </>
    )
}

export default CounterTwo