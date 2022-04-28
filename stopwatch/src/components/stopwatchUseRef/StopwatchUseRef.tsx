import React, { useState, useEffect, useRef } from 'react'
import './stopwatchUseRef.css'



export default function StopwatchUseRef() {

	const [time, setTime] = useState(0)
	const [isActive, setIsActive] = useState(false)

	const interval: any = useRef();
	useEffect(() => {
	  if (isActive === true) {
		interval.current = setInterval(() => {
			setTime((prev) => prev + 1)
		}, 10)
	  } else {
		  clearInterval(interval.current);
	  }
	
	  return () => {
		clearInterval(interval.current);
	  }
	}, [isActive])
	
	function renderStartStopButton() {
		if (isActive === true) {
			return 'Stop';
		} else if (isActive === false) {
			return 'Start';
		}
	}

    function renderMinutes() {
        if (Math.floor(time / 6000) < 10) {
            return `0${Math.floor(time / 6000)}`
        }
    }

	return (
		<div className='stopwatch'>
			<div className='time-formatting'>
                {renderMinutes()}
                :
                {`0${(Math.floor(time / 100)) % 60}`.slice(-2)}
                .
                {`0${time}`.slice(-2)}
            </div>

			<button onClick={() => setIsActive(!isActive)}>{renderStartStopButton()}</button>
			<button onClick={() => setTime(0)}>Reset</button>

		</div>
	)
}
