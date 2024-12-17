import React from 'react'

function Child({choosemessage}) {
  return (
    <div>
       <button onClick={()=>choosemessage("goodbye")}>click</button>
    </div>
  )
}

export default Child