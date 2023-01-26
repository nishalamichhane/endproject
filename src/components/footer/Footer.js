import React from 'react';
import "./Footer.css";
const Footer = ({office,made_in_year}) => {
    return (
        <div>

        <footer className="footer">
            <p>In opdracht van {office} © {made_in_year} </p>
        </footer>
        </div>

    );
};

export default Footer;