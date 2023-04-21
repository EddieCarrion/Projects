import React,{useState} from "react"
import Board from "./Components/board"
import "./App.css"

const App = () => {
  
  const [values,setValues] = useState(Array(9).fill("?"))
  const [treasureIndex, setTreasureIndex] = useState(null)
  const [bombIndex, setBombIndex] = useState(null)
  const [clickCount, setClickCount] = useState(5)
  const [currentValue, setCurrentValue] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const calculateIndex = () => {
    const newTreasureIndex = Math.floor(Math.random()*9)
    setTreasureIndex(newTreasureIndex)
    let newBombIndex 
    do {
      newBombIndex = Math.floor(Math.random()*9)
    } while(newBombIndex===newTreasureIndex)
    setBombIndex(newBombIndex)
  }
  useState(()=>{
    calculateIndex()
  },[])
  const displayFunction = (index) => {
    if (clickCount > 0){
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
      const currentValue = newValue[index]
      setValues(newValue)
      if (currentValue==="💣"){
        setClickCount(0)
        setCurrentValue("💣")
        setShowMessage(true)
      } else if (currentValue==="💎"){
        setClickCount(0)
        setCurrentValue("💎")
        setShowMessage(true)
      } else {
        setClickCount(clickCount - 1)
      }
    
     
    }
    
    
  }
  const toggleMessage = () => {
    setShowMessage(!showMessage)
  }
  const reloadPage = () => {
    toggleMessage() 
    window.location.reload()
  }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="clickCount">
        attempts remaining
        <div>{clickCount}</div> 


      </div>
     <div className="container"> 
      {values.map((value,index)=>(
         <Board key={index} value={value} displayFunction={()=>displayFunction(index)}/>
      ))}
     {showMessage && (
      <div className="message">
        {currentValue==="💣" && <p>oh no you lost!</p>}
        {currentValue==="💎" && <p>Yes! You win!</p>}
        <button onClick={reloadPage}>Would You like to play again?</button>
        </div>
     )}
     </div>
    </>
    
  )
}

export default App
