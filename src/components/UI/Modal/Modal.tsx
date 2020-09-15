import React from 'react'
import './Modal.css'


// WIP get actual type
const Modal = (props: any) => {
    return (
        <>
            <div className="Modal">
                {props.children}
            </div>
            <div onClick={props.handleCheckout} className="backdrop" />
        </>
    )
}

export default Modal