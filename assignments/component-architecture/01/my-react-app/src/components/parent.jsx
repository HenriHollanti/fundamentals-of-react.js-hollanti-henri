import Child from "./child"

function Parent(props) {
    return (
        <Child name={props.name}></Child>
    );
}

export default Parent;