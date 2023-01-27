import * as React from "react";
import { State } from "../../interface";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { SnackBarAlert } from "../../components/snackBarAlert/snackBarAlert";
import { FormBox, FormHeader } from "../login/style";
import { RegisterForm } from "../../components/registerForm/registerForm";
export const Register = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState<State>({
    isOpenAlert: false,
    vertical: "top",
    horizontal: "right",
    ResponseType: "error",
    error: {
      status: 0,
      message: "error message",
    },
  });
  const { vertical, horizontal, isOpenAlert, ResponseType, error } = state;

  const handleClose = () => {
    setState({ ...state, isOpenAlert: false });
  };

  const sendToLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <SnackBarAlert
        ResponseType={ResponseType}
        isOpenAlert={isOpenAlert}
        vertical={vertical}
        horizontal={horizontal}
        handleClose={handleClose}
        error={error}
      />
      <FormBox>
        <FormHeader>
          <h1>BrandName</h1>
          <Button
            variant="text_button"
            variant_hover="text_button_hover"
            size="small"
            onClick={(e) => sendToLogin(e)}
          >
            Voltar
          </Button>
        </FormHeader>
        <RegisterForm setState={setState} />
      </FormBox>
    </>
  );
};
