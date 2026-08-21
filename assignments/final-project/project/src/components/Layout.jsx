import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../pages/Home";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function Layout() {
    return (
        <div className='router'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/addcontact" element={<AddContact />}></Route>
                    <Route path="/contactlist" element={<ContactList />}></Route>
                    <Route path="/contactdetails" element={<ContactDetails />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Layout;