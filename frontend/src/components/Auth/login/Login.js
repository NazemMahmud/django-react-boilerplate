import React, { useState } from "react";
import { Link, withRouter  } from "react-router-dom";
import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "./LoginActions.js"; 

function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    // const [password, setPassword] = useState("");
    const onChange = e => {
        const data = {...formData};
        data[e.target.name] = e.target.value;
        setFormData(data);
        // this.setState({ [e.target.name]: e.target.value });
    };
    
    const onLoginClick = () => {
        const userData = {
          username: formData.username,
          password: formData.password
        };
        props.login(userData, "/dashboard");
    };
    
    return (
        <Container>
            <Row>
                <Col md="4">
                    <h1>Login</h1>
                    <Form>
                    <Form.Group controlId="usernameId">
                        <Form.Label>User name</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter user name"
                            value={formData.username}
                            onChange={onChange}
                        />
                        <FormControl.Feedback type="invalid"></FormControl.Feedback>
                    </Form.Group>

                    <Form.Group controlId="passwordId">
                        <Form.Label>Your password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={onChange}
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    </Form>
                    <Button color="primary" onClick={onLoginClick}>Login</Button>
                    <p className="mt-2">
                        Don't have account? <Link to="/signup">Signup</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(mapStateToProps, {
    login
})(withRouter(Login));
