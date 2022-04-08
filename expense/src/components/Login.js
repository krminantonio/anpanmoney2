import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Login = () => {

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">SIGN IN</h2>
        
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
             
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signUp">Register</Link>
      </div>
      </div>
      
    </>
  );
};

export default Login;