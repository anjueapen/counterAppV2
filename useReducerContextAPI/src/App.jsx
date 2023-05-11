import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter";
function App() {
  // const [count, setCount] = useState(0);

  // const onIncrement = () => {
  //   if (count < 10) {
  //     setCount((prev) => prev + 1);
  //   }
  // };
  // const onDecrement = () => {
  //   if (count > 0) {
  //     setCount((prev) => prev - 1);
  //   }
  // };

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
