import "./App.css";
import Footer from "../src/components/Footer";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  let authenticated = localStorage.getItem("authenticated");
  const [token, setToken] = React.useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
          <Route path="/" element={<Protected authenticated={authenticated} />}>
            <Route
              path="dashboard"
              element={
                <DashboardPage authenticated={authenticated} token={token} />
              }
            />
            <Route
              path="/"
              element={
                authenticated ? (
                  <Navigate to="dashboard" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
