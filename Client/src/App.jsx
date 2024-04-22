import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./screens/Screens/MainPage.jsx";
import LoginPage from "./screens/Screens/LoginPage.jsx";
import LandingPage from "./screens/Screens/LandingPage.jsx";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Messages from "./pages/Messages";
// import Analytics from "./pages/Analytics";
// import FileManager from "./pages/FileManager";
// import Order from "./pages/Order";
// import Saved from "./pages/Saved";
// import Setting from "./pages/Setting";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
        {/* <Routes>
          <Route path="/home" element={<Dashboard />}>
            <Route path="/Dashbord" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />
          </Route>
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
