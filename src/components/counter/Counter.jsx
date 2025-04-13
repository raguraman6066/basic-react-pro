import { useState } from "react";
import "./Counter.css";
function Counter() {
  //initially count will be undefined
  var [count, setCount] = useState(0); //usestate method return one array which contains(state,setstate)
  function setCounter() {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h2>Counter App</h2>
      <p>Count value is : {count}</p>
      <button onClick={setCounter}>incCount</button>
    </div>
  );
}

export default Counter;
