import React, { useState } from "react";
import PropTypes from "prop-types";
import AuthService from "../../services/auth.service";

const logginWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Login = ({ setToken }: any) => {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const token = await AuthService.login({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div style={logginWrapper}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
