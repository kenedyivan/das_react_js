import React from "react";
import Navbar from "react-bootstrap/Navbar";
import District from "./District";

function CusNavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Districts And Sub-Counties In Uganda</Navbar.Brand>
        </Navbar>
    )
}

export default CusNavBar;
