import React from 'react';
import './Header.css';
import logo from '../../images/Layer 2.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" /> <span> Hootstory</span>

        </div>
    );
};

export default Header;