import { useState } from 'react';
import InputBox from './components/InputBox';
import useMyHook from './customHooks/useMyHook';
import CalculateBtn from './components/Button';

function App() {
  const [fromSelection, setFromSelection] = useState("USD");
  const [toSelection, setToSelection] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);

  let memory = useMyHook(
    isSwapped ? toSelection : fromSelection,
    isSwapped ? fromSelection : toSelection,
    amount
  );

  async function Convert() {
    const data = await memory();
    console.log(data);
    setResult(data);
  }

  function swap() {
    setIsSwapped(!isSwapped);
  }

  return (
    <div className='h-[25rem] w-[40rem] p-5 fixed top-[50%] left-[50%] bg-gray-600 -translate-x-[50%] -translate-y-[50%] rounded-xl flex flex-col justify-between'>

      {/* InputBox 1 */}
      <InputBox
        label="From"
        selection={isSwapped ? toSelection : fromSelection}
        setSelection={isSwapped ? setToSelection : setFromSelection}
        amount={amount}
        setAmount={setAmount}
      />

      {/* Swap Button */}
      <button 
        onClick={swap}
        className="px-6 py-3 ml-[50%] -translate-x-[50%] max-w-fit bg-sky-600 hover:bg-sky-700 hover:cursor-pointer text-white text-lg font-semibold rounded-xl shadow-md transition duration-300">
        Swap
      </button>

      {/* InputBox 2 */}
      <InputBox
        label="To"
        selection={isSwapped ? fromSelection : toSelection}
        setSelection={isSwapped ? setFromSelection : setToSelection}
        amount={result}
      />

      {/* Calculate Button */}
      <CalculateBtn Click={Convert} />
    </div>
  );
}

export default App;