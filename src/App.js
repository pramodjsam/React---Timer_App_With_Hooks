import React,{useState,useEffect} from 'react';
import Time from './components/Time';
import './App.css';

const App=()=>{
  const [time,setTime]=useState(0);
  const [timerOn,setTimerOn]=useState(false);

  useEffect(()=>{
    let interval=null;
    if(timerOn){
      interval=setInterval(()=>{
        setTime(prevState=>prevState+10)
      },10)
    }else{
      clearInterval(interval)
    }
    return()=>clearInterval(interval)
  },[timerOn])

  return(
    <div className='Timers'>
      <h2>Stopwatch</h2>
      <div className='display'>
        <span>{(("0" + Math.floor((time/60000)%60)).slice(-2))}:</span>
        <span>{(("0" + Math.floor((time/1000)%60)).slice(-2))}:</span>
        <span>{(("0" + ((time/10)%100)).slice(-2))}</span>
      </div>      
      <div className='buttons'>
        {!timerOn && time===0 && (
          <button onClick={()=>setTimerOn(true)}>Start</button>
        )}
        {timerOn && (
          <button onClick={()=>setTimerOn(false)}>Stop</button>
        )}
        {!timerOn && time!==0 && (
          <button onClick={()=>setTimerOn(true)}>Resume</button>
        )}
        {!timerOn && time>0 && (
          <button onClick={()=>setTime(0)}>Reset</button>
        )}        
      </div>
      <Time />
    </div>
  )
}

export default App;