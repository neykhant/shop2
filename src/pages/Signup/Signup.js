import React from "react";
import "./Singup.css";
// import TextField from '@mui/material/TextField';
// import { TextField } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Signup() {
  return (
    <div className="signup">
      <div className="signup_form">
        <p style={{ fontSize: 20 }}>Signup</p>
        <TextField
          id="input"
          label="Username"
          type="text"
        />
        <TextField
        style={{ marginTop: 12}}
          id="outlined-password-input"
          label="Password"
          type="password"
        />
        <Button variant="contained" color="primary" style={{ marginTop: 30 }}>
          Login
        </Button>
      </div>
    </div>
  );
}

// export default Signup;
