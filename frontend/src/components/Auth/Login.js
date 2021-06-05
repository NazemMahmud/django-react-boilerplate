import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";

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
        console.log("Login " + userData.username + " " + userData.password);
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

export default Login;