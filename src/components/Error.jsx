import React from 'react'
import { useNavigate } from 'react-router'
import './style.css'

const Error = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="noItem flexy">
                <div className="safe">
                    <p>
                        Wrong Place
                    </p>
                    <p className="flexy">
                        <button onClick={() => { navigate('/') }} className="ui violet button">Return</button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Error
