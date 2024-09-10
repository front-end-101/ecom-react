import { useEffect, useRef, useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  // const timerRef = useRef(null);
  const prevCount = useRef();

  // const handleStart = () => {
  //   if(timerRef.current !== null) return
  //   timerRef.current = setInterval(() => {
  //     setCount(prev => prev + 1)
  //   },1000)
  // }

  // const handleStop = () => {
  //   clearInterval(timerRef.current);
  //   timerRef.current = null
  // }

  useEffect(() => {
    prevCount.current = count;
  },[count])

  const increment =  () => setCount(prev => prev + 1)

  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>current {count}</h2>
      <h2>Previous {prevCount.current}</h2>
      <button onClick={increment}>Inc</button>
      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> */}
    </div>
  );
}

export default Counter;
