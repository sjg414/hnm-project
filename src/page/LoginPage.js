import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setAuthentication }) => {
  const navigate = useNavigate();

  const loginProcess = (event) => {
    event.preventDefault();
    setAuthentication(true);
    navigate("/");
  };

  return (
    <div>
      <Form
        className="login-form"
        onSubmit={(event) => {
          loginProcess(event);
        }}
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
