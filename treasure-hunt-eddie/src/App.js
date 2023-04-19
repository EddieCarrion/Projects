import React,{useState} from "react"
import Board from "./Components/board"
import "./App.css"

const App = () => {
  
  const [values,setValues] = useState(Array(9).fill("?"))
  const [treasureIndex, setTreasureIndex] = useState(null)
  const [bombIndex, setbombIndex] = useState(null)
  const calculateIndex = () => {
    const newTreasureIndex = Math.floor(Math.random()*9)
    setTreasureIndex(newTreasureIndex)
    let newBombIndex 
    do {
      newBombIndex = Math.floor(Math.random()*9)
    } while(newBombIndex===newTreasureIndex)
    setbombIndex(newBombIndex)
  }
  useState(()=>{
    calculateIndex()
  },[])
  const displayFunction = (index) => {
    const newValue = values.slice()
    let trueValue
    if (index === treasureIndex){
      trueValue = "💎"
    } else if (index === bombIndex){
      trueValue = "💣"
    } else {
      trueValue = "🌲"
    }
    newValue[index] = trueValue
    setValues(newValue)
  }
 
  return (
    <>
      <h1>Hello World</h1>
     <div className="container"> 
      {values.map((value,index)=>(
         <Board key={index} value={value} displayFunction={()=>displayFunction(index)}/>
      ))}
     
     </div>
    </>
    
  )
}

export default App
