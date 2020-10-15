import React from 'react';

export default function Greeter(props){
    const greet = () => {
        alert(`Hello there, ${props.name}`)
    }
    return(
        <>
            <h1>Hi there, {props.name}!</h1>
            <p>You are {props.age} years old.</p>
            <button onClick={greet}>Click me</button>
        </>
    )
}

