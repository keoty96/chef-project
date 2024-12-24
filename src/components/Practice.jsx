import React, { useState } from "react";

export default function Practice() {

    const [count , setCount] = useState(0);

    function add() {
        setCount(prevCount => prevCount +  1)
    }

    function substract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <button onClick={substract}>-</button>
            <div>{count}</div>
            <button onClick={add}>+</button>
        </>
    )
}