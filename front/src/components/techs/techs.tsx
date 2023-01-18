import { ReactElement } from "react";
import { TechBox, TechHeader } from "./style";
import { Card } from "../card/card";
import { Button } from "../button/button";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

export const Tech = (): ReactElement => {
  const state: any = useSelector((state) => state);
  const techs = state.user.tech
  return (
    <>
      <TechHeader>
        <h4>Tecnologias</h4>
        <Button
          variant="text_button"
          variant_hover="text_button_hover"
          size="lesser"
        >
          <AddIcon />
        </Button>
      </TechHeader>
      <TechBox>
        {techs
          ? techs.map((elem:any, index:string) => {
              return (
                  <Card key={elem.id}>
                    <h4 key={`${index}h4`}>{elem.name}</h4>
                    <p key={`${index}p`}>{elem.status}</p>
                  </Card>
              );
            })
          : null}
      </TechBox>
    </>
  );
};
