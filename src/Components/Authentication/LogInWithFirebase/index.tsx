import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { emailSignInStart } from "../../../States/Redux/Users/user.action";
import { CircularProgress } from "@mui/material";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function Login() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      dispatch(emailSignInStart(email, password));
      navigate("/");
      resetFormFields();
    } catch (error) {
      setError("Failed to log in");
      console.log("user sign in failed", error);
    }
    setLoading(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <span className="text-center mb-4">Already have an account?</span>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              {loading ? <CircularProgress color="inherit" /> : "Log In"}
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/authenticate/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/authenticate/sign-up">Sign Up</Link>
      </div>
    </>
  );
}
