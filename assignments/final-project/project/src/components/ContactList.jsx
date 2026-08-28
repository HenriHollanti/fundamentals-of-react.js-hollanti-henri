import styles from '../styles/ContactList.module.css';
import { useState } from 'react'
import { Link } from "react-router-dom";
import ListCell from './ListCell';
import ListRow from './ListRow';
import Modal from './Modal';

function ContactList(props) {

    const [isVisible, setVisible] = useState(true);

    return (
        <div className={styles.contact_list}>
            <div className={styles.container}>
                <Modal visible={isVisible}></Modal>
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
                                            props.editContact(contact.id);
                                            setVisible(!isVisible);
                                            }}>edit</button>
                                        <button onClick={() => props.deleteContact(contact.id)}>delete</button>
                                    </ListRow>
                                
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ContactList;