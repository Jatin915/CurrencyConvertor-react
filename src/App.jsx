import { useState, useCallback } from 'react'
import InputBox from './components/InputBox'


function App() {

  const [fromSelection, setFromSelection] = useState("USD");
  const [toSelection, setToSelection] = useState("INR");
  const [amount, setAmount] = useState(1);

  

  return (
    <>
      <div className='h-[25rem] w-[40rem] p-5 fixed top-[50%] left-[50%] bg-gray-600 -translate-x-[50%] -translate-y-[50%] rounded-xl flex flex-col justify-between'>

        <InputBox label="From" selection={fromSelection} setSelection={setFromSelection} amount={amount} setAmount={setAmount}/>

        <InputBox label="To" selection={toSelection} setSelection={setToSelection} />
      </div>
    </>
  )
}

export default App
