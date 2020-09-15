import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props: any) => (
    <div className="Logo" style={{ height: "40px" }}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;