import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "../pages/home/home";

export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={"<Login/>"} />
        <Route path="/produto" element={"<Product/>"} />
        <Route path="/cadastro" element={"<Register/>"} />
        <Route path="/dashboard" element={"<Dashboard/>"} />
      </Routes>
    );
  };