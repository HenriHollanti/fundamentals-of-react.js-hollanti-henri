import ControlledForm from "./ControlledForm";
import styles from '../styles/AddContact.module.css'
import Error from "./Error";
import { useState } from 'react';

function AddContact(props) {
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
        <div className={styles.contact}>
            <Error message={msg} className={isVisible? styles.error : styles.success}/>
            <ControlledForm contacts={props.contacts} contactsSetter={props.contactsSetter} errorMsgSetter={setMsg}/>
            <button onClick={() => {
                setVisible(!isVisible);
                handleMsg();
                console.log(isVisible);
                }}>Test Error</button>
        </div>
    )
}

export default AddContact;