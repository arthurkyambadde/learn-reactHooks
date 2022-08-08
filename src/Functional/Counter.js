import React from "react";
import { useState } from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #002d62;
  border-radius: 8px;
  gap: 20px;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #002244 5%, #002d62 100%);
  background-color: #002d62;
  border: 1px solid #002244;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 36px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  width: 100px;
  border-radius: 8px;
`;

const CounterDisplay = styled.div`
  color: #005a9c;
`;

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count + 1);

  return (
    <CounterContainer>
      <Button onClick={increaseCount}>-</Button>
      <CounterDisplay>Counter: {count}</CounterDisplay>
      <Button onClick={decreaseCount}>+</Button>;
    </CounterContainer>
  );
}

export default Counter;
