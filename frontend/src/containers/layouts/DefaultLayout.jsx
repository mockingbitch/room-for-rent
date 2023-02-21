import React from 'react'

const DefaultLayout = ({children}) => {
    return (
        <>
            <div className="container mt-3">
                {children}
            </div>
        </>
    )
}

export default DefaultLayout