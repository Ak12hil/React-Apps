import React, {forwardRef,useImperativeHandle,useRef} from 'react';
import {createPortal} from 'react-dom';

const ResultModal=forwardRef(function ResultModal({reset,targetTime,timeRemaining,score},ref) {

    const userLost=timeRemaining<=0;

    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        //u can name it any function
       return {
        openDialog(){
            dialog.current.showModal();
        }
       }
    })
    return createPortal(
    //   <dialog ref={ref} className='result-modal'>
      < dialog ref={dialog} className='result-modal' onClose={reset}>
        {userLost && <h2> You Lost !!</h2>}
        {!userLost && <h2>Your Score is : {score}</h2>}
        <p>The Target Time was <strong>{targetTime} seconds </strong></p>
        <p>You stopped the timer with <strong>{(timeRemaining/1000).toFixed(2)} seconds</strong> remaining.</p>
        
        <form method="dialog" onSubmit={reset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    )
  }
)

export default ResultModal;