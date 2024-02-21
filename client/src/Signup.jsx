import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              autoComplete="off"
              className="form-control rounded-0  "
              id="username"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email Address</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              className="form-control rounded-0"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <br />
            <input
              type="Password"
              autoComplete="off"
              placeholder="Enter Password"
              className="form-control mb-3 rounded-0"
              id="pwd"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0" type="submit">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/login"
          className="btn text-white bg-black btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>

    // <div className="container mt-5">
    //   <h2 className="text-center mb-4">Sign Up</h2>
    //   <Form>
    //     <Form.Group className="mb-3" controlId="formBasicUsername">
    //       <Form.Label>Username</Form.Label>
    //       <Form.Control type="username" placeholder="Enter Username" />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.control type="email" placeholder="Enter email"></Form.control>
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
    //       <Form.Label>Confirm Password</Form.Label>
    //       <Form.Control type="password" placeholder="Confirm Password" />
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //       Sign Up
    //     </Button>
    //   </Form>
    // </div>
  );
}

export default Signup;
