import { memo } from 'react'

const Child = () => {
    console.log("Child.....")
  return (
    <div>Child</div>
  )
}

export default memo(Child)