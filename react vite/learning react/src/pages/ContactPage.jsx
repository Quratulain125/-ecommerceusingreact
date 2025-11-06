import React from 'react';
import Footer from "../components/Footer.jsx";
import Navbar from "../components/navbar.jsx";
import ContactForm from '../components/ContactForm.jsx';
function ContactPage() {
    return (
        <div>
            <Navbar/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}
export default ContactPage;