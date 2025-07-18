import { useState, useCallback } from 'react'
import InputBox from './components/InputBox'
import useMyHook from './customHooks/useMyHook'
import CalculateBtn from './components/Button';

function App() {

  const [fromSelection, setFromSelection] = useState("USD");
  const [toSelection, setToSelection] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");


  let memory = useMyHook(fromSelection, toSelection, amount);
    
    async function Convert(){
        memory = await memory();
        console.log(memory);
        setResult(memory);
    }
  

  return (
    <>
      <div className='h-[25rem] w-[40rem] p-5 fixed top-[50%] left-[50%] bg-gray-600 -translate-x-[50%] -translate-y-[50%] rounded-xl flex flex-col justify-between'>

        <InputBox label="From" selection={fromSelection} setSelection={setFromSelection} amount={amount} setAmount={setAmount}/>

        <InputBox label="To" selection={toSelection} setSelection={setToSelection} amount={result}/>

        <CalculateBtn Click={Convert}/>
      </div>
    </>
  )
}

export default App
