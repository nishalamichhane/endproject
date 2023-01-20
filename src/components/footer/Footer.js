import React from 'react';
import "./Footer.css";
const Footer = ({office,made_in_year}) => {
    return (

        <footer className="footer">
            <p>In opdracht van {office} © {made_in_year} </p>
        </footer>

    );
};

export default Footer;