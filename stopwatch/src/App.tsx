import React from 'react';
import './App.css';
import Stopwatch from './components/stopwatch/Stopwatch';
import StopwatchDate from './components/stopwatchDate/StopwatchDate';
import StopwatchUseRef from './components/stopwatchUseRef/StopwatchUseRef';

function App() {
  return (
    <div className="App">
      
      Date Object
      <StopwatchDate/>
      <br />
      <br />
      <br />
      setInterval
      <Stopwatch/>
      <br />
      <br />
      <br />
      useRef
      <StopwatchUseRef/>
    </div>
  );
}

export default App;
