import {useState,useRef} from 'react';
export default function Player() {
  const inputtedName=useRef();
  const [enteredName,setEnteredName]=useState("Unknown Entity");
  // const [submitted,setSubmitted]=useState("");

  const handleClick=()=>{
    setEnteredName(inputtedName.current.value);
    inputtedName.current.value='';
  }
  return (
    <section id="player">
      {/* <h2>Welcome {submitted?enteredName:'unknown entity'}</h2> */}

      <h2>Welcome {enteredName}</h2>      
      <p>
        {/* <input type="text" value={enteredName} onChange={(event)=>setEnteredName(event.target.value)}/> */}
        {/* <button onClick={()=>setSubmitted(true)}>Set Name</button> */}
        <input type="text" ref={inputtedName}/>
        <button onClick={handleClick}>Set Name</button>
        
      </p>
    </section>
  );
}
