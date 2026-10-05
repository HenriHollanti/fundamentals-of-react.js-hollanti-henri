import ControlledForm from "./ControlledForm";
import modalStyles from '../styles/ContactList.module.css'
import errorStyles from '../styles/AddContact.module.css'
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
        <div className={props.visible? modalStyles.modal : modalStyles.alt_modal}>
            <Error message={msg} className={isVisible? errorStyles.error : errorStyles.success}/>
            <div>
                <button className={modalStyles.button} onClick={() => props.handleClose()}>X</button>
                <p>Current contact: {props.contact.fname} {props.contact.phone}</p>
                <ControlledForm buttonText='Edit contact'contacts={props.contacts} contactsSetter={props.contactsSetter} errorHandler={handleError}/>
            </div>
        </div>
    )
}

export default Modal;