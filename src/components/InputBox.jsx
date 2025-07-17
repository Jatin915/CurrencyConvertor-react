import React, { useCallback, useEffect } from 'react'
import { useState } from 'react';
import { countryList } from './codes';


function InputBox ({label, selection, setSelection, amount, setAmount, displayAmount}) {
    

    useEffect(() => {

        // console.log(selection);
        // console.log(selection);
        // console.log(amount);
    }, [selection, amount])


    return (
        <>
            <div className='h-26 w-[100%] bg-gray-300 rounded-lg p-3'>
                <div className='flex justify-between'>
                    <h1 className='text-gray-600'>{label} </h1> 
                    <h1 className='text-gray-600'>Currency Type</h1>
                </div>

                <div className='w-[100%] flex justify-between mt-4'>
                    
                    <input
                    type="text" 
                    className = {label === "To" ? '' : 'border-b-2 border-gray-400'}
                    placeholder={label === "To" ? "" : "Amount"} 
                    
                    value={amount}

                    disabled={label === "To"}
                    onChange={(e) => setAmount(e.target.value)} />
                    <select
                        name=""
                        id="" 
                        value={selection}
                        
                        className='bg-zinc-400 px-3 py-2 rounded-md'
                        onChange={(e) => setSelection(e.target.value)} >
                                
                        {Object.entries(countryList).map(([currCode]) => (
                            <option value={currCode} key={currCode}>{currCode}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}

export default InputBox;