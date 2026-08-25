import { useState } from 'react';
import styles from '../styles/ControlledForm.module.css'
import { v7 as uuidv7 } from 'uuid';




function ControlledForm(props) {

    function handleSubmit(event) {
        event.preventDefault();
        if (fname.length === 0) {
            props.errorHandler('Error: The field "First Name" cannot be empty.');
        } else if (lname.length === 0) {
            props.errorHandler('Error: The field "Last Name" cannot be empty.');
        } else if (pnumber.length === 0) {
            props.errorHandler('Error: The field "Phone Number" cannot be empty.');
        } else if (email.length === 0) {
            props.errorHandler('Error: The field "Email" cannot be empty.');
        } else if (address.length === 0) {
            props.errorHandler('Error: The field "Address" cannot be empty.');
        } else {
            props.errorHandler("Success");
            const newContact = {
                id: uuidv7(),
                fname: fname,
                lname: lname,
                phone: pnumber,
                email: email,
                address: address
            }
            props.contactsSetter([...props.contacts, newContact]);
        }
    }

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
                <label>First name:</label>
                <input id='fname' onChange={(e) => setFname(e.target.value)}></input>
            </div>
            <div className={styles.row}>
                <label>Last name:</label>
                <input id='lname' onChange={(e) => setLname(e.target.value)}></input>
            </div>
            <div className={styles.row}>
                <label>Phone number:</label>
                <input id='pnumber' onChange={(e) => setPnumber(e.target.value)}></input>
            </div>
            <div className={styles.row}>
                <label>Email:</label>
                <input id='email' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className={styles.row}>
                <label>Address:</label>
                <input id='address' onChange={(e) => setAddress(e.target.value)}></input>
            </div>
            <button type='submit'>Add Contact</button>
        </form>
    )
}

export default ControlledForm;