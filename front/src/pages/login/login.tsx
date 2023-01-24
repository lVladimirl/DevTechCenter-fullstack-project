import * as React from "react";
import { Input } from "../../components/input/input";
import { State } from "../../interface";
import { Button } from "../../components/button/button";
import { FormBox } from "./style";
import { useNavigate } from "react-router-dom";
import { SnackBarAlert } from "../../components/snackBarAlert/snackBarAlert";

export const Login = () => {
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

  const sendToRegister = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/registro");
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
        <h1>BrandName</h1>
        <form onSubmit={(e) => hadleSubmit(e)}>
          <h2>Login</h2>
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
          <Button
            type="submit"
            variant="default"
            variant_hover="default_hover"
            size="large"
          >
            {" "}
            Entrar
          </Button>
          <span>Não possui conta?</span>
          <Button
            type="button"
            variant="disable"
            variant_hover="disable_hover"
            size="large"
            onClick={(e) => sendToRegister(e)}
          >
            {" "}
            Cadastre-se
          </Button>
        </form>
      </FormBox>
    </>
  );
};
