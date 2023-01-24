import * as React from "react";
import { Input } from "../input/input";
import { State } from "../../interface";
import { Button } from "../button/button";
import { ReactElement } from "react";
import { SnackBarAlert } from "../snackBarAlert/snackBarAlert";
import { ModalTechsProps } from "../../interface";
import { Modal, SnackbarOrigin } from "@mui/material";
import { TechForm, TechFormHeader } from "./style";

import CloseIcon from "@mui/icons-material/Close";


export const TechModal = ({
  open,
  handleModal,
  type,
  techData,
}: ModalTechsProps): ReactElement => {
  const [state, setState] = React.useState<State>({
    isOpenAlert: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, isOpenAlert } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ isOpenAlert: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, isOpenAlert: false });
  };
  return (
    <>
    <SnackBarAlert isOpenAlert={isOpenAlert} vertical={vertical} horizontal={horizontal} handleClose={handleClose} error={{message:"s", status:4}} />

      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {type === "register" ? (
          <TechForm>
            <TechFormHeader>
              <p>cadastre sua tecnologia</p>
              <CloseIcon
                onClick={() => handleModal({ typeOfForm: "register" })}
              />
            </TechFormHeader>
            <Input label="Nome da Tecnologia" type="text" placeholder="Typescript"></Input>
            <Input label="Status" type="text" placeholder="junior"></Input>
            <Button type="button" variant="default" variant_hover="default_hover" size="large" onClick={handleClick({vertical: "top", horizontal: "right"})} >
              {"Cadastrar Tecnologia"}
            </Button>
          </TechForm>
        ) : (
          <TechForm>
            <TechFormHeader>
              <p>Editar Sua Tecnologia</p>
              <CloseIcon onClick={() => handleModal({ typeOfForm: "edit" })} />
            </TechFormHeader>
            <Input label="Nome da Tecnologia" type="text" value={techData?.name} ></Input>
            <Input label="Status" type="text" value={techData?.status} ></Input>
            <Button type="button" variant="default" variant_hover="default_hover" size="large" >
              {"Editar Tecnologia"}
            </Button>
          </TechForm>
        )}
      </Modal>
    </>
  );
};
