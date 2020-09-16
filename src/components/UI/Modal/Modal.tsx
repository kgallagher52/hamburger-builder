import React, { Component } from 'react'
import './Modal.css'


// WIP get actual type
class Modal extends Component<any, any> {

    shouldComponentUpdate(nextProps: any, nextState: any) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentWillUpdate() {
        console.log(`[Modal] WillUpdate`);
    }

    render() {
        return (
            <>
                <div className="Modal">
                    {this.props.children}
                </div>
                <div onClick={this.props.handleCheckout} className="backdrop" />
            </>
        )
    }
}

export default Modal