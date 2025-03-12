import React, { useState} from 'react';
import { CounterContext } from "../context/CounterProvider";
import DisplayCount from "./DisplayCount";
import Controls from "./Controls";

const Counter = () => {
    const { count } = useContext(CounterContext);

    return (
        <div style={{textAlign: "center", padding: "20px", border: "1px solid black"}}>
            <h2>Counter Component</h2>
            <DisplayCount />
            <Controls />
        </div>
    );
};

export default Counter;