import React, { memo, useCallback, useEffect} from "react";

function useMyHook(fromSelection, toSelection, amount) {
    const memory = useCallback(async () => {
            const URL = `https://v6.exchangerate-api.com/v6/00b056b45c0b9e23070cd5c8/pair/${fromSelection}/${toSelection}/${amount}`;
            if(amount <= 0 || amount === "") return 0;
            try{
                let res = await fetch(URL);    
                let data = await res.json();
                console.log(data);
                
                return data["conversion_result"];
            }
            catch (e){
                return `$Error: {e}`;
            }
    }, [fromSelection, toSelection, amount])

    return memory;
}

export default useMyHook;