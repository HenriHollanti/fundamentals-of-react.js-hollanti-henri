import { useState, useEffect } from 'react';

function ContactDetails(props) {
    const [contact, setContact] = useState({});

    function findContact(inputId) {
        for (let index in props.contacts)
            for (let [k, v] of Object.entries(props.contacts[index])) {
                if (k === "id" && v === inputId) {
                    return props.contacts[index];
                }
        }
        
    }

    useEffect(() => {
        findContact(props.contactId);
        setContact(currentContact);
    }, [props.contactId]); 

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