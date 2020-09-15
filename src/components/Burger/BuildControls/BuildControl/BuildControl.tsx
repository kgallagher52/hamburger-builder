import React from 'react'
import './BuildControl.css'

type Props = {
    Label: string
    added: any
    remove: any
}
const BuildControl = ({ Label, added, remove }: Props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{Label}</div>
            <button className="Less" onClick={remove}>Less</button>
            <button className="More" onClick={added}>More</button>
        </div>
    )
}
export default BuildControl