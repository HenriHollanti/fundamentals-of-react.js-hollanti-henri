import ControlledForm from "./ControlledForm";
import styles from '../styles/AddContact.module.css'
import Error from "./Error";
import { useState } from 'react';

function AddContact(props) {
    const [isVisible, setVisible] = useState(false);
    const [msg, setMsg] = useState("Error");

    function handleError(inputMsg) {
        if (inputMsg != 'Success') {
            if (!isVisible) {
                setVisible(!isVisible);
            }            
        } else {
            if (isVisible) {
                setVisible(!isVisible);
            }
        }
        setMsg(inputMsg);
    }

    return (
        <div className={styles.contact}>
            <Error message={msg} className={isVisible? styles.error : styles.success}/>
            <ControlledForm contacts={props.contacts} contactsSetter={props.contactsSetter} errorHandler={handleError}/>
        </div>
    )
}

export default AddContact;