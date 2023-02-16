import { ReactElement } from "react";
import { HeaderBox } from "./style";
import { useSelector } from "react-redux";
export const Header = (): ReactElement => {
  const state: any = useSelector((state) => state);
  return (
    <HeaderBox>
      <div>
        <h4>Bem vindo {state?.user.name}</h4>
        <p>{state?.user.status}</p>
      </div>
    </HeaderBox>
  );
};
