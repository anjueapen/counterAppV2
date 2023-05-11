import React, { useReducer } from "react";
import { ACTIONS, counterReducer } from "./counterReducer";
export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <h1>Counter {state.count}</h1>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>Decrement</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET, payload: 0 })}>Reset</button>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT_BY, payload: 10 })}>Increment By 10</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT_BY, payload: { count: 5 } })}>Decrement By 5</button>
    </>
  );
};
