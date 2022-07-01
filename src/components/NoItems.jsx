import React from 'react'
import './style.css'

const NoItems = (props) => {
    return (
        <>
            <div className="noItem flexy">
                {props.text}
            </div>
        </>
    )
}

export default NoItems
