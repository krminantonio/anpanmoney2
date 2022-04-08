import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Signup = () => {

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">REGISTER</h2>
        
        <Form >
        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="text"
              placeholder="Username"
             
            />
          </Form.Group>

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
              Register
            </Button>
          </div>
        </Form>
        <hr />
        
      </div>
      <div className="p-4 box mt-3 text-center">
        Have an account? <Link to="/">Sign In</Link>
      </div>
    </>
  );
};

export default Signup;