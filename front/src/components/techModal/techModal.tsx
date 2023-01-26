import { Input } from "../input/input";
import { ModalTechsProps, TechFormValues } from "../../interface";
import { Button } from "../button/button";
import { ReactElement } from "react";
import { Modal } from "@mui/material";
import { TechForm, TechFormHeader } from "./style";

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { TechSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const TechModal = ({
  open,
  handleModal,
  type,
  techData,
  setState,
}: ModalTechsProps): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TechFormValues>({
    resolver: yupResolver(TechSchema),
  });
  const onSubmit = handleSubmit((data) => {
    if (type === "register") {
      setState({
        isOpenAlert: true,
        vertical: "top",
        horizontal: "right",
        ResponseType: "success",
      });

      // if(axios request == error)
      // if (response.status !== 201) {
      //   setState({
      //     isOpenAlert: true,
      //     vertical: "top",
      //     horizontal: "right",
      //     ResponseType: "success",
      //   });
      // } else {
      //  setState({
      //   isOpenAlert: true,
      //   vertical: "top",
      //   horizontal: "right",
      //   ResponseType: "error",
      //   error: {
      //     status: respose.status,
      //     message:response.message,
      //   }
      // });
      // }
    } else {
      setState({
        isOpenAlert: true,
        vertical: "top",
        horizontal: "right",
        ResponseType: "success",
      });
      // if(axios request == error)
      // if (response.status !== 201) {
      //   setState({
      //     isOpenAlert: true,
      //     vertical: "top",
      //     horizontal: "right",
      //     ResponseType: "success",
      //   });
      // } else {
      //  setState({
      //   isOpenAlert: true,
      //   vertical: "top",
      //   horizontal: "right",
      //   ResponseType: "error",
      //   error: {
      //     status: respose.status,
      //     message:response.message,
      //   }
      // });
      // }
    }
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {type === "register" ? (
          <TechForm onSubmit={onSubmit}>
            <TechFormHeader>
              <p>cadastre sua tecnologia</p>
              <CloseIcon
                onClick={() => handleModal({ typeOfForm: "register" })}
              />
            </TechFormHeader>
            <Input
              {...register("Techname")}
              label="Nome da Tecnologia"
              type="text"
              placeholder="Typescript"
              errors={errors?.Techname?.message}
            ></Input>
            <Input
              {...register("Techstatus")}
              label="Status"
              type="text"
              placeholder="junior"
              errors={errors?.Techstatus?.message}
            ></Input>
            <Button
              type="submit"
              variant="default"
              variant_hover="default_hover"
              size="large"
            >
              {"Cadastrar Tecnologia"}
            </Button>
          </TechForm>
        ) : (
          <TechForm onSubmit={onSubmit} >
            <TechFormHeader>
              <p>Editar Sua Tecnologia</p>
              <CloseIcon onClick={() => handleModal({ typeOfForm: "edit" })} />
            </TechFormHeader>
            <Input
              {...register("Techname")}
              label="Nome da Tecnologia"
              type="text"
              placeholder={techData?.name || "" }
              errors={errors?.Techname?.message}
            ></Input>
            <Input
              {...register("Techstatus")}
              label="Status"
              type="text"
              placeholder={techData?.status || "" }
              errors={errors?.Techstatus?.message}
            ></Input>
            <Button
              type="submit"
              variant="default"
              variant_hover="default_hover"
              size="large"
            >
              {"Editar Tecnologia"}
            </Button>
          </TechForm>
        )}
      </Modal>
    </>
  );
};
