import React, { useState, useEffect } from 'react'
import './stopwatch.css'

// This is a common implementation of a stopwatch in React. It uses setInterval to incremet the time.
// Note: The time state must be left out of the useEffect dependncy array or it will cause to many rerenders and calculations, slowing down the stopwatch.
// Note: This implementation does not work if you change tabs because the screen stops rendering, resulting in the stopwatch pausing.

export default function Stopwatch() {
	const [time, setTime] = useState(0)
	const [isActive, setIsActive] = useState(false)
	useEffect(() => {
	  let interval: any = null;
	  if (isActive === true) {
		interval = setInterval(() => {
			setTime((prev) => prev + 1)
		}, 10)
	  } else {
		  clearInterval(interval);
	  }
	
	  return () => {
		clearInterval(interval);
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
