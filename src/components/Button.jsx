import React, { useEffect } from "react";
import useMyHook from "../customHooks/useMyHook";

function CalculateBtn ({Click}) {
    
    return (
        <button 
            onClick={Click}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white text-lg font-semibold rounded-xl shadow-md transition duration-300">
            Calculate
        </button>
    )
}
export default CalculateBtn;