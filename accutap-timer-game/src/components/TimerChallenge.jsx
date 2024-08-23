import React, { useState,useRef } from 'react'
import ResultModal from './ResultModal';

export default function TimerChallenge({title,targetTime}) {

    // const [timerStarted,setTimerStarted]=useState(false);
    // const [timerExpired,setTimerExpired]=useState(false);
    const timer=useRef();
    const dialog=useRef();

    const [timeRemaining,setTimeRemaining]=useState(targetTime*1000);
    const isTimerActive=timeRemaining>0 && timeRemaining<targetTime*1000;
    const score=Math.round(( 1 - timeRemaining/(targetTime*1000) )*100);

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.openDialog();
    }

    const handleStart=()=>{
        // setTimerStarted(true);
        // timer.current=setTimeout(()=>{
        //     //this gets executed after the time set
        //     setTimerExpired(true);
        //     // dialog.current.showModal();
        //     //to detach direct connection with dialog element in ResultModal, we use useImperativeHandle and create connection to new return {}
        //     dialog.current.openDialog();
        //     setTimerStarted(false);
        // },targetTime*1000);

        timer.current=setInterval(()=>{
           setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10);
        },10)
    }
 
    const handleStop=()=>{
        clearInterval(timer.current);
        dialog.current.openDialog();
       
    }

    const handleReset=()=>{
        setTimeRemaining(targetTime*1000);
    }

  return (
    <>
      {<ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} reset={handleReset} score={score}/>}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} challenge
          </button>
        </p>

        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running....." : "Timer is Inactive"}
        </p>
      </section>
    </>
  );
}
