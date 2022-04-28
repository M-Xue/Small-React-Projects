import React, { useState, MouseEvent, useEffect } from 'react'
import './stopwatchDate.css'


export default function StopwatchDate() {

  const [time, setTime] = useState<number>(0)
  const [start, setStart] = useState<boolean>(false)
  const [startTime, setStartTime] = useState<number>(Date.now())
  const [pausedTime, setPausedTime] = useState<number>(Date.now())

  // Use the javascript date object for more accurate timing
  // If we use setTimeout and the current run of the useEffect was in the same millisecond and the previous useEffect, the setTime() function will not run because there is no change in state if the arguments are the same (which occurs since the difference in time is the same since we are doing the calculation in the same millisecond)
  // Hence, we use setInterval. This means that even if the update calculation was made in the same millisecond, after the given interval delay, difference in time will be recalculated anyway and will at some point occur in a different millisecond, allong the rerenders to continue.
  useEffect(() => {
    let interval: any = null;

    if (start === true) {
      interval = window.setInterval(() => {
        setTime(Math.floor((Date.now() - startTime)/10))
      }, 10);
    } else {
      clearInterval(interval);
    };

    return () => {
      clearInterval(interval);
    };
  }, [start, startTime]);

  function handleStartStop(event: MouseEvent) {

    // If start is currently true, that means we are about to make it false. If it is false, it means we are about to make it true.
    // If we are stopping the counter, we want to take note of the current time at which we are stopping. 
    // When we restart the counter, we will push up the original starting time by the period that has elapsed between when we paused and the current time because in the end, we calculate the current time by finding the difference between the start time and the current time so by pushing this start time up, we make up for the paused time.
    if (start === false) {
      setStartTime(startTime + (Date.now() - pausedTime)) // This is not the time that is rendered. It is used to calculate that time in the setInterval() setTime() where we essentially do Date.now() - Date.now() on the first start button click.
    } else if (start === true) {
      setPausedTime(Date.now())
    }

    setStart(!start);
  }

  function handleReset(event: MouseEvent) {
    setTime(0);
    setPausedTime(Date.now()); // If we don't reset paused time, when we reset, the paused time start will be stuck in the past and it will cause a negative initial counter. 
    setStartTime(Date.now()); // Need to reset start time so when we minus it off Date.now() in the setInterval() setTime() we get Date.now() - Date.now() which equals 0 and we have reset the counter.
  }


  function render_start_stop() {
    if (start) {
      return <button onClick={handleStartStop}>Stop</button>
    } else {
      return <button onClick={handleStartStop}>Start</button>
    }
  }
  
  function render_minutes() {
    if (Math.floor(time / 6000) < 10) {
      return `0${Math.floor(time / 6000)}`
    } else {
      return `${Math.floor(time / 6000)}`
    }
  }

  return (
    <div className='stopwatch'>
      <div className='time-format'>
        {render_minutes()}
        :
        {`0${(Math.floor(time / 100)) % 60}`.slice(-2)}
        .
        {`0${time}`.slice(-2)}
      </div>

      {render_start_stop()}
      <button onClick={handleReset}>Restart</button>
    </div>
  )
}







//{`${Math.floor((time / 100) / 60)}:${Math.floor(time / 100) % 60}`}



// Using setInterval and setTimeout is bad because they lag arbitrarily
// https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript 
// Note that setInterval can work to a certain degree so long as you omit the time state from the useState dependncy array by using the previous state functionality of setState: setState((prev) => prev + 1)

// useEffect(() => {
//   let interval: any = null;
//   if (start === true) {
//     interval = setInterval(() => {
//       setTime((time) => time + 1);
//     }, 10);
//   } else {
//     clearInterval(interval);
//   }
//   return () => {
//     clearInterval(interval);
//   };
// }, [start, time]);

// useEffect(() => {
//   if (start) {
//     setTimeout(() => {
//       setTime(time + 1)
//     }, 1000)
//   }
// }, [start, time])




// Using Date

// Using setTimeout() does not work because it only fires once and if it happens to fire at a time where the calculation of setTime() has not changed because its the same millisecond, then there will not be a rerender, meaning there will not be the next fire of the useState
// Hence, use setInterval because it fires no matter what until it is cleared

// useEffect(() => {
//   if (start) {
//     setTimeout(() => {
//       setTime(Math.floor((Date.now() - startTime)/1000))
//     }, 1000) // It needs to be 1000 milliseconds even if it causes skips in numbers once in a while because if the recalculation occurs precisely when there has been no change in setTime() because it has occured in the same milisecond, the setTime() will no cause a rerender.
//   }
// }, [start, time, startTime])
