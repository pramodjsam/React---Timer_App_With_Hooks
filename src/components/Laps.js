import React from 'react';

const Laps=({laps})=>{
	return(
		<div className='laps'>
			{laps.map((lap,index)=>(
				<div className='lap' key={index}>{lap}</div>
			))}
		</div>
	)
}

export default Laps;