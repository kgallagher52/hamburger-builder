import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

type Props = {
    ingredentAdded: any
    ingredentRemoved: any
    price: number
    puchasable: boolean
    handleCheckout: any

}
// WIP: NEED THE RIGHT TYPE FOR ingredentAdded, ingredentRemoved, handleCheckout

const BuildControls = ({ handleCheckout, puchasable, ingredentAdded, ingredentRemoved, price }: Props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
            {[
                { label: 'Salad', type: 'salad' },
                { label: 'Bacon', type: 'bacon' },
                { label: 'Cheese', type: 'cheese' },
                { label: 'Meat', type: 'meat' },
            ].map((ctrl, i) => (
                <BuildControl remove={() => ingredentRemoved(ctrl.type)} added={() => ingredentAdded(ctrl.type)} key={i} Label={ctrl.label} />
            ))

            }
            <button onClick={handleCheckout} disabled={!puchasable} className="OrderButton">ORDER NOW</button>
        </div>
    )
}

export default BuildControls