import { useState } from 'react';
import styles from '../styles/ControlledForm.module.css'

function handleSubmit(event) {
    event.preventDefault();

}

function ControlledForm() {
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