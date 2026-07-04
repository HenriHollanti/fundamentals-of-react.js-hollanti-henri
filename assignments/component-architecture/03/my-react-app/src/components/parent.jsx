import { useState } from 'react';
import Display from './display';
import IncrementButton from './increment-button';

function Parent() {
    const [number, setNumber] = useState(0);

    function handleIncrement() {
        setNumber(number + 1);
    }
    return (
        <div>
            <Display number={number}/>
            <IncrementButton increment={handleIncrement}/>
        </div>
    )
}

export default Parent;