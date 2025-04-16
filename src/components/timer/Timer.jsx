import React, { useRef, useState } from "react";

export const Timer = () => {
  let [timer, setTimer] = useState(0);
  //   let [timerid, settimerid] = useState();//invalid
  let timerId = useRef();

  function startTimer() {
    timerId.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerId.current);
  }
  function clearTimer() {
    setTimer(0);
  }
  return (
    <div
      style={{
        width: "500px",
        margin: "100px",
        padding: "100px",
        textAlign: "center",
        boxShadow: "0 0 10px black",
      }}
    >
      <h2>Timer value is : {timer}</h2>
      <button style={{ margin: "10px" }} onClick={startTimer}>
        start
      </button>
      <button style={{ margin: "10px" }} onClick={stopTimer}>
        stop
      </button>
      <button style={{ margin: "10px" }} onClick={clearTimer}>
        clear
      </button>
    </div>
  );
};
