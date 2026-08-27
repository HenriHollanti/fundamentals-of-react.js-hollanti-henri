import NotFound from '../pages/NotFound';

function ContactDetails(props) {
    const contact = props.contact;

    return (contact == null) ? (<div><NotFound/></div>) : (
        <div>
            <ul>
                <li><h2>ID: </h2>{contact.id}</li>
                <li><h2>First name: </h2>{contact.fname}</li>
                <li><h2>Last name: </h2>{contact.lname}</li>
                <li><h2>Phone number: </h2>{contact.phone}</li>
                <li><h2>Email address: </h2>{contact.email}</li>
                <li><h2>Address: </h2>{contact.address}</li>
            </ul>
        </div>
    )
}

export default ContactDetails;