import React from "react"
import './App.css';

function App() {
  const [time, setTime] = React.useState(0)
  const [timerOn, setTimerOn] = React.useState(false)

  React.useEffect(() => {
    let interval = null;
    //setInterval is a javascript method that takes a function as well as  a number, which represents milliseconds. 1000= 1 second
    //clearInterval is another JS method
    if(timerOn){
      interval = setInterval(() =>{
        setTime(prevTime => prevTime + 10)
      },10)
    }else {
      clearInterval(interval) // this  is what stops the timer
    }
    return () => clearInterval(interval) // this is cleanup to stop the interval

  },[timerOn])
  return (
    <div className="App">
      <div>
        <span>{("0" + Math.floor((time /60000) % 60)).slice(-2)}:</span> 
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span> 
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> 
        {/* modulus operator checks to see if divisable by num and what the remainder is. */}
      </div>
      <div>
        <button onClick={()=>setTimerOn(true)}>Start</button>
        <button onClick={()=>setTimerOn(false)}>Stop</button>
        <button onClick={()=>setTimerOn(true)}>Resume</button>
        <button onClick={()=>setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
