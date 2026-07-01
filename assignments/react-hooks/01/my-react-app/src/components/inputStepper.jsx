import { useState } from 'react';

const Stepper = () => {
    const [counter, setCount] = useState(0);
    return (
        <>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => {
                    setCount(counter - 1);
                }}>- Decrease</button>
                <button onClick={() => {
                    setCount(counter + 1);
                }}>+ Increase</button>
            </div>
        </>
    );
}

export default Stepper;