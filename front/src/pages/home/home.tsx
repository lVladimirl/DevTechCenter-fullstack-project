import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { NavBar } from "../../components/navBar/navBar";
import { Tech } from "../../components/techs/techs";

export const Home = () => {
  const state: any = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if(state.user.user === ""){
      navigate('/login')
    }
  }, []);
  
  return (
    <>
      <NavBar />
      <Header />
      <Tech />
    </>
  );
};
