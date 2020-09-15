import React from 'react'
import './Layout.css'

const Layout = (props: any) => (
    <>
        <div>
            toolbar, SideDrawer, Backdrop
        </div>
        <main className="content">
            {props.children}
        </main>
    </>
)

export default Layout
