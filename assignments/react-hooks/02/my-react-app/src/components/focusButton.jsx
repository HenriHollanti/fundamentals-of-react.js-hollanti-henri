import { useRef } from 'react'

const FocusButton = () => {
    const inputRef = useRef();

    return (
        <>
            <input ref={inputRef}></input>
            <div>
                <button onClick={() => {
                    inputRef.current.focus();
                }}>Click to focus</button>
            </div>
        </>
    );
}

export default FocusButton;