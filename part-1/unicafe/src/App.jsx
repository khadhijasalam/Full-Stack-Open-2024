import { useState } from 'react'

import Statistics from './Statistics'
import Button from './Button'


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
const handleSetGood=()=>{
  setGood((g)=>g+1);
}
const handleSetNeutral=()=>{
  setNeutral((n)=>n+1)
}
const handleSetBad=()=>{
  setBad((b)=>b+1);
}

const all= good+bad+neutral
const average=(good*1+bad*-1)/all
const pos=(good/all)*100+'%'
const Display=()=>{
  if(good==0&&neutral==0&&bad==0){
    return(
      <p><b>No statistics given</b></p>
    )    }

    else{
      return(<>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} pos={pos} />
      </>)
  }
}

  return (
    <>
      <h2>Give Feedback</h2>
    
      <Button text="good" clickFunction={handleSetGood} />

      <Button text="neutral" clickFunction={handleSetNeutral}/>

      <Button text="bad" clickFunction={handleSetBad}/>

 


      <h2>statistics</h2>
      <Display/>
    

  
      
 
    </>
  )
}

export default App