import React, { useState } from "react";

export default function Practice() {

    const [count , setCount] = useState(0);
    const [messages, setMessages] = useState(['a', 'b', 'c']);

    function add() {
        setCount(prevCount => prevCount +  1)
    }

    function substract() {
        setCount(prevCount => prevCount - 1)
    }

    function checkMessages() {
        if (messages.length === 0) {
            return "You're all caught up"
        } else if (messages.length === 1) {
            return "You have 1 unread messages"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }

    checkMessages();

    return (
        <>
            <button onClick={substract}>-</button>
            <div>{count}</div>
            <button onClick={add}>+</button>
            <hr />
            <h2>{checkMessages()}</h2>
        </>
    )
}