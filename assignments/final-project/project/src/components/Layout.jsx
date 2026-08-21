import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./Navbar";
import Home from "../pages/Home";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import initialContacts from '../data/initialContacts';

function Layout() {
    const [contacts, setContacts] = useState(initialContacts);
    return (
        <div className='router'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/addcontact" element={<AddContact contacts={contacts} contactsSetter={setContacts}/>}></Route>
                    <Route path="/contactlist" element={<ContactList contacts={contacts}/>}></Route>
                    <Route path="/contactdetails" element={<ContactDetails />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Layout;