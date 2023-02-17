import React from 'react'
import { NavDropdown } from 'react-bootstrap';

const LogoutBtn = (props) => {

    return (
        <>
            <NavDropdown.Item href="/login">
                Log out
            </NavDropdown.Item>
        </>
    )
}

export default LogoutBtn;