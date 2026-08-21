import styles from '../styles/ContactList.module.css';

function ContactList(props) {
    const date = new Date();
    console.log("initial contacts: ", props.contacts);
    return (
        <div className={styles.contact_list}>
            <ul>
                {props.contacts.map((contact) => {
                    return <li key={contact.id}>{contact.fname} {contact.phone}</li>
                })}
            </ul>
        </div>
    )
}

export default ContactList;