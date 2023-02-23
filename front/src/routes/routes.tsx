import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";

export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register/>} />
      </Routes>
    );
  };