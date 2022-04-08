import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";



const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    const [error, setError] = useState("");
    const [mbudget, setMbudget] = useState(0);
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try{
            await signUp(email,password);
            navigate("/");
        }catch(err) {
            setError(err.message);
        }
    }
  return (
    <>
      <div className="p-4 box">
          <center>
        <h2 className="mb-3">REGISTER</h2>
        </center>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
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

          <Form.Group className="mb-3" controlId="formBasicOccupation">
            <Form.Select>
                <option>Select Occupation</option>
                <option value="1">Student</option>
                <option value="2">Employed</option>
                <option value="3">Unemployed</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPurchasef">
            <Form.Select>
                <option>Select Purchase Frequency</option>
                <option value="1">Low Spender</option>
                <option value="2">Moderate Spender</option>
                <option value="3">High Spender</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMBudget">
            <Form.Control
              type="number"
              placeholder="2000"
              onChange={(e) => setMbudget(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Register
            </Button>
            <center>
            <span>Have an account? <Link to="/">Sign In</Link></span>
            </center>
          </div>
        </Form>
        <hr />
        
      </div>
    </>
  );
};

export default Signup;