import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }


  return (
    <div>
      <h2>{counter}</h2>
      <button type="buttom" onClick={increment}>
        Increment
      </button>
      <button>oi</button>
    </div>
  );
}