import React, { useState } from 'react'
import Child from '../Child/Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);


  return (
    <div>
        {count}
        <Child/>
        <button onClick={() => setToggle(prev => !prev)}>Click</button>
        <button onClick={() => setCount(prev => prev + 1)}>INC</button>
    </div>
  )
}

export default Parent