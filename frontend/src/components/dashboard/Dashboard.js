import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Container, Navbar, Nav  } from "react-bootstrap";

import { logout } from "../Auth/login/LoginActions";

import NotesList from "../notes/NotesList";
import AddNote from "../notes/AddNote";

function Dashboard(props) {
    const onLogout = () => {
        props.logout();
    };
    console.log('Props: ', props);
    const { user } = props.auth;

    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        User: <b>{user.username}</b>
                    </Navbar.Text>
                    <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <h1>Dashboard hi!!!!!</h1>
                <NotesList />
                <AddNote />
            </Container>
        </div>
    );
}

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
  })(withRouter(Dashboard));