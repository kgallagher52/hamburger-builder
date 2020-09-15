import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './SideDrawer.css'
const sideDrawer = (props: any) => {
    return (
        <div className={`SideDrawer ${props.open ? "Open" : "Close"}`}>
            <span onClick={() => props.handleOpen()} style={{ position: "absolute", right: "18px", top: "10px", fontWeight: "bold", cursor: "pointer" }}>X</span>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;