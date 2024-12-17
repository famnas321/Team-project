import React from 'react'
import { useContext } from 'react'
import { userDemo } from './context';
function Component2() {
   const {counter,setCounter}=useContext(userDemo);
  return (
    <div>
      <button onClick={()=>setCounter((counter)=>counter+1)}>click</button>
      <h1>{counter}</h1>
    </div>
  )
}

export default Component2