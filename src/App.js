import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Layout from "./Layout";
import { UserInfoProvider } from "./Context/UserInfo";

function App() {
  return (
    <Router>
      <UserInfoProvider>
        <section>
          <Routes>
            <Route path="/" element={<Login />} /> {/* Default route */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/layout/*" element={<Layout />} />
          </Routes>
        </section>
      </UserInfoProvider>
    </Router>
  );
}

export default App;
