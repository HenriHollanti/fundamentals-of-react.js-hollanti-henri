import { useState, useRef } from 'react';

function MyForm() {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");

    function handleClick() {
        const currentValue = inputRef.current.value;

        if (!currentValue) {
            setInputValue("Nothing to display.");
        } else {
            setInputValue(currentValue);
        }
    }

    return (
        <div>
                <h1>Uncontrolled form</h1>
                <input ref={inputRef}></input>
                <button onClick={handleClick}>Show value</button>
                <h2>Value:</h2>
                <p style={{display: 'inline'}}>{inputValue}</p>
        </div>
    );
}

export default MyForm;