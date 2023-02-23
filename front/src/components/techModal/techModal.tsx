import { Input } from "../input/input";
import { ModalTechsProps, TechFormValues } from "../../interface";
import { Button } from "../button/button";
import { ReactElement } from "react";
import { Modal } from "@mui/material";
import { TechForm, TechFormHeader, TechEditDeleteSection } from "./style";

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { TechSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../utils/api";
import { Select } from "../Select/Select";

export const TechModal = ({open,handleModal,type,techData,setState,fetchTech}: ModalTechsProps): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TechFormValues>({
    resolver: yupResolver(TechSchema),
  });
  
  const onSubmit = handleSubmit(async (data) => {
    const token = sessionStorage.getItem("@DTC-token")
    if (type === "register") {
      const formatedData = { name: data.Techname, status: data.Techstatus };
      const response = await api.post("technologies/register", formatedData).catch((error) => error);
      if (response.status === 201) {
        setState({ isOpenAlert: true, vertical: "top", horizontal: "right", ResponseType: "sucess", sucess: {message: "Tecnologia Registrada"} });
        fetchTech(token)

      } else {
        setState({ isOpenAlert: true, vertical: "top", horizontal: "right", ResponseType: "error", error: { status: response.response.status, message: response.response.data.message} });

      }
    } else {
      const formatedData = { name: data.Techname, status: data.Techstatus,};
      const response = await api.patch(`technologies/update/${techData?.id}`, formatedData).catch((error) => error);

      if (response.status === 200) {
        setState({ isOpenAlert: true, vertical: "top", horizontal: "right", ResponseType: "sucess", sucess: { message: "Alterações Salvas" } });
        fetchTech(token)

      } else {
        setState({ isOpenAlert: true, vertical: "top", horizontal: "right", ResponseType: "error", error: { status: response.response.status, message: response.response.data.message } });
      
      }
    }
    handleModal({ typeOfForm: "" })
  });
  const deleteTech = async(e: React.FormEvent<HTMLButtonElement>, id:string|undefined)=>{
    e.preventDefault()
    const token = sessionStorage.getItem("@DTC-token")
    if(id){
      const response = await api.delete(`technologies/delete/${id}`,{headers: { Authorization: `Bearer ${token}` }}).catch((error) => error);
      fetchTech(token)
    }
    handleModal({ typeOfForm: "" })
  }

  return (
    <>
      <Modal open={open} onClose={handleModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        {type === "register" ? (
          <TechForm onSubmit={onSubmit}>
            <TechFormHeader>
              <p>cadastre sua tecnologia</p>
              <CloseIcon onClick={() => handleModal({ typeOfForm: "register" })} />
            </TechFormHeader>
            <Input {...register("Techname")} label="Nome da Tecnologia" type="text" placeholder="Typescript" errors={errors?.Techname?.message} ></Input>
            <Select {...register("Techstatus")} type="tech" label="Status" placeholder={techData?.status || ""} errors={errors?.Techstatus?.message} />
            <Button type="submit" variant="default" variant_hover="default_hover" size="large" >
              {"Cadastrar Tecnologia"}
            </Button>
          </TechForm>
        ) : (
          <TechForm onSubmit={onSubmit}>
            <TechFormHeader>
              <p>Editar Sua Tecnologia</p>
              <CloseIcon onClick={() => handleModal({ typeOfForm: "edit" })} />
            </TechFormHeader>
            <Input {...register("Techname")} label="Nome da Tecnologia" type="text" placeholder={techData?.name || ""} errors={errors?.Techname?.message} ></Input>
            <Select {...register("Techstatus")} type="tech" label="Status" placeholder={techData?.status || ""} errors={errors?.Techstatus?.message} />
            <TechEditDeleteSection>
            <Button type="submit" variant="default" variant_hover="default_hover" size="large" >
              {"Salvar Aterações"}
            </Button> 
            <Button type="button" variant="disable" variant_hover="disable_hover" size="medium" onClick={(e) => deleteTech(e,techData?.id)}>
              {"excluir"}
            </Button> 
            </TechEditDeleteSection>

          </TechForm>
        )}
      </Modal>
    </>
  );
};
