import React, {useState} from "react"

export const CounterWithVariable: React.FC = () => {
    let count: number = 0;

    function increment() {
        count++
        console.log(`Perhitungan : ${count}`);
        return count;
        
    }
    
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Click Here</button>
        </>
    )
}

export  const CounterWithState: React.FC = () => {
    const [Counter, setCounter] = useState<number>(0)

    function increment() {
        setCounter(Counter + 1)
    }

    return (
        <>
            <h1>{Counter}</h1>
            <button onClick={increment}>Click Here</button>
        </>
    )
}