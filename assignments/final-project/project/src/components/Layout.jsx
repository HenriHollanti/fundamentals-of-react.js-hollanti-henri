import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./Navbar";
import Home from "../pages/Home";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import initialContacts from '../data/initialContacts';
import NotFound from '../pages/NotFound';

function Layout() {

    function findContact(inputId) {
            for (let index in contacts) {
                for (let [k, v] of Object.entries(contacts[index])) {
                    if (k === "id" && v === inputId) {
                        return contacts[index];
                    }
                }
            }
    }

    function handleContact(inputId) {
            const contact = findContact(inputId);
            if (contact) {
                console.log("contact is truthy in handleContact()");
                setCurrentContact(contact);
            }
    }

    function deleteContact(inputId) {
            const newContacts = [];
            contacts.forEach((element) => {
                if (element.id != inputId) {
                    newContacts.push(element);
                }
            });
            setContacts(newContacts);
    }

    function editContact(inputId, newContact) {
            const newContacts = [];
            contacts.forEach((element) => {
                if (element.id != inputId) {
                    newContacts.push(element);
                }
            });
            if (newContact) {
                console.log("newContact is truthy");
                newContact.push(newContact);
            }
            console.log("before setContacts() in editContact");
            setContacts(newContacts);
    }

    const [contacts, setContacts] = useState(initialContacts);
    const [currentContact, setCurrentContact] = useState(null);
    return (
        <div className='router'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/addcontact" element={<AddContact contacts={contacts} contactsSetter={setContacts}/>}></Route>
                    <Route path="/contactlist" element={
                            <ContactList
                                contacts={contacts} deleteContact={deleteContact} contactHandler={handleContact}
                                editContact={editContact} contactsSetter={setContacts}
                            />
                        }>
                    </Route>
                    <Route path="/contactdetails/:id" element={<ContactDetails contact={currentContact} />}></Route>
                    <Route path="/*" element={<NotFound/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Layout;