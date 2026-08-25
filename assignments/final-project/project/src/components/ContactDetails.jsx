import NotFound from '../pages/NotFound';

function ContactDetails(props) {
    const contact = props.contact;

    return (contact == null) ? (<div><NotFound/></div>) : (
        <div>
            <ul>
                <li>{contact.id}</li>
                <li>{contact.fname}</li>
                <li>{contact.lname}</li>
                <li>{contact.phone}</li>
                <li>{contact.email}</li>
                <li>{contact.address}</li>
            </ul>
        </div>
    )
}

export default ContactDetails;