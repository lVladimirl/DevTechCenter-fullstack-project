import { ReactElement } from "react";
import { TechBox, TechHeader } from "./style";
import { Card } from "../card/card";
import { Button } from "../button/button";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { TechHeaderModal } from "../../interface";

export const Tech = ({ handleModal }: TechHeaderModal): ReactElement => {
  const state: any = useSelector((state) => state);
  const techs = state.tech.tech;
  return (
    <>
      <TechHeader>
        <h4>Tecnologias</h4>
        <Button variant="text_button" variant_hover="text_button_hover" size="lesser" onClick={() => handleModal({ typeOfForm: "register" })}>
          <AddIcon />
        </Button>
      </TechHeader>
      <TechBox>
        {techs
          ? techs.map((elem: any, index: string) => {
              return (
                <Card key={elem.id} onClick={() =>handleModal({ typeOfForm: "edit", techData: { id: elem.id, name: elem.name, status: elem.status},})}>
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
