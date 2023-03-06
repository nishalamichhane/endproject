import React from 'react';
import "./Footer.css";
const Footer = ({office,made_in_year}) => {
    return (
        <div>
            <footer className="footer">
            <p> {office} © {made_in_year} </p>
            </footer>
        </div>
    );
};
export default Footer;