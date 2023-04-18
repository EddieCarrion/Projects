import React,{useState} from "react"
import Board from "./Components/board"
import "./App.css"

const App = () => {
  
  const [values,setValues] = useState(Array(9).fill("?"))
  
  const displayFunction = (index) => {
    setValues((prevalues)=>{
      const newValues = [...prevalues]
      newValues[index]= "🌲"
      return newValues
    })
  }
  const tiles = values.map((value,index)=>(
    <Board key={index} value={value} index={index} displayFunction={displayFunction}/>
  ))
  return (
    <>
      <h1>Hello World</h1>
     <div className="container"> 
      {tiles} 
     
     </div>
    </>
    
  )
}

export default App
