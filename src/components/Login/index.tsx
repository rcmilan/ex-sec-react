import React, { useState } from "react";
import PropTypes from "prop-types";

const logginWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

type Credentials = {
  username: string | undefined;
  password: string | undefined;
};

async function loginUser(credentials: Credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }: any) => {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const token = await loginUser({
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
