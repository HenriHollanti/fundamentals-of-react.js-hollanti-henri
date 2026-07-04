function Toggle(props) {
    return <button onClick={() => {
        props.toggle(true);
    }}>Sign in</button>
}

export default Toggle;