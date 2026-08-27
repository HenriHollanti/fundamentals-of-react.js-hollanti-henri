import styles from '../styles/ContactList.module.css';
import { Link } from "react-router-dom";
import ListCell from './ListCell';
import ListRow from './ListRow';

function ContactList(props) {

    return (
        <div className={styles.contact_list}>
            <ul>
                {props.contacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Link to={"/contactdetails/" + contact.id} onClick={() => props.contactHandler(contact.id)}>
                                <ListRow className={styles.row}>
                                    <ListCell className={styles.cell} item={contact.fname}/>
                                    <ListCell className={styles.cell} item={contact.phone}/>
                                    <button>edit</button>
                                    <button>delete</button>
                                 </ListRow>
                            </Link>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default ContactList;