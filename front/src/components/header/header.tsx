import { ReactElement, useState } from "react";
import { HeaderBox } from "./style";
import { useSelector } from "react-redux";
export const Header = (): ReactElement => {
  const state: any = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState("active");
  return (
    <HeaderBox className={isOpen ? "active" : "noActive"}>
      <h4>Bem vindo {state?.user.user}</h4>
    </HeaderBox>
  );
};
