function IncrementButton(props) {
    return <button onClick={() => {
        props.increment();
    }}>Click to increment</button>
}

export default IncrementButton;