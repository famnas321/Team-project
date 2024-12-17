import { useState,useEffect } from 'react'
import React from 'react';
import Child from './component/Child';


function App() {
  
 const [message,seMessage]=useState("hello")
 function choosemessage(msg){
  seMessage(msg)
 }
  
  return (
    <>
      <div>
        <p>{message}</p>
        <Child choosemessage={choosemessage}/>
      </div>
       
    </>
  )
}

export default App
