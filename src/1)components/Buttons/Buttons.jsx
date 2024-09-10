import React from 'react'

const Buttons = ({handleFocus, handleBlur}) => {
  return (
    <div>
         <button onClick={handleFocus}>Focus</button>
         <button onClick={handleBlur}>Blur</button>
    </div>
  )
}

export default Buttons