import React, { memo } from 'react'

const Search = ({handleSearch}) => {
  console.log("Search rendered")
  return (
    <div>
        <input type="text" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  )
}

export default memo(Search)

