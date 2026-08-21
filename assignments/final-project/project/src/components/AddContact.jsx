import ControlledForm from "./ControlledForm";
import styles from '../styles/AddContact.module.css'
import Error from "./Error";
import { useState } from 'react';

function AddContact() {
    const [isVisible, setVisible] = useState(false);
    const [msg, setMsg] = useState("Error");
    const altMsg = "Success";

    function handleMsg() {
        if (msg === 'Error') {
            setMsg(altMsg);
        } else {
            setMsg('Error');
        }
    }

    return (
        <div className={styles.contact} style={{backgroundColor: '#ffffff'}}>
            <Error message={msg} className={isVisible ? styles.contact : styles.alt_contact}/>
            <ControlledForm/>
            <button onClick={() => {
                setVisible(!isVisible);
                handleMsg();
                console.log(isVisible);
                }}>Test Error</button>
        </div>
    )
}

export default AddContact;