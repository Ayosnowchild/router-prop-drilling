import React, { useState } from "react";
import "./count.css";
import One from "../../components/One";
import Two from "../../components/Two";
import Three from "../../components/Three";
import Four from "../../components/Four";
function Count() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prev) => {
      if (prev >= 50) {
        return prev;
      }
      return prev + 5;
    });
  };
  return (
    <div>
      <h1>Count Page</h1>
      <div class="count-con">
        <button onClick={() => setCount((prev) => prev - 5)}>Minus</button>
        <p>{count}</p>
        <button onClick={add}>Add</button>
      </div>
      <One Onecount={count} OnesetCount={setCount} />
      <Two />
      <Three />
      <Four />
    </div>
  );
}

export default Count;
