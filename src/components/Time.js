import React,{useState,useEffect} from 'react';
import Actions from './Actions'
import Laps from './Laps';

const Time=()=>{
	const [time,setTime]=useState(0);
	const [timerOn,setTimerOn]=useState(false);
	const [formattedTime,setFormattedTime]=useState("00:00:00");
	const [laps,setLaps]=useState([]);

	useEffect(()=>{
		let interval=null;
		if(timerOn){
			interval=setInterval(()=>{
				setTime(prevState=>prevState+1)
			},1000)
		}else{
			clearInterval(interval);
		}
		return()=>clearInterval(interval);
	},[timerOn])

	useEffect(()=>{
		formatTime(time);
	},[time])

	const lapsTime=()=>{
		let lap=time;
		let date=new Date(null);
		date.setSeconds(lap);
		let forTime=date.toISOString().substr(11,8);
		setLaps(prevState=>[...prevState,forTime])
	}

	const formatTime=(sec)=>{
		let date=new Date(null);
		date.setSeconds(sec);
		let forTime=date.toISOString().substr(11,8);
		setFormattedTime(forTime);
	}

	return(
		<div className='App'>
			<header className='App-header'>
				<h2>TimerApp <span>Using different method</span></h2>
			</header>
			<div className='time-view'>
				<div className='time'>{formattedTime}</div>
			</div>
			<Actions 
			timerOn={timerOn} 
			setTimerOn={setTimerOn} 
			setTime={setTime}
			time={time}
			lapsTime={lapsTime}
			/>
			<Laps laps={laps} />
		</div>
	)
}

export default Time;