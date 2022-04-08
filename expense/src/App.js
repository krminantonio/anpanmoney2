import './App.css';
import { Row, Container, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home"
               element={
               <ProtectedRoute> 
                 <Home />
               </ProtectedRoute>} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
