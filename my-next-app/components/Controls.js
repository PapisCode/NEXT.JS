import React, { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const Controls = () => {
    const {incrementCount, decrementCount } = useContext(CounterContext);

    return (
        <div>
            <button onClick={incrementCount}>Increase</button>
            <button onClick={decrementCount}>Decrease</button>
        </div>
    );
};

export default Controls;