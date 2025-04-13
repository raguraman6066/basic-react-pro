import { useState } from "react";
import "./Counter.css";
function Counter() {
  //initially count will be undefined
  var [count, setCount] = useState(0); //usestate method return one array which contains(state,setstate)
  function setCounter() {
    setCount(count + 1); //here initial state
    //setCount(count + 1);//here initial state
    console.log(count);
    //setCount is async method
    //setCount internally use callback function(optional)
    //setCount((prevState)=>{return prevState+1})//here previous state value
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
