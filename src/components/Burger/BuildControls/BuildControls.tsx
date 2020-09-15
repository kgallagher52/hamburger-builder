import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

type Props = {
    ingredentAdded: any
    ingredentRemoved: any
    price: number
}
// WIP: NEED THE RIGHT TYPE FOR ingredentAdded, ingredentRemoved

const BuildControls = ({ ingredentAdded, ingredentRemoved, price }: Props) => {
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
        </div>
    )
}

export default BuildControls