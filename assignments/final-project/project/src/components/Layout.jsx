import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function Layout() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/addcontact" element={<AddContact />}></Route>
                <Route path="/contactlist" element={<ContactList />}></Route>
                <Route path="/contactdetails" element={<ContactDetails />}></Route>
            </Routes>
        </Router>
    )
}

export default Layout;