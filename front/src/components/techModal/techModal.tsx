import { Modal } from "@mui/material";
import { ReactElement } from "react";
import { ModalTechsProps } from "../../interface";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { TechForm, TechFormHeader } from "./style";
import CloseIcon from "@mui/icons-material/Close";

export const TechModal = ({
  open,
  handleModal,
  type,
  techData,
}: ModalTechsProps): ReactElement => {
  return (
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
          <Input
            label="Nome da Tecnologia"
            type="text"
            placeholder="Typescript"
          ></Input>
          <Input label="Status" type="text" placeholder="junior"></Input>
          <Button
            type="button"
            variant="default"
            variant_hover="default_hover"
            size="large"
          >
            {" "}
            Cadastrar Tecnologia
          </Button>
        </TechForm>
      ) : (
        <TechForm>
          <TechFormHeader>
            <p>Editar Sua Tecnologia</p>
            <CloseIcon
              onClick={() => handleModal({ typeOfForm: "register" })}
            />
          </TechFormHeader>
          <Input
            label="Nome da Tecnologia"
            type="text"
            value={techData?.name}
          ></Input>
          <Input label="Status" type="text" value={techData?.status}></Input>
          <Button
            type="button"
            variant="default"
            variant_hover="default_hover"
            size="large"
          >
            {" "}
            Cadastrar Tecnologia
          </Button>
        </TechForm>
      )}
    </Modal>
  );
  // if(type ==="register"){
  //   return (
  //     <Modal
  //       open={open}
  //       onClose={handleModal}
  //       aria-labelledby="modal-modal-title"
  //       aria-describedby="modal-modal-description"
  //     >
  //       <TechForm>
  //         <TechFormHeader>
  //           <p>cadastre sua tecnologia</p>
  //           <CloseIcon onClick={() => handleModal()} />
  //         </TechFormHeader>
  //         <Input
  //           label="Nome da Tecnologia"
  //           type="text"
  //           placeholder="Typescript"
  //         ></Input>
  //         <Input label="Status" type="text" placeholder="junior"></Input>
  //         <Button
  //           type="button"
  //           variant="default"
  //           variant_hover="default_hover"
  //           size="large"
  //         >
  //           {" "}
  //           Cadastrar Tecnologia
  //         </Button>
  //       </TechForm>
  //     </Modal>
  //   );
  // }else{
  //   return (
  //     <Modal
  //       open={open}
  //       onClose={handleModal}
  //       aria-labelledby="modal-modal-title"
  //       aria-describedby="modal-modal-description"
  //     >
  //       <TechForm>
  //         <TechFormHeader>
  //           <p>Editar Tecnologia</p>
  //           <CloseIcon onClick={() => handleModal()} />
  //         </TechFormHeader>
  //         <Input
  //           label="Nome da Tecnologia"
  //           type="text"
  //           placeholder="Typescript"
  //         ></Input>
  //         <Input label="Status" type="text" placeholder="junior"></Input>
  //         <Button
  //           type="button"
  //           variant="default"
  //           variant_hover="default_hover"
  //           size="large"
  //         >
  //           {" "}
  //           Cadastrar Tecnologia
  //         </Button>
  //       </TechForm>
  //     </Modal>
  //   );
  // }
};
