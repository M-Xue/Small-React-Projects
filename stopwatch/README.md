# Stopwatch React App

This stopwatch app uses the Date object instead of just relying on setInterval or setTimeout to increment the timer counter. 

This is because using setInterval and setTimeout lag arbitrarily.   
[Source](https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript)

setInterval is still used in tandem with the useState responsible for tracking the current time.   
If we use setTimeout and the current run of the useEffect was in the same millisecond and the previous useEffect, the setTime() function will not run because there is no change in state if the arguments are the same (which occurs since the difference in time is the same since we are doing the calculation in the same millisecond). Hence, we use setInterval. This means that even if the update calculation was made in the same millisecond, after the given interval delay, difference in time will be recalculated anyway and will at some point occur in a different millisecond, allong the rerenders to continue.   