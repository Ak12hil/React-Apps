import Header from "./Components/Header"
import Result from "./Components/Result";
import UserInput from "./Components/UserInput"
import React, {useState} from 'react'

function App() {
  const initialAnnualData={
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
  }
  const [annualData, setAnnualData]=useState(initialAnnualData);

  const isValidInput=(annualData.duration>=1)
  
  return (
    <>
     <Header/>
     <UserInput annualData={annualData} setAnnualData={setAnnualData}/>
     {!isValidInput && <p className="center">Please Enter a valid Duration i.e. greater than 1</p>}
     {isValidInput && <Result annualData={annualData}/>}
    </>
   
  )
}

export default App