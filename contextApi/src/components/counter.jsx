import React, { useContext } from "react";
import { CountContext } from "../Context/countContext";

export const Counter = () => {
  const { count, onIncrement, onDecrement } = useContext(CountContext);
  console.log("count is" + count)
  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
};
