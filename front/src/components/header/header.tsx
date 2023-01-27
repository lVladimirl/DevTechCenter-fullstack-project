import { ReactElement } from "react";
import { HeaderBox } from "./style";
import { useSelector } from "react-redux";
export const Header = (): ReactElement => {
  const state: any = useSelector((state) => state);
  return (
    <HeaderBox>
      <div>
        <h4>Bem vindo {state?.user.userName}</h4>
        <p>user status user status user status user status</p>
      </div>
    </HeaderBox>
  );
};
