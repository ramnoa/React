import { useState } from "react";
export default function Counter() {
  const [Count, SetCount] = useState(0);
  const [increamentBy , setIncreamentBy] = useState(1);
  function handleClick() {
    SetCount(Count + increamentBy);
  }

  function handleDecrement() {
    SetCount(Count - increamentBy);
  }

  function handleIncreament() {
    setIncreamentBy(increamentBy + 1);
  }
  function handleDecrease() {
    setIncreamentBy(increamentBy - 1);
  }
  return (
    <div>
      <h1>Count Value is: {Count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>Increment By: {increamentBy}</h1>
      <button onClick={handleIncreament}>Increment</button>
      <button onClick={handleDecrease}>Decrement </button>

      

    </div>
  );
}
