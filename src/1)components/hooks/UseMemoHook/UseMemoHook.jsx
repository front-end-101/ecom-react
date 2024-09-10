import { useMemo, useState } from "react"


const expensiveCalculation = () => {
    console.log("Calculating")
    return 1000*1000
}

const UseMemoHook = () => {
    const [count, setCount] = useState(0);

    const memoise = useMemo(expensiveCalculation,[]);

    console.log(memoise);


    // console.log(expensiveCalculation())

  return (
    <div>
      <h1>useMemo</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(prev => prev + 1)}>INC</button>
    </div>
  )
}

export default UseMemoHook


// useState
// useEffect
// useCallback
// useRef
// useMemo
// memo