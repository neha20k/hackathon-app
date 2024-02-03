import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useAuth } from "../../routes/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const [employeeId, setEmployeeId] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (/^\d{5}$/.test(employeeId)) {
      login();
      toast.success("Logged in successfully!");
      navigate("/home");
    } else {
      toast.error("Invalid Employee ID. Please enter a 5-digit employee id.");
    }
  };

  return (
    <Container
    fluid
      className="d-flex align-items-center justify-content-end mainContainer"
      style={{ minHeight: "100vh" }}
    >
      <Row className="m-4">
        <Col>
          <Card className="p-4">
            <h3 className="pl-2">Login</h3>
            <Form className="p-4">
              <Form.Group controlId="formEmployeeId">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" className="mt-3" type="submit" onClick={handleLogin}>
                Login
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
