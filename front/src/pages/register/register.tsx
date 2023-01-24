import * as React from "react";
import { State } from "../../interface";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { SnackBarAlert } from "../../components/snackBarAlert/snackBarAlert";
import { FormBox, FormHeader } from "../login/style";
export const Register = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState<State>({
    isOpenAlert: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, isOpenAlert } = state;

  const handleClose = () => {
    setState({ ...state, isOpenAlert: false });
  };

  const sendToLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/login");
  };

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send info to yup");
    setState({ isOpenAlert: true, vertical: "top", horizontal: "right"});
  };

  return (
    <>
    <SnackBarAlert isOpenAlert={isOpenAlert} vertical={vertical} horizontal={horizontal} handleClose={handleClose} error={{message:"s", status:4}} />
      <FormBox>
        <FormHeader >
          <h1>BrandName</h1>
          <Button
            variant="text_button"
            variant_hover="text_button_hover"
            size="small"
            onClick={(e)=> sendToLogin(e)}
          >
            Voltar
          </Button>
        </FormHeader>
        <form onSubmit={(e) => hadleSubmit(e)}>
          <h2>Registro</h2>
          <Input
            label="nome"
            type="text"
            placeholder="pedrinho"
            errors="errinho"
          ></Input>
          <Input
            label="email"
            type="text"
            placeholder="pedrinho@gmail"
            errors="errinho"
          ></Input>
          <Input
            label="senha"
            type="text"
            placeholder="pedrinho123"
            errors="errinho"
          ></Input>
          <Input
            label="confirmar senha"
            type="text"
            placeholder="pedrinho123"
            errors="errinho"
          ></Input>
          <Input
            label="bio"
            type="text"
            placeholder="javascript is good, java is evil."
            errors="errinho"
          ></Input>
          <Input
            label="contato"
            type="text"
            placeholder="12345678"
            errors="errinho"
          ></Input>
          <Input
            label="status"
            type="text"
            placeholder="juior dev, pleno, senior"
            errors="errinho"
          ></Input>
          <Button
            type="submit"
            variant="default"
            variant_hover="default_hover"
            size="large"
          >
            {" "}
            Cadastrar
          </Button>
        </form>
      </FormBox>
    </>
  );
};
