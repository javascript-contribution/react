import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signUpStart } from "../../../States/Redux/Users/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="displayName">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                type="displayName"
                onChange={handleChange}
                name="displayName"
                value={displayName}
                required
              />
            </Form.Group>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/authenticate/login">Log In</Link>
      </div>
    </>
  );
}
