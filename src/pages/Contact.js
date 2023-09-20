import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CountContext } from "../App";
function Contact() {
  const { count, setCount } = useContext(CountContext);
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
      <h1>This is the conatct page</h1>
      <p>The value of count is {count}</p>
      <div class="count-con">
        <button onClick={() => setCount((prev) => prev - 5)}>Minus</button>
        <p>{count}</p>
        <button onClick={add}>Add</button>
      </div>
      <Link to={"/"}>Go Back Home</Link>
      <Link to={"/count"}>Count</Link>
    </div>
  );
}

export default Contact;
