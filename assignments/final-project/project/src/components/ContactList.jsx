import styles from '../styles/ContactList.module.css';
import { NavLink } from "react-router-dom";

function ContactList(props) {
    const date = new Date();
    console.log("initial contacts: ", props.contacts);
    return (
        <div className={styles.contact_list}>
            <ul>
                {props.contacts.map((contact) => {
                    return <li ><NavLink key={contact.id} to="/contactdetails" >{contact.fname} {contact.phone}</NavLink></li>
                })}
            </ul>
        </div>
    )
}

export default ContactList;