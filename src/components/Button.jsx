import React, { useEffect } from "react";
import useMyHook from "../customHooks/useMyHook";

function CalculateBtn ({fromSelection, toSelection, amount, Result, setResult}) {
    
    let memory = useMyHook(fromSelection, toSelection, amount);
    
    async function Convert(){
        memory = await memory();
        console.log(memory);
        setResult(memory);
    }
    
    return (
        <button 
            onClick={Convert}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white text-lg font-semibold rounded-xl shadow-md transition duration-300">
            Calculate
        </button>
    )
}
export default CalculateBtn;