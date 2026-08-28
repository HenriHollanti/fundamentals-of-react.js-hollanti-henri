import ControlledForm from "./ControlledForm";
import styles from '../styles/AddContact.module.css'
import Error from "./Error";
import { useState } from 'react';

function Modal(props) {
    const [msg, setMsg] = useState("Error");
    const [isVisible, setVisible] = useState(false);

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
        <div className={props.visible? styles.modal : styles.alt_modal}>
            <Error message={msg} className={isVisible? styles.error : styles.success}/>
            <ControlledForm buttonText='Edit contact'contacts={props.contacts} contactsSetter={props.contactsSetter} errorHandler={handleError}/>
        </div>
    )
}

export default Modal;