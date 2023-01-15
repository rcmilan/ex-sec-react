import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Preferences from "./Preferences";
import Login from "./Login";

const wrapperStyle: React.CSSProperties = {
  padding: "20px",
};

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken}/>;
  }

  return (
    <div style={wrapperStyle}>
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
