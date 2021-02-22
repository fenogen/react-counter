// -------------------------------------------- Counter через Hooks:

import React, { useState } from "react";
import classes from "./Counter.module.css";

const Counter = ({title}) => {
  const [count, setCount] = useState(50);
  const [name, setName] = useState(title);
  // setCount and setName - называются аналогично count and name, это ф-и, которые изменяют значения count and name
  // useState - это один из хуков
  
  const reset = () => {
    setCount(0);
  }
  
  const plus = () => {
  setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
    }

  return (
      <div className={classes.Container}>
        <h1>Counter {name}</h1>
        <div className={classes.Count}>{count}</div>
        <div>
          <button onClick={minus}>-</button>
          <button onClick={reset}>0</button>
          <button onClick={plus}>+</button>
        </div>
      </div>
    );
  }

export default Counter;
