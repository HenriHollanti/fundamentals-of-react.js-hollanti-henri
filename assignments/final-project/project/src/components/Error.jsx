function Error(props) {
    return (
        <div className={props.className}>
            <p>{props.message}</p>
        </div>
    )
}

export default Error;