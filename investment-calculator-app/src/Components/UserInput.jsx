import React from 'react'

export default function UserInput({annualData,setAnnualData}) {

    //+ converts string to number 

    const handleInitialInvestment=(event)=>{
        setAnnualData(prevAnnualData=>{
            return {...prevAnnualData,initialInvestment:+event.target.value}
        })
    };
    const handleAnnualInvestment=(event)=>{
        setAnnualData(prevAnnualData=>{
            return {...prevAnnualData,annualInvestment:+event.target.value}
        })
    };
    const handleExpectedReturn=(event)=>{
        setAnnualData(prevAnnualData=>{
            return {...prevAnnualData,expectedReturn:+event.target.value}
        })
    };
    const handleDuration=(event)=>{
        setAnnualData(prevAnnualData=>{
            return {...prevAnnualData,duration:+event.target.value}
        })
    }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={annualData.initialInvestment} onChange={(event)=>handleInitialInvestment(event)} required></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" value={annualData.annualInvestment} onChange={(event)=>handleAnnualInvestment(event)} required></input>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" value={annualData.expectedReturn} onChange={(event)=>handleExpectedReturn(event)} required></input>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" value={annualData.duration}  onChange={(event)=>handleDuration(event)} required></input>
        </p>
      </div>
    </section>
  );
}
