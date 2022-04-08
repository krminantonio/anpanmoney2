import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn } = useUserAuth();
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try{
            await logIn(email,password);
            navigate("/home");
        }catch(err) {
            setError(err.message);
        }
    }
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">SIGN IN</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
            <center>
            <span>Don't have an account? <Link to="/signUp">Register</Link></span>
            </center>
          </div>
        </Form>
        <hr />
        
      </div>
      
    </>
  );
};

export default Login;