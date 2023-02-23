import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearTech } from "../../store/techSlice";
import { logout } from "../../store/userSlice";
import { Button } from "../button/button";
import { BoxNav } from "./style";
export const NavBar = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toLogin = () => {
    dispatch(clearTech())
    dispatch(logout())
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <BoxNav>
      <div>
        <h1>BrandName</h1>
        <Button variant="text_button" variant_hover="text_button_hover" size="small" onClick={() => {toLogin()}}>
          Sair
        </Button>
      </div>
    </BoxNav>
  );
};
