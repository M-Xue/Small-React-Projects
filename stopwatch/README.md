# Stopwatch React App   
This stopwatch app has three different implementations of a stopwatch.
- setInterval
- Date Object
- useRef
   

## Date Object   
This implementation uses the Date object instead of just relying on setInterval or setTimeout to increment the timer counter. 

This is because using setInterval and setTimeout [lag arbitrarily](https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript).

setInterval is still used in tandem with the useState responsible for tracking the current time.   
If we use setTimeout and the current run of the useEffect was in the same millisecond and the previous useEffect, the setTime() function will not run because there is no change in state if the arguments are the same (which occurs since the difference in time is the same since we are doing the calculation in the same millisecond). Hence, we use setInterval. This means that even if the update calculation was made in the same millisecond, after the given interval delay, difference in time will be recalculated anyway and will at some point occur in a different millisecond, allong the rerenders to continue.   

Note: This implementation also uses mouse click handle functions for starting/stopping and resetting the stopwatch because the logic for these operations are more complex than starting/stopping and resetting for the implementations below so it has a good example of deating with mouse events with TypeScript

## setInterval   
This is a common implementation of a stopwatch in React. It uses setInterval to incremet the time.
Note: 
- The time state must be left out of the useEffect dependncy array or it will cause to many rerenders and calculations, slowing down the stopwatch.
- This implementation does not work if you change tabs because the screen stops rendering, resulting in the stopwatch pausing.
- This implmentation still lags, with a noticable ~1 second lag after 3 minutes  

## useRef   
This implementation just uses useRef to hold the ID returned by setInterval instead of declaring it in the useEffect().   

This implementation was heavily inspired from this [guide](https://learnreact.design/posts/react-useref-by-example#example-2-stopwatch-clear-interval).   
More accurate version use Date object can be found [here](https://codesandbox.io/s/useref-cancelable-interval-uljky?file=/src/App.js).   

