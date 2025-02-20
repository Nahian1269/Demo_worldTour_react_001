import { useState } from "react"

export default function Counter() {
    // left side have 2 peramter and right side have 1 perameter
    const [count, setCount] = useState(0);
    // const abc = useState(50);
    // console.log(abc);

    const handleEvent= () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    
    return (
        <div>
            <h3>Counter : {count}</h3>
            {/* way-01  */}
            <button onClick={() => setCount(count +1)}>Press </button>
            {/* way-02 */}
            <button onClick={handleEvent}>Press</button>
        </div>

    )
} 