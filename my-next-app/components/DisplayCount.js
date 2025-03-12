import React, { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const DisplayCount = () => {
    const { count } = useContext(CounterContext);

    return <h3>Count: {count}</h3>;
};

export default DisplayCount;