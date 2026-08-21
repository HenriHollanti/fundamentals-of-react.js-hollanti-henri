import { useState } from 'react';

function ContactDetails() {
    const [contact, setContact] = useState({});

    return (
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