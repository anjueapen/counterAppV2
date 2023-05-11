import { createContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const onIncrement = () => {
        if (count < 10) {
            setCount((prev) => prev + 1);
        }
    };
    const onDecrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };
    return (
        <CountContext.Provider value={{ count, onIncrement, onDecrement }}>{children}</CountContext.Provider>
    );
};