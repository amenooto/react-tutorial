import {useState} from "react";

interface props {
    result: string,
    value: number,
    event: any
}
const Square = (props:props) => {

    return (
        <button className="square" onClick={() => props.event(props.value)}>{props.result}</button>
    )
}

export default Square