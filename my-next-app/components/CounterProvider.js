import React, { createContext, useState } from "react";

// Create Context

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ count, incrementCount, decrementCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;