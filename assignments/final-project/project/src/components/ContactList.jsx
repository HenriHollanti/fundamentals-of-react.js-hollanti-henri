import styles from '../styles/ContactList.module.css';
import { NavLink } from "react-router-dom";

function ContactList(props) {

    return (
        <div className={styles.contact_list}>
            <ul>
                {props.contacts.map((contact) => {
                    return <li key={contact.id}><NavLink to={"/contactdetails/" + contact.id} onClick={() => props.contactHandler(contact.id)}>{contact.fname} {contact.phone}</NavLink></li>
                })}
            </ul>
        </div>
    )
}

export default ContactList;