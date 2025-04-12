import "./Counter.css";
function Counter() {
  var count = 0;
  function increaseCount() {
    count = count + 1;
  }
  return (
    <div className="counter">
      <h2>Counter App</h2>
      <p>Count value is : {count}</p>
      <button onClick={increaseCount}>incCount</button>
    </div>
  );
}

export default Counter;
