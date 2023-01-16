import { ReactElement} from "react";
import { Button } from "../button/button";
import { BoxNav } from "./style";

export const NavBar = (): ReactElement => {

  return (
    <BoxNav>
      <h1>BrandName</h1>
      <Button variant="text_button" variant_hover="text_button_hover" size="small" >Sair</Button>
    </BoxNav>
  );

};
