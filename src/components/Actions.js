import React from 'react';

const Actions=({timerOn,setTimerOn,setTime,time,lapsTime})=>{
	return(
		<div>
			{!timerOn && time===0 && (<button className='start' onClick={()=>setTimerOn(true)}>Start</button>)}
			{timerOn && (<button className='stop' onClick={()=>setTimerOn(false)}>Stop</button>)}
			{!timerOn && time!==0 && (<button className='pause' onClick={()=>setTimerOn(true)}>Resume</button>)}
			{!timerOn && time>0 && (<button onClick={()=>setTime(0)}>Reset</button>)}
			{timerOn && time>0 && (<button className='lap' onClick={lapsTime}>Lap</button>)}
		</div>
	)
}

export default Actions;