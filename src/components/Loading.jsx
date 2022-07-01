import React from 'react'

const LoaderPage = () => {
    return (
        <>
            <div className="loading-background d-flex justify-content-center align-items-center">
                <div className="loading">
                    <div className="banner flexy my-lg-5 my-4 pb-1">
                        Loading...
                    </div>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoaderPage
