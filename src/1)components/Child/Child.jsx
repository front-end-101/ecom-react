import React, { memo } from 'react'

export default memo(function Child()  {
    console.log("CHILD RERENDER")
  return (
    <div>Child</div>
  )
})




