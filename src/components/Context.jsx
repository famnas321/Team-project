import React from 'react'
import { createContext,useState } from 'react'
import Component2 from './Component2'
 export const userDemo=createContext()
function Context() {
    const [counter,setCounter]=useState(0);
  return (
    <div>
        <userDemo.Provider value={{counter,setCounter}}>
            <Component2/>
        </userDemo.Provider>
    </div>
  )
}

export default Context