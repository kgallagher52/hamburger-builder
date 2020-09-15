import React, { useState } from 'react'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import './Layout.css'

const Layout = (props: any) => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <>
            <Toolbar drawerToggleClicked={setShowSideBar} />
            <SideDrawer open={showSideBar} handleOpen={setShowSideBar} />
            <main className="content">
                {props.children}
            </main>
        </>
    )
}


export default Layout
