import React from "react"
import Board from "./Components/board"
import "./App.css"

const App = () => {
  const values = ["?","?","?","?","?","?","?","?","?"]
  const tiles = values.map((value,index)=>(
    <Board key={index} value={value}/>
  ))
  return (
    <>
      <h1>Hello World</h1>
     <div> {tiles} 
     
     </div>
    </>
    
  )
}

export default App
