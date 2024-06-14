import { createContext } from "react";
import { useState, useEffect } from "react";
import JSONServices from '../Services/JSONServices.js';

export const DataContext = createContext();

export function DataContextProvider(props) {

    const [data, setData] = useState(false);
    const [updServ, setUpdServ] = useState(false);
    
    useEffect(() => {
        getDataServ();


    }, [updServ])


    async function getDataServ() {
        const data = await JSONServices.getData();
        setData(data);

    }


    const stateContext = { data, setData, updServ, setUpdServ }

    if (!data) {
        return <h1>Loading...</h1>
    }

    return (
        <DataContext.Provider value={stateContext}>{props.children}</DataContext.Provider>
    )
}