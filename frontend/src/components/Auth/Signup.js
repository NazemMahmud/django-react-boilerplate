import React, {useState} from "react";
import { Container, Form, FormControl, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup(props) {
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
    
    const onSignupClick = () => {
        const userData = {
          username: formData.username,
          password: formData.password
        };
        console.log("Sign up " + userData.username + " " + userData.password);
    };
    
    return (
        <Container>
            <Row>
            <Col md="4">
              <h1>Sign up</h1>
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
              <Button 
                color="primary"
                onClick={onSignupClick}  
              >Sign up</Button>
              <p className="mt-2">
                Already have account? <Link to="/login">Login</Link>
              </p>
            </Col>
          </Row>
        </Container>
    );
}

export default Signup;