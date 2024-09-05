import React from 'react';

import './ContactUs.css';

export const ContactUs:React.FC = () => {
    return(
        <div className="contact-us">
            <h3>Contact Us</h3>
            <h4>Address</h4>
            <p>18 Cornelia Street</p>
            <p>Sofia 1000</p>
            <div className="contact-us-divider"></div>
            <h4>Phone Number</h4>
            <p>123-345-6789</p>
            <div className="contact-us-divider"></div>
            <h4>Email</h4>
            <p>nadyaslibrary@lib.com</p>
        </div>
    )
}