import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count, setcount] = useState(0);
  const handlechange = (data) => {
    if (count < 0 || count === 0) { }
    else {
      setcount(data)
    }

  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => setcount(count + 1)} >incr</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={() => handlechange(count - 1)} >decr</button>
    </div>
  );
};

export default Counter;
