import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count + 1);

  return (
    <div>
      <button onClick={increaseCount}>-</button>;<div>Counter: {count}</div>
      <button onClick={decreaseCount}>+</button>;
    </div>
  );
}

export default Counter;
