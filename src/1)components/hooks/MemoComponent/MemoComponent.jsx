import { useState } from "react"

const MemoComponent = () => {
  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>MemoComponent</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Count++</button>
    </div>
  )
}

export default MemoComponent