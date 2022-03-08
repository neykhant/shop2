import React, { useState } from "react";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const handleLogin = () => {
    if (username === "a" && password === "b") {
      console.log("HI");
      navigate('supplier')
    }
  };

  return (
    <div className="login">
      <div className="login_form">
        <p style={{ fontSize: '3rem', marginBottom: 20, color: '#9a4d3a' }}>Login Form</p>
        <TextField
          id="input"
          label="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          style={{ marginTop: '1rem' }}
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          style={{ marginTop: '3rem' }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

// export default Signup;
