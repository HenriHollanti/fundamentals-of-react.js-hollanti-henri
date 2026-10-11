import styles from '../styles/ContactList.module.css';
import { useState } from 'react'
import { Link } from "react-router-dom";
import ListCell from './ListCell';
import ListRow from './ListRow';
import Modal from './Modal';

function ContactList(props) {

    const [isVisible, setVisible] = useState(false);
    const [currentContact, setCurrentContact] = useState({});

    function handleCurrent(inputContact) {
        setCurrentContact(inputContact);
    }

    function handleClose() {
        setVisible(!isVisible);
    }

    return (
        <div className={styles.contact_list}>
            <div className={styles.container}>
                {!isVisible ? null : <Modal contact={currentContact} visible={isVisible} handleClose={handleClose}
                 contacts={props.contacts} contactsSetter={props.contactsSetter} editContact={props.editContact}></Modal>}
                {!isVisible && 
                    <ul>
                        {props.contacts.map((contact) => {
                            return (
                                <li key={contact.id}>
                                        <ListRow className={styles.row}>
                                            <Link to={"/contactdetails/" + contact.id} onClick={() => props.contactHandler(contact.id)}>
                                                <ListCell className={styles.cell} item={contact.fname}/>
                                            </Link>
                                            <ListCell className={styles.cell} item={contact.phone}/>
                                            <button onClick={() => {
                                                handleCurrent(contact)
                                                setVisible(!isVisible);
                                                }}>edit</button>
                                            <button onClick={() => props.deleteContact(contact.id)}>delete</button>
                                        </ListRow>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        </div>
    )
}

export default ContactList;