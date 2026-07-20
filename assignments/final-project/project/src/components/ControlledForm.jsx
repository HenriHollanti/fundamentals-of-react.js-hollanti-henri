import { useState } from 'react';

function handleSubmit(event) {
    event.preventDefault();

}

function ControlledForm() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <input id='fname' onChange={(e) => setFname(e.target.value)}></input>
        <label>Last name:</label>
        <input id='lname' onChange={(e) => setLname(e.target.value)}></input>
        <label>Phone number:</label>
        <input id='pnumber' onChange={(e) => setPnumber(e.target.value)}></input>
        <label>Email:</label>
        <input id='email' onChange={(e) => setEmail(e.target.value)}></input>
        <label>Address:</label>
        <input id='address' onChange={(e) => setAddress(e.target.value)}></input>
        <input type='submit'>Add</input>
    </form>
}

export default ControlledForm;